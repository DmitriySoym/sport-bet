import { useState } from "react";
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
  footballEvent: AllEvents;
}

export const DetailFootballEvent = ({ footballEvent }: IProps) => {
  let newDate = new Date();
  let date = newDate.getDate() + 4;
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
        firstTeam: footballEvent.firstTeam,
        secondTeam: footballEvent.secondTeam,
        eventType: "матч",
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
            <EventName>{footballEvent.firstTeam} - победа</EventName>
            <Coefficient>
              коэфф. - {footballEvent.firstWin}{" "}
              <input type="radio" name="event" onChange={handleButtonEnable} />
            </Coefficient>
          </WrapperItem>
          <WrapperItem>
            <EventName>{footballEvent.secondTeam} - победа</EventName>
            <Coefficient>
              коэфф. - {footballEvent.secondWin}{" "}
              <input type="radio" name="event" onChange={handleButtonEnable} />
            </Coefficient>
          </WrapperItem>
          <WrapperItem>
            <EventName>Ничья</EventName>
            <Coefficient>
              коэфф. - {footballEvent.draw}{" "}
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
