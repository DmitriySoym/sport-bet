import { StyledEvents, ErrorMessage } from "./styles";
import { Spinner, FootballEvent } from "components";
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
    <StyledEvents>
      {footballEvents &&
        footballEvents.length > 0 &&
        footballEvents.map((footballEvents: AllEvents) => {
          return (
            <FootballEvent
              footballEvent={footballEvents}
              key={footballEvents.id}
            />
          );
        })}
    </StyledEvents>
  );
};
