import { StyledHeader, Logo } from "./styles";
import { Account } from "components";
import { Link } from "react-router-dom";
import { ROUTE } from "router";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to={ROUTE.HOME}>
        <Logo>SPORT-BET</Logo>
      </Link>
      <Account />
    </StyledHeader>
  );
};
