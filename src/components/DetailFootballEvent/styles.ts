import styled from "styled-components";
import { Color } from "ui";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 568.98px) {
    flex-direction: column;
    align-items: start;
  }
`;

const WrapperItem = styled.div`
  @media screen and (max-width: 568.98px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    width: 100%;
  }
`;

const EventName = styled.div`
  color: ${Color.TEXT};
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 150%;
  text-align: center;

  @media screen and (max-width: 568.98px) {
    font-size: 1rem;
    text-align: start;
  }
`;

const Coefficient = styled.div`
  padding-top: 0.5rem;
  color: ${Color.TEXT};
  font-size: 1.1rem;
  line-height: 120%;
  text-align: center;

  @media screen and (max-width: 568.98px) {
    text-align: end;
  }
`;

const DateWrapper = styled.div`
  font-size: 1.1rem;
  color: ${Color.TEXT};
  line-height: 150%;
  margin-bottom: 1rem;

  @media screen and (max-width: 568.98px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  margin: 20px 0;
  background-color: ${Color.PRIMARY};
  color: ${Color.WHITE};
  font-size: 1rem;
  white-space: nowrap;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    cursor: default;
    background-color: ${Color.TABNOTACTIVE};
  }
`;

export { Wrapper, EventName, Coefficient, DateWrapper, Button, WrapperItem };
