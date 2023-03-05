import styled from "styled-components";
import { Color } from "ui";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 200px auto;
  place-items: center center;
  height: 60px;
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  background-color: ${Color.PRIMARY};
  font-weight: 700;
  font-size: 1.5rem;
  font-style: italic;
  color: white;
`;

export { StyledHeader, Logo };
