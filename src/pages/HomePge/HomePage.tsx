import { Link } from "react-router-dom";
import {
  Tabs,
  tabsItems,
  FootballEvents,
  MmaEvents,
  EventsTitle,
} from "components";
import { ROUTE } from "router";
import { useEffect, useState } from "react";
import { Tab } from "types";
import { StyledMain } from "./styles";
import {
  fetchEvents,
  getAllEvents,
  useAppDispatch,
  useAppSelector,
} from "store";

// import { MmaEvents } from "components";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState(tabsItems[0].label);
  const [endPoint, setEndPoint] = useState(tabsItems[0].id);
  const { events } = useAppSelector(getAllEvents);
  const dispatch = useAppDispatch();
  const [titleLabel, setTitleLabel] = useState<string>("Предстоящие бои:");

  const handleActiveTab = (label: Tab) => {
    setActiveTab(label);

    if (label === tabsItems[0].label) {
      setEndPoint(tabsItems[0].id);
      setTitleLabel("Предстоящие бои:");
    } else {
      setEndPoint(tabsItems[1].id);
      setTitleLabel("Предстоящие матчи:");
    }
  };

  useEffect(() => {
    dispatch(fetchEvents(endPoint));
  }, [dispatch, endPoint]);

  return (
    <StyledMain>
      <Tabs
        isActiveTab={activeTab}
        tabsItems={tabsItems}
        onClick={handleActiveTab}
      />

      <EventsTitle label={titleLabel} />
      {activeTab === tabsItems[0].label && <MmaEvents mmaEvents={events} />}
      {activeTab === tabsItems[1].label && (
        <FootballEvents footballEvents={events} />
      )}
    </StyledMain>
  );
};
