import { useState } from "react";
import { AllEvents } from "types";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { Wrapper, EventName, Coefficient, DateWrapper, Button } from "./styles";

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
          <div>
            <EventName>{mmaEvent.firstFighter} - победа</EventName>
            <Coefficient>
              коэффициент - {mmaEvent.firstWin}{" "}
              <input type="radio" name="event" onChange={handleButtonEnable} />
            </Coefficient>
          </div>
          <div>
            <EventName>{mmaEvent.secondFighter} - победа</EventName>
            <Coefficient>
              коэффициент - {mmaEvent.secondWin}{" "}
              <input type="radio" name="event" onChange={handleButtonEnable} />
            </Coefficient>
          </div>
          <div>
            <EventName>Ничья</EventName>
            <Coefficient>
              коэффициент - {mmaEvent.draw}{" "}
              <input type="radio" name="event" onChange={handleButtonEnable} />
            </Coefficient>
          </div>
        </Wrapper>
        <Link to={ROUTE.HOME}>
          <Button disabled={buttonState}>Сделать ставку</Button>
        </Link>
      </form>
    </div>
  );
};
