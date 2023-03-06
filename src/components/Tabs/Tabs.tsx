import { TabsWrapper, StyledTab } from "./styles";
import { Tab, ITab } from "types";

interface IProps {
  tabsItems: ITab[];
  onClick: (label: Tab) => void;
  isActiveTab: string;
}

export const tabsItems: ITab[] = [
  { id: "mma", label: Tab.MMA },
  { id: "football", label: Tab.FOOTBALL },
];

export const Tabs = ({ tabsItems, onClick, isActiveTab }: IProps) => {
  return (
    <TabsWrapper>
      {tabsItems &&
        tabsItems.map((tab) => (
          <StyledTab
            isActive={isActiveTab === tab.label}
            key={tab.id}
            onClick={() => onClick(tab.label)}>
            {tab.label}
          </StyledTab>
        ))}
    </TabsWrapper>
  );
};
