import styled from "styled-components";
import { Color } from "ui";

const Event = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  color: ${Color.TEXT};
  cursor: pointer;

  @media screen and (max-width: 568.98px) {
    font-size: 1rem;
  }

  &::after {
    content: "";
    display: block;
    position: relative;
    background-color: ${Color.PRIMARY};
    height: 2px;
    width: 0%;
    left: 50%;
    transition: width 200ms ease-out;
    transform: translateX(-50%);
  }
  &:hover::after {
    width: 100%;
  }
`;

const FighterInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Event, FighterInfo };
