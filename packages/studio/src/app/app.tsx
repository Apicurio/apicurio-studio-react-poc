import React, { Component, ReactNode } from "react";
import { Button, Level, LevelItem, Page, PageSectionVariants, PageSection, Title } from "@patternfly/react-core";
import AppHeader from "./appHeader";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as Pages from './pages';
import './app.css';

type AppProps = {
}

export default class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }
  render() {
    return (
       <Router>
        <Page isManagedSidebar={true} header={<AppHeader />}
        >
          <Route path='/' exact={true} component={Pages.Dashboard}/>
          <Route path='/dashboard' exact={true} component={Pages.Dashboard}/>
          <Route path='/create-api' exact={true} component={Pages.CreateApi}/>
          <Route path='/import-api' exact={true} component={Pages.ImportApi}/>
        </Page>
        </Router>
    );
  }
}
