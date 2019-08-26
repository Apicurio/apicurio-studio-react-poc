import React from "react";
import ReactDOM from "react-dom";
import "@patternfly/react-core/dist/styles/base.css";
import App from './app/app';
import './app/app.css';

// Handle login via keycloak

// let keycloak = window["Keycloak"]();
// keycloak.init({onLoad: 'login-required'}).success(function (authenticated) {
//     if (authenticated) {
//         window['keycloak'] = keycloak;
//         platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
//             printBanner("Development");
//         }).catch(err => console.log(err));
//     }
// }).error(function () {
//     alert('Failed to initialize authentication subsystem.');
// });

if (process.env.NODE_ENV !== "production") {
  // tslint:disable-next-line
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
