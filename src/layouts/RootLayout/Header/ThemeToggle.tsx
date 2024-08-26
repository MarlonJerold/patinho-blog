import styled from "@emotion/styled"
import React from "react"
import { Emoji } from "src/components/Emoji"
import useScheme from "src/hooks/useScheme"

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [scheme, setScheme] = useScheme();

  // Certifique-se de que o esquema inicial é "light"
  React.useEffect(() => {
    setScheme("light");
  }, [setScheme]);

}

export default ThemeToggle

const StyledWrapper = styled.div`
  cursor: pointer;
`
