import { StyledButton } from "./styles";

interface IButton {
  value: string;
  btnColor: string;
  onClick: () => void;
}
export const Button = ({ value, btnColor, onClick }: IButton) => {
  return (
    <StyledButton onClick={onClick} btnColor={btnColor}>
      {value}
    </StyledButton>
  );
};
