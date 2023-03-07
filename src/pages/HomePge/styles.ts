import styled from "styled-components";
import { Color } from "ui";

const StyledMain = styled.main`
  width: 100%;
  padding-top: 2rem;

  @media screen and (max-width: 992.98px) {
    padding: 1.5rem 1rem 0;
  }
`;

const BetAccepted = styled.p`
  width: 100%;
  height: 3rem;
  text-align: center;
  font-size: 1.2rem;
  color: ${Color.BTNENTER};
`;

const CloseBtn = styled.button`
  height: 1.5rem;
  width: 1.5rem;
  color: ${Color.WHITE};
  background-color: ${Color.PRIMARY};
  border-radius: 5px;
  transition: all 0.3s linear;

  &:hover {
    filter: drop-shadow(0px 4px 10px rgba(255, 0, 0, 0.5));
  }
`;

export { StyledMain, BetAccepted, CloseBtn };
