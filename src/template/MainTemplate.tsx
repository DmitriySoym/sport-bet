import React from "react";
import { Outlet } from "react-router-dom";
import { Template } from "./styles";
import { Header } from "components";

export const MainTemplate = () => {
  return (
    <Template>
      <Header />
      <Outlet />
      <div>Footer</div>
    </Template>
  );
};
