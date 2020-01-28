import React, { Component, ReactNode } from "react";
import { Button, Level, LevelItem, Page, PageSectionVariants, PageSection, Title } from "@patternfly/react-core";
import AppHeader from "./appHeader";
import AppToolbar from "./appToolbar";
//import AppSidebar from "./appSidebar";
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import * as Pages from './pages';
import {Dashboard} from './pages';
import './app.css';

type AppState = {
  apiView: string
}

type AppProps = {
}

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      apiView: "list"
    };
    this.apiViewChange = this.apiViewChange.bind(this);
  }

  apiViewChange() {
    this.setState(prevState => ({ 
      apiView: prevState.apiView === "list" ? "card" : "list"
    }))
  }

  render() {
    const sectionOne = (
      <PageSection variant={PageSectionVariants.light}>
        <Level>
          <LevelItem>
            <Title headingLevel="h1" size="3xl">
              APIs
            </Title>
          </LevelItem>
          <LevelItem className="app-button-group-md">
            <Button variant="secondary">
              Import API
            </Button>
            <Button variant="primary">
              Create new API
            </Button>
          </LevelItem>
        </Level>
      </PageSection>
    );

    const section = (
      <PageSection noPadding={true}>
        <Dashboard apiView={this.state.apiView}></Dashboard>
      </PageSection>
    );
    return (
       <Router>
        <Page
          isManagedSidebar={true}
          header={<AppHeader />}
          // sidebar={
          //   <AppSidebar
          //     activeMenuGroup={activeMenuGroup}
          //     activeMenuGroupItem={activeMenuGroupItem}
          //     onSelect={this.onNavSelect}
          //   />
          // }
        >
          <Route path='/' exact={true} />
          <Route path='/apis/create' exact={true}/>
          {sectionOne}
          <PageSection variant={PageSectionVariants.light} noPadding={true}>
            <AppToolbar buttonClick={this.apiViewChange} buttonSelected={this.state.apiView}></AppToolbar>
          </PageSection>
          {section}
        </Page>
        </Router>
    );
  }

  // private onNavSelect = ({ groupId, itemId }: any) => {
  //   this.setState({
  //     activeMenuGroup: groupId,
  //     activeMenuGroupItem: itemId
  //   });
  // };
}
