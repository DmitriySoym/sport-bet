import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { AllEvents } from "types";
import { Event, FighterInfo } from "./styles";

interface IProps {
  footballEvent: AllEvents;
}

export const FootballEvent = ({ footballEvent }: IProps) => {
  return (
    <Event>
      <Link
        to={generatePath(ROUTE.DETAILFOOTBALL, {
          endPoint: "football",
          id: footballEvent.id,
        })}>
        <FighterInfo>
          <span>1. {footballEvent.firstTeam}</span>
          <span>победа - {footballEvent.firstWin}</span>
        </FighterInfo>{" "}
        <FighterInfo>
          <span>2. {footballEvent.secondTeam}</span>
          <span>победа - {footballEvent.secondWin}</span>
        </FighterInfo>{" "}
      </Link>
    </Event>
  );
};
