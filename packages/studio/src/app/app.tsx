import React  from "react";
import { Page } from "@patternfly/react-core";
import AppHeader from "./appHeader";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as Pages from './pages';
import './app.css';
import { LoadingPage } from '@rh-uxd/integration-react';

export const App: React.FunctionComponent = () => {

  const [isLoading, setIsLoading] = React.useState(true);

  const delayState = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  delayState();

  return (
      <Router>
      <div style={{position: 'relative'}}>
        { isLoading && <LoadingPage appName="Apicurio"/>}
        <Page 
          isManagedSidebar={true}
          header={<AppHeader />}
          className="app-page"
        >
          <Route path='/' exact={true} component={Pages.Dashboard}/>
          <Route path='/dashboard' exact={true} component={Pages.Dashboard}/>
          <Route path='/create-api' exact={true} component={Pages.CreateApi}/>
          <Route path='/import-api' exact={true} component={Pages.ImportApi}/>
        </Page>
      </div>
      </Router>
  );
}

export default App;
