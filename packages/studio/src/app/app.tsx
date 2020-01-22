import React, { Component, ReactNode } from "react";
import { Button, Level, LevelItem, Page, PageSectionVariants, PageSection, Title } from "@patternfly/react-core";
import AppHeader from "./appHeader";
import AppToolbar from "./appToolbar";
import AppSidebar from "./appSidebar";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as Pages from './pages';
export default class App extends Component {
  public state = {
    activeMenuGroup: "",
    activeMenuGroupItem: "",
    listorCardView: "list"
  };

  public render() {
    const { activeMenuGroup, activeMenuGroupItem, listorCardView} = this.state;

    const sectionOne = (
      <PageSection variant={PageSectionVariants.light}>
        <Level>
          <LevelItem>
            <Title headingLevel="h1" size="3xl">
              APIs
            </Title>
          </LevelItem>
          <LevelItem>
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
      <PageSection>
        <Route path='/' exact={true} component={Pages.Dashboard}/>
        <Route 
          path='/dashboard' exact={true}
          render={(props) => <Pages.Dashboard listorCard="card" {...props} />}
        />
        <Route path='/apis' exact={true}  component={Pages.ViewApis}/>
        <Route path='/apis/create' exact={true} component={Pages.CreateAPI}/>
        <Route path='/apis/import' exact={true} component={Pages.ImportAPI}/>
        <Route path='/settings/profile' exact={true} component={Pages.UserProfile}/>
        <Route path='/settings/accounts' exact={true} component={Pages.LinkedAccounts}/>
        <Route path='/settings/validation' exact={true} component={Pages.Validations}/>
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
          {sectionOne}
          <PageSection variant={PageSectionVariants.light}>
            <AppToolbar></AppToolbar>
          </PageSection>
          {section}
        </Page>
        </Router>
    );
  }

  private onNavSelect = ({ groupId, itemId }: any) => {
    this.setState({
      activeMenuGroup: groupId,
      activeMenuGroupItem: itemId
    });
  };
}
