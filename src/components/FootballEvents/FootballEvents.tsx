import { StyledArticles, ErrorMessage } from "./styles";
import { Spinner } from "components";
import { getAllEvents, useAppSelector } from "store";
import { AllEvents } from "types";

interface IProps {
  footballEvents: AllEvents[];
}

export const FootballEvents = ({ footballEvents }: IProps) => {
  const { isLoading, error } = useAppSelector(getAllEvents);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return <ErrorMessage>Server Error! Page can't be loaded.</ErrorMessage>;
  }

  return (
    <StyledArticles>
      {footballEvents &&
        footballEvents.length > 0 &&
        footballEvents.map((footballEvents: AllEvents) => {
          return <li key={footballEvents.id}>{footballEvents.firstTeam}</li>;
        })}
    </StyledArticles>
  );
};
