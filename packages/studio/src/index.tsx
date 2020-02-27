import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "@patternfly/react-core/dist/styles/base.css";
import App from './app/app';
import './app/app.css';
import './config.js';
import Keycloak from 'keycloak-js';
import './version.js';
import { StoreProvider } from './../src/context/StoreContext';
import { reducer, initialState } from './../src/context/reducers';

function AppWithProvider() {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return (
        <StoreProvider value={value}>
            <App />
        </StoreProvider>
    );
}

//Handle login via keycloak
const keycloak = Keycloak();
keycloak.init({onLoad: 'login-required'}).success((authenticated: any) => {
    if (authenticated) {
        (window as any).keycloak = keycloak;
        // if (process.env.NODE_ENV !== "production") {
        //   // tslint:disable-next-line
        //   const axe = require("react-axe");
        //   axe(React, ReactDOM, 1000);
        // }
        ReactDOM.render(
            <AppWithProvider/>,
        document.getElementById("root") as HTMLElement);
    }
}).error(() => {
    alert('Failed to initialize authentication subsystem.');
});
