import { StyledArticles, ErrorWrapper, ErrorMessage } from "./styles";
import { Spinner } from "components";
import { getAllEvents, useAppSelector } from "store";
import { IFootball, IMma } from "types";

interface IProps {
  footballEvents: IFootball[];
}

export const FootballEvents = ({ footballEvents }: IProps) => {
  const { isLoading, error, events } = useAppSelector(getAllEvents);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    <ErrorWrapper>
      <ErrorMessage>Страница не может быть загружена.</ErrorMessage>
    </ErrorWrapper>;
  }

  return (
    <StyledArticles>
      {footballEvents &&
        footballEvents.length > 0 &&
        footballEvents.map((footballEvents: IFootball) => {
          return <li key={footballEvents.id}>{footballEvents.firstTeam}</li>;
        })}
    </StyledArticles>
  );
};
