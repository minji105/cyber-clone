import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  body {
    width:100%; 
    margin: 0;
    padding: 0;
    font-family: 'noto sans';
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle;