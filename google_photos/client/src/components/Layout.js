import React, { Fragment } from "react";
import Sidebar from "./UI/Sidebar";
import Header from "./UI/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Sidebar>
        <Outlet />
      </Sidebar>
    </Fragment>
  );
};

export default Layout;
