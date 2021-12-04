import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('${(props) => props.theme.fontSource}');
  html{font-size: 10px;}
  * {
   border: 0;
   margin: 0;
  }
  body {
    font-family: Urbanist, sans-serif;
  }
  h1{
    font-style: normal;
    font-weight: 200;
    font-size: 36px;
    line-height: 54px;
  }
`;

export default GlobalStyles;
