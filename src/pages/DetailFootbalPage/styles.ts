import styled from "styled-components";
import { Color } from "ui";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media screen and (max-width: 992.98px) {
    padding: 1.5rem 1.5rem 0 0.5rem;
  }
`;
const ErrorMessage = styled.h2`
  padding-top: 4rem;
  text-align: center;
  font-size: 2rem;
`;

const ButtonBack = styled.button`
  width: 100px;
  height: 40px;
  margin-bottom: 20px;
  background-color: ${Color.PRIMARY};
  color: ${Color.WHITE};
  font-size: 1rem;
  white-space: nowrap;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

const Date = styled.div`
  font-size: 1.1rem;
  color: ${Color.TEXT};
  line-height: 150%;
`;

export { ErrorMessage, ButtonBack, Wrapper, Date };
