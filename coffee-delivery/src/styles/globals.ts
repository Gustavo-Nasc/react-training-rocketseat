import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple}
  }

  body {
    background: ${(props) => props.theme.background};
    overflow-x: hidden;
  }

  button {
    border: none;
    background-color: transparent;
  }

`