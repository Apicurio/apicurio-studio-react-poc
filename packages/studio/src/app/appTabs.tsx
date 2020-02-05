import React from 'react';
import { Tabs, Tab, TabContent } from '@patternfly/react-core';
import './app.css'

interface AppTabsProps {
  createdBy: string,
  createdOn: Date,
}

interface AppTabsState {
  activeTabKey: number
}

class AppTabs extends React.Component<AppTabsProps, AppTabsState> {
  constructor(props: AppTabsProps) {
    super(props);
    this.state = {
      activeTabKey: 0
    };
  }

  contentRef1 = React.createRef();
  contentRef2 = React.createRef();

  private handleTabClick = (event: React.MouseEvent, tabIndex: any) => {
    this.setState({
      activeTabKey: tabIndex
    });
  };

  render() {
    const { createdOn, createdBy} = this.props;
    return (
      <React.Fragment>
        <Tabs isFilled activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
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
}

export default AppTabs;