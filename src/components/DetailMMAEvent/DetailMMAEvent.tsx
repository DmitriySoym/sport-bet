import { useEffect, useState } from "react";
import { AllEvents } from "types";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import {
  Wrapper,
  EventName,
  Coefficient,
  DateWrapper,
  Button,
  WrapperItem,
} from "./styles";
import { useAppDispatch, setEventInfo } from "store";

interface IProps {
  mmaEvent: AllEvents;
}

export const DetailMMAEvent = ({ mmaEvent }: IProps) => {
  let newDate = new Date();
  let date = newDate.getDate() + 3;
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const [buttonState, setButtonState] = useState(true);
  const handleButtonEnable = () => {
    setButtonState(false);
  };
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(
      setEventInfo({
        firstTeam: mmaEvent.firstFighter,
        secondTeam: mmaEvent.secondFighter,
        eventType: "поединок",
      })
    );
  };

  return (
    <div>
      <DateWrapper>
        Дата события:{" "}
        <strong>
          {date}.{month}.{year}
        </strong>
      </DateWrapper>
      <form action="#">
        <Wrapper>
          <WrapperItem>
            <EventName>{mmaEvent.firstFighter} - победа</EventName>
            <Coefficient>
              коэфф. - {mmaEvent.firstWin}{" "}
              <input type="radio" name="event" onChange={handleButtonEnable} />
            </Coefficient>
          </WrapperItem>
          <WrapperItem>
            <EventName>{mmaEvent.secondFighter} - победа</EventName>
            <Coefficient>
              коэфф. - {mmaEvent.secondWin}{" "}
              <input type="radio" name="event" onChange={handleButtonEnable} />
            </Coefficient>
          </WrapperItem>
          <WrapperItem>
            <EventName>Ничья</EventName>
            <Coefficient>
              коэфф. - {mmaEvent.draw}{" "}
              <input type="radio" name="event" onChange={handleButtonEnable} />
            </Coefficient>
          </WrapperItem>
        </Wrapper>
        <Link to={ROUTE.HOME}>
          <Button disabled={buttonState} onClick={handleSubmit}>
            Сделать ставку
          </Button>
        </Link>
      </form>
    </div>
  );
};
