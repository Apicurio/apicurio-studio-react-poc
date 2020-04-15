import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';

export class ApiDetailsView extends React.Component {

  // private detailsContentRef = React.createRef();
  // private activityContentRef = React.createRef();
  constructor(props) {
    super(props);
    // this.state = {
    //   activeTabKey: 0
    };
  
  render() {
    const { createdOn, createdBy} = this.props;
    return (
    //   <React.Fragment>
    //     <Tabs isFilled={true} activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
    //       <Tab eventKey={0} title="Details" tabContentId="apiDetails" tabContentRef={this.detailsContentRef}/>
    //       <Tab eventKey={1} title="Activity" tabContentId="apiActivity" tabContentRef={this.activityContentRef}/>
    //     </Tabs>
    //     <div>
    //       <TabContent eventKey={0} id="apiDetails" ref={this.detailsContentRef} aria-label="API details tab">
    //       <Grid>
    //               <GridItem sm={12} md={12}>
    //                 <ApiDetailsView></ApiDetailsView>
    //                 </GridItem>
    //                 </Grid>

    <div>
        Details
            {createdOn}
            {createdBy}
    </div>

        //   </TabContent>
        //   <TabContent eventKey={1} id="apiActivity" ref={this.activityContentRef} aria-label="API activity tab">
        //     Activity
        //   </TabContent>
    //   </React.Fragment>
    );
  }

//   private handleTabClick = (event: React.MouseEvent, tabIndex: any) => {
//     this.setState({
//       activeTabKey: tabIndex
//     });
//   };
}

export default ApiDetailsView;