import styled from "styled-components";
import { Color } from "ui";

const StyledButton = styled.a<{ btnColor: string }>`
  padding: 5px;
  color: ${Color.WHITE};
  background-color: ${(props) => props.btnColor};
  overflow: hidden;
  font-size: 1rem;
  white-space: nowrap;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

export { StyledButton };
