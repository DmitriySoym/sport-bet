import { StyledAccount, UserLogo, Name, Wrapper } from "./styles";
import { LogoOutIcon } from "assets";
import { Button } from "components";
import { Color } from "ui";
// import { useAppSelector, getAccountInfo, useAppDispatch, setIsMenuOpen } from "store";
// import { AccountInfo, Search } from "components";
import { useState } from "react";

// interface MenuProps {
//   isMenuOpen: boolean;
//   handleClose?: () => void;
// }

// const menuVariants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0.4, x: "-100%" },
// };

const start = {};

export const Account = () => {
  // const currentVariant = isMobile ? (isMenuOpen ? "open" : "closed") : start;
  // const { isAuth, name } = useAppSelector(getAccountInfo);
  const [isAuth, setIsAuth] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const dispatch = useAppDispatch();

  const handleModal = () => {
    // setIsOpen((isOpen) => (isOpen === false ? true : false));
    console.log("test");
  };

  const handleAuth = () => {
    setIsAuth(!isAuth);
    console.log(isAuth);
  };

  let name = "Dima";

  // const handleCloseBurgerMenu = () => {
  //   dispatch(setIsMenuOpen());
  // };

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
