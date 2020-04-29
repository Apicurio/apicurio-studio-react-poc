import React from 'react';
import { Tabs, Tab, TabContent } from '@patternfly/react-core';
import { ApiDetailsView } from '../apiDetailsView';
import { ApiActivityView } from '../apiActivityView';

export interface ApiTabsProps {
  currentApiObject: string
}

interface ApiTabsState {
  activeTabKey: number
}

export class ApiTabs extends React.Component<ApiTabsProps, ApiTabsState> {

  private detailsContentRef = React.createRef();
  private activityContentRef = React.createRef();
  constructor(props: ApiTabsProps) {
    super(props);
    this.state = {
      activeTabKey: 0
    };
  }

  render() {
    // const { createdOn, createdBy} = this.props;

    return (
      <React.Fragment>
        <Tabs isFilled={true} activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
          <Tab eventKey={0} title="Details" tabContentId="apiDetails" tabContentRef={this.detailsContentRef}>
            <TabContent eventKey={0} id="apiDetails" ref={this.detailsContentRef} aria-label="API details tab">
              <ApiDetailsView currentApi={this.props.currentApiObject} />
            </TabContent>
          </Tab>
          <Tab eventKey={1} title="Activity" tabContentId="apiActivity" tabContentRef={this.activityContentRef}>
            <TabContent eventKey={1} id="apiActivity" ref={this.activityContentRef} aria-label="API activity tab">
              <ApiActivityView currentApi={this.props.currentApiObject} />
            </TabContent>
          </Tab>
        </Tabs>
      </React.Fragment>
    );
  }

  private handleTabClick = (event: React.MouseEvent, tabIndex: any) => {
    this.setState({
      activeTabKey: tabIndex
    });
  };
}

export default ApiTabs;