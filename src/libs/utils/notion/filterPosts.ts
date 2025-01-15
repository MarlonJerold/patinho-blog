import { TPosts, TPostStatus, TPostType } from "src/types"

export type FilterPostsOptions = {
  acceptStatus?: TPostStatus[]
  acceptType?: TPostType[]
}

const initialOption: FilterPostsOptions = {
  acceptStatus: ["Public"],
  acceptType: ["Post"],
}
const current = new Date()
const tomorrow = new Date(current)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

export function filterPosts(
  posts: TPosts,
  options: FilterPostsOptions = initialOption
) {
  if (!Array.isArray(posts)) {
    console.error("Invalid posts data:", posts);
    return [];
  }

  const { acceptStatus = ["Public"], acceptType = ["Post"] } = options;
  const filteredPosts = posts
    // filter data
    .filter((post) => {
      const postDate = new Date(post?.date?.start_date || post.createdTime);
      if (!post.title || !post.slug || postDate > tomorrow) return false;
      return true;
    })
    // filter status
    .filter((post) => {
      const postStatus = post.status?.[0];
      return postStatus && acceptStatus.includes(postStatus);
    })
    // filter type
    .filter((post) => {
      const postType = post.type?.[0];
      return postType && acceptType.includes(postType);
    });

  return filteredPosts;
}
