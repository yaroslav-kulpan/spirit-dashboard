import React from "react";
import {Route, Switch} from "react-router-dom";
import AdminHomePage from "./Pages/AdminHomePage";
import MessagesPage from "./Pages/MessagesPage";
import Settings from "./Pages/Settings";
import SEO from "./Pages/SEO";

const DashboardRoute = () => {
    return (
        <Switch>
            <Route path="/admin/dashboard" component={AdminHomePage}/>
            <Route path="/admin/messages" component={MessagesPage}/>
            <Route path="/admin/settings" component={Settings}/>
            <Route path="/admin/analytics" component={SEO}/>
        </Switch>
    )
};

export default DashboardRoute;