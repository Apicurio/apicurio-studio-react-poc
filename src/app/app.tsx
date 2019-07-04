import React, { Component, ReactNode } from "react";
import {
  Page,
  PageSectionVariants,
  PageSection,
  TextContent,
  Text
} from "@patternfly/react-core";
import AppHeader from "./appHeader";
import AppSidebar from "./appSidebar";

export default class App extends Component {
  public state = {
    activeMenuGroup: "",
    activeMenuGroupItem: ""
  };

  public render() {
    const { activeMenuGroup, activeMenuGroupItem } = this.state;

    const section = (
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">Dashboard</Text>
          <Text component="p">Content goes here...</Text>
        </TextContent>
      </PageSection>
    );
    return (
      <React.Fragment>
        <Page
          isManagedSidebar={true}
          header={<AppHeader />}
          sidebar={
            <AppSidebar
              activeMenuGroup={activeMenuGroup}
              activeMenuGroupItem={activeMenuGroupItem}
              onSelect={this.onNavSelect}
            />
          }
        >
          {section}
        </Page>
      </React.Fragment>
    );
  }

  private onNavSelect = ({ groupId, itemId }: any) => {
    this.setState({
      activeMenuGroup: groupId,
      activeMenuGroupItem: itemId
    });
  };
}
