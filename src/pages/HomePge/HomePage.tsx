import { generatePath, Link } from "react-router-dom";
import { Tabs, tabsItems, FootballEvents, MmaEvents } from "components";
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

  const handleActiveTab = (label: Tab) => {
    setActiveTab(label);

    if (label === tabsItems[0].label) {
      setEndPoint(tabsItems[0].id);
    } else {
      setEndPoint(tabsItems[1].id);
    }
  };

  useEffect(() => {
    dispatch(fetchEvents({ endPoint: endPoint }));
  }, [dispatch, endPoint]);

  return (
    <StyledMain>
      <Tabs
        isActiveTab={activeTab}
        tabsItems={tabsItems}
        onClick={handleActiveTab}
      />
      <Link to={ROUTE.DETAIL}>Detail</Link>
      {activeTab === tabsItems[0].label && <MmaEvents mmaEvents={events} />}
      {activeTab === tabsItems[1].label && (
        <FootballEvents footballEvents={events} />
      )}
    </StyledMain>
  );
};
