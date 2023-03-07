import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { AllEvents } from "types";
import { Event, FighterInfo } from "./styles";

interface IProps {
  mmaEvent: AllEvents;
}

export const MmaEvent = ({ mmaEvent }: IProps) => {
  return (
    <Event>
      <Link
        to={generatePath(ROUTE.DETAILMMA, {
          endPoint: "mma",
          id: mmaEvent.id,
        })}>
        <FighterInfo>
          <span>1. {mmaEvent.firstFighter}</span>
          <span>победа - {mmaEvent.firstWin}</span>
        </FighterInfo>{" "}
        <FighterInfo>
          <span>2. {mmaEvent.secondFighter}</span>
          <span>победа - {mmaEvent.secondWin}</span>
        </FighterInfo>{" "}
      </Link>
    </Event>
  );
};
