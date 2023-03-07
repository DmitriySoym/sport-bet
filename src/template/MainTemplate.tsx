import { Outlet } from "react-router-dom";
import { Template } from "./styles";
import { Header, Footer } from "components";

export const MainTemplate = () => {
  return (
    <Template>
      <Header />
      <Outlet />
      <Footer />
    </Template>
  );
};
