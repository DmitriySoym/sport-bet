import {
  Tabs,
  tabsItems,
  FootballEvents,
  MmaEvents,
  EventsTitle,
} from "components";

import { useEffect, useState } from "react";
import { Tab } from "types";
import { StyledMain, BetAccepted, CloseBtn } from "./styles";
import {
  fetchEvents,
  getAllEvents,
  getEventInfo,
  setEventInfo,
  useAppDispatch,
  useAppSelector,
} from "store";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState(tabsItems[0].label);
  const [endPoint, setEndPoint] = useState(tabsItems[0].id);
  const { events } = useAppSelector(getAllEvents);
  const dispatch = useAppDispatch();
  const [titleLabel, setTitleLabel] = useState<string>("Предстоящие бои:");
  const { firstTeam, secondTeam, eventType, messageStatus } =
    useAppSelector(getEventInfo);

  const handleClose = () => {
    dispatch(setEventInfo({ messageStatus: !messageStatus }));
  };
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
      {messageStatus == true && (
        <BetAccepted>
          Спасибо, ваша ставка на предстоящий{" "}
          <b>
            {eventType} {firstTeam} - {secondTeam}
          </b>{" "}
          принята! <CloseBtn onClick={handleClose}>X</CloseBtn>
        </BetAccepted>
      )}
      <EventsTitle label={titleLabel} />
      {activeTab === tabsItems[0].label && <MmaEvents mmaEvents={events} />}
      {activeTab === tabsItems[1].label && (
        <FootballEvents footballEvents={events} />
      )}
    </StyledMain>
  );
};
