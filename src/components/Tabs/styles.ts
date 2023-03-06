import styled from "styled-components";
import { Color } from "ui";

const TabsWrapper = styled.div`
  display: flex;
  padding-bottom: 2rem;
`;

const StyledTab = styled.a<{ isActive: boolean }>`
  display: block;
  width: 141px;
  height: 48px;
  padding-top: 1rem;
  margin-right: 2rem;
  color: ${Color.TITLE};
  font-weight: 600;
  text-align: center;
  transition: 0.3s;
  border-bottom: ${({ isActive }) =>
    isActive ? `2px solid ${Color.PRIMARY}` : "1px solid transparent"};
  cursor: pointer;

  &:hover {
    color: ${Color.PRIMARY};
  }
`;

export { TabsWrapper, StyledTab };
