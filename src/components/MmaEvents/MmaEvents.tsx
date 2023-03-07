import { StyledArticles, ErrorMessage } from "./styles";
import { Spinner, MmaEvent } from "components";
import { getAllEvents, useAppSelector } from "store";
import { AllEvents } from "types";

interface IProps {
  mmaEvents: AllEvents[];
}

export const MmaEvents = ({ mmaEvents }: IProps) => {
  const { isLoading, error } = useAppSelector(getAllEvents);
  // console.log(mmaEvents);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return <ErrorMessage>Server Error! Page can't be loaded.</ErrorMessage>;
  }

  return (
    <StyledArticles>
      {mmaEvents &&
        mmaEvents.length > 0 &&
        mmaEvents.map((mmaEvents: AllEvents) => {
          return <MmaEvent mmaEvent={mmaEvents} key={mmaEvents.id} />;
        })}
    </StyledArticles>
  );
};
