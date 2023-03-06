import { StyledArticles, ErrorWrapper, ErrorMessage } from "./styles";
import { Spinner } from "components";
import { getAllEvents, useAppSelector } from "store";
import { IMma } from "types";

interface IProps {
  mmaEvents: IMma[];
}

export const MmaEvents = ({ mmaEvents }: IProps) => {
  const { isLoading, error } = useAppSelector(getAllEvents);
  // console.log(mmaEvents);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    <ErrorWrapper>
      <ErrorMessage>Страница не может быть загружена.</ErrorMessage>
    </ErrorWrapper>;
  }

  return (
    <StyledArticles>
      {mmaEvents &&
        mmaEvents.length > 0 &&
        mmaEvents.map((mmaEvents: IMma) => {
          return <li key={mmaEvents.id}>{mmaEvents.firstFighter}</li>;
        })}
    </StyledArticles>
  );
};
