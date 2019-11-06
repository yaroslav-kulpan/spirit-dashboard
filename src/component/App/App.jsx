import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from "../Pages/Admin";
import {Route} from "react-router-dom";

const App = () => {
    return (
        <switch>
            <Route path="/admin/" component={Admin}/>
        </switch>
    )
};

export default App;