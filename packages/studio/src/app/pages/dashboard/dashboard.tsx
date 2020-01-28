import React from "react";
import { Button, Level, LevelItem, Title, PageSection, PageSectionVariants } from '@patternfly/react-core';
import {AppEmptyState} from '../../appEmptyState';
import AppToolbar from "../../appToolbar";
import AppDrawer from '../../appDrawer';
import '../../app.css'

type DashboardProps = {
}

type DashboardState = {
  apiView: string
}

export class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
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
    var apiCount = 1; // update this value to count, if you want to see empty state set to 0
    return (
      <React.Fragment>
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

        <PageSection variant={PageSectionVariants.light} noPadding={true}>
          <AppToolbar buttonClick={this.apiViewChange} buttonSelected={this.state.apiView}></AppToolbar>
        </PageSection>

        <PageSection noPadding={true}>
          {apiCount === 0 ? (
              <AppEmptyState />
          ) : (
            <AppDrawer apiView={this.state.apiView}/>
          )}
        </PageSection>
      </React.Fragment>
    );
  };
}
