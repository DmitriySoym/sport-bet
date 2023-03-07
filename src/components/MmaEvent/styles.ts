import styled from "styled-components";
import { Color } from "ui";

const Event = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  color: ${Color.TEXT};
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid ${Color.PRIMARY};
  }
`;

const FighterInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Event, FighterInfo };
