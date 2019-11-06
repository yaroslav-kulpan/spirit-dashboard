import React from "react";
import Header from "../Header";
import AdminRow from "../Containers/AdminRow";
import AsideMenu from "../AsideMenu";
import DashboardRoute from "../DashboardRoute";

const Admin = () => {
  return (
    <>
        <Header/>
        <AdminRow aside={<AsideMenu/>} content={<DashboardRoute/>}/>
      </>
  );
};

export default Admin;