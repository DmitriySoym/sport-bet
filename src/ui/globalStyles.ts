import { createGlobalStyle } from "styled-components";
import { nullStyle } from "./";

export const GlobalStyles = createGlobalStyle`
HTML{
  --primary: #EC7979;
  --text-color: #262626;
  --title-color: #000;
  --white: #ffffff;
  --btn-enter: #068845;
  --btn-reg: #ffb800;
}

body{
  font-family: 'Inter';
  font-style: normal;
  background-color: #f3f3f3;
}

${nullStyle}
`;
