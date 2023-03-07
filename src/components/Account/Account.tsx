import { StyledAccount, UserLogo, Name, Wrapper } from "./styles";
import { LogoOutIcon } from "assets";
import { Button } from "components";
import { Color } from "ui";
import { useState } from "react";

const start = {};

export const Account = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleAuth = () => {
    setIsAuth(!isAuth);
  };

  let name = "Dima";

  return (
    <Wrapper>
      <StyledAccount>
        {isAuth ? (
          <>
            <UserLogo>{name[0].toUpperCase()}</UserLogo>
            <Name>{name}</Name>
            <Button
              btnColor={Color.BTNREG}
              value="Выйти"
              onClick={handleAuth}
            />
          </>
        ) : (
          <>
            <LogoOutIcon />{" "}
            <Button
              btnColor={Color.BTNENTER}
              value="Вход"
              onClick={handleAuth}
            />
            <Button
              btnColor={Color.BTNREG}
              value="Регистрация"
              onClick={handleAuth}
            />
          </>
        )}
      </StyledAccount>
    </Wrapper>
  );
};
