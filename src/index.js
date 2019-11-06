import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter} from "react-router-dom";
import {MuayThaiSpiritServiceProvider} from './component/MuayThaiSpiritContext';

import App from "./component/App";
import MuayThaiSpiritService from "./services/MuayThaiSpiritService";
import ErrorBoundry from "./component/ErrorBoundry";

const muayThaiSpiritService = new MuayThaiSpiritService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <MuayThaiSpiritServiceProvider value={muayThaiSpiritService}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </MuayThaiSpiritServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
