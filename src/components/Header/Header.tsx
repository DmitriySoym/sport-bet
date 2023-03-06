import { StyledHeader, Logo, HeaderTitle, TitleText } from "./styles";
import { Account } from "components";
import { Link } from "react-router-dom";
import { ROUTE } from "router";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to={ROUTE.HOME}>
        <Logo>SPORT-BET</Logo>
      </Link>

      <HeaderTitle>
        <TitleText>БУКМЕКЕР №1 ** ЛУЧШИЕ КОЭФФИЦИЕНТЫ</TitleText>
      </HeaderTitle>

      <Account />
    </StyledHeader>
  );
};
