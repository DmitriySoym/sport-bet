import styled from "styled-components";
import { Color } from "ui";

const Wrapper = styled.div`
  padding: 2rem;
`;
const ErrorMessage = styled.h2`
  padding-bottom: 4rem;
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

export { ErrorMessage, ButtonBack, Wrapper };
