import React from 'react';
import { Tabs, Tab, TabContent } from '@patternfly/react-core';


export interface ApiTabsProps {
  createdBy: string,
  createdOn: Date,
}

interface ApiTabsState {
  activeTabKey: number
}

export class ApiTabs extends React.Component<ApiTabsProps, ApiTabsState> {

  private contentRef1 = React.createRef();
  private contentRef2 = React.createRef();
  constructor(props: ApiTabsProps) {
    super(props);
    this.state = {
      activeTabKey: 0
    };
  }

  render() {
    const { createdOn, createdBy} = this.props;
    return (
      <React.Fragment>
        <Tabs isFilled={true} activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
          <Tab eventKey={0} title="Details" tabContentId="refTab1Section" tabContentRef={this.contentRef1}/>
          <Tab eventKey={1} title="Activity" tabContentId="refTab2Section" tabContentRef={this.contentRef2}/>
        </Tabs>
        <div>
          <TabContent eventKey={0} id="refTab1Section" ref={this.contentRef1} aria-label="Tab item 1">
            Tab 1 section
            {createdOn}
            {createdBy}
          </TabContent>
          <TabContent eventKey={1} id="refTab12ection" ref={this.contentRef2} aria-label="Tab item 2">
            Tab 2 section
          </TabContent>
        </div>
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