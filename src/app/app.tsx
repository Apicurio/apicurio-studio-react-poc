import React, { Component, ReactNode } from "react";
import {
  BackgroundImage,
  BackgroundImageSrc,
  Page,
  PageSectionVariants,
  NavSelectClickHandler,
  PageSection,
  TextContent,
  Text
} from "@patternfly/react-core";
import AppHeader from "./appHeader";
import AppSidebar from "./appSidebar";
import xs from "@pf4-assets/images/pfbg_576.jpg";
import xs2x from "@pf4-assets/images/pfbg_576@2x.jpg";
import sm from "@pf4-assets/images/pfbg_768.jpg";
import sm2x from "@pf4-assets/images/pfbg_768@2x.jpg";
import lg from "@pf4-assets/images/pfbg_1200.jpg";
import filter from "@pf4-assets/images/background-filter.svg";

const images = {
  [BackgroundImageSrc.xs]: xs,
  [BackgroundImageSrc.xs2x]: xs2x,
  [BackgroundImageSrc.sm]: sm,
  [BackgroundImageSrc.sm2x]: sm2x,
  [BackgroundImageSrc.lg]: lg,
  [BackgroundImageSrc.filter]: `${filter}#image_overlay`
};

export default class App extends Component {
  public state = {
    activeMenuGroup: "",
    activeMenuGroupItem: ""
  };

  onNavSelect = ({ groupId, itemId }: any) => {
    this.setState({
      activeMenuGroup: groupId,
      activeMenuGroupItem: itemId
    });
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
}
