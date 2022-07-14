import { createGlobalStyle } from 'styled-components'
import {ThemeType} from "../../theme";

const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p {
    margin: 0;
  }
  
  img {
    max-width: 100%;
  }
  
  button {
    font-family: 'Open Sans', sans-serif;
  }
`

export default GlobalStyles;
