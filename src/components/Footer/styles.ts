import styled from "styled-components";
import { Color } from "ui";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: ${Color.FOOTER};
  color: ${Color.WHITE};
  font-size: 1.1rem;
`;

export { StyledFooter };
