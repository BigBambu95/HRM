import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";


import { HRMServiceProvider } from "./components/hrm-service-context";

import store from './store';

import App from './components/app';
import HRMService from "./services/hrm-service";

const hrmService = new HRMService();


ReactDOM.render(
    <Provider store={store}>
        <HRMServiceProvider value={hrmService}>
            <Router>
                <App />
            </Router>
        </HRMServiceProvider>
    </Provider>,
    document.getElementById('root')
);