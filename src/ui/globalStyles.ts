import { createGlobalStyle } from "styled-components";
import { nullStyle } from "./";

export const GlobalStyles = createGlobalStyle`
HTML{

  --text-color: #262626;
  --title-color: #000;
}

body{
  font-family: 'Inter';
  font-style: normal;
  background-color: #f3f3f3;
}

${nullStyle}
`;
