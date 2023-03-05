import React from "react";
import { Outlet } from "react-router-dom";
import { Template } from "./styles";

export const MainTemplate = () => {
  return (
    <Template>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </Template>
  );
};
