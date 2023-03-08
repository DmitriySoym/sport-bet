import { DetailMMAEvent, Spinner } from "components";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchDitailEvent,
  getDetailEvent,
  useAppDispatch,
  useAppSelector,
} from "store";
import { ErrorMessage, ButtonBack, Wrapper } from "./styles";

export const DetailMMAPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, event } = useAppSelector(getDetailEvent);
  const navigate = useNavigate();

  const handlwBack = () => {
    navigate(-1);
  };

  const { id = "", endPoint = "" } = useParams();

  useEffect(() => {
    dispatch(fetchDitailEvent({ id: id, endPoint: endPoint }));
  }, [dispatch, endPoint, id]);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return <ErrorMessage>Server Error! Page can't be loaded.</ErrorMessage>;
  }

  return (
    <Wrapper>
      <ButtonBack onClick={handlwBack}>Назад</ButtonBack>

      <DetailMMAEvent mmaEvent={event} />
    </Wrapper>
  );
};
