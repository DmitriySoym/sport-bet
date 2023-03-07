import { Title } from "./style";

interface ITitle {
  label: string;
}

export const EventsTitle = ({ label }: ITitle) => {
  return <Title>{label}</Title>;
};
