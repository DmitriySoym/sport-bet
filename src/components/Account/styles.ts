import styled from "styled-components";
import { Color } from "ui";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding-right: 25px;

  @media screen and (max-width: 767.98px) {
    grid-area: block3;
  }

  @media screen and (max-width: 568.98px) {
    justify-content: flex-start;
  }
`;

const StyledAccount = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 232px;
  width: 100%;
  line-height: 2.2rem;

  @media screen and (max-width: 568.98px) {
    padding-top: 5px;
    & svg {
      height: 40px;
    }
  }
`;

const Btn = styled.p`
  padding-right: 40px;
  border: none;

  line-height: 34px;
  color: ${Color.TEXT};
  background-color: inherit;
`;

const UserLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${Color.PRIMARY};
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  color: ${Color.WHITE};
`;

const Name = styled.p`
  padding: 0 10px;
  color: ${Color.TEXT};
  font-size: 1.2rem;
  font-weight: 500;
`;

export { StyledAccount, Btn, UserLogo, Name, Wrapper };
