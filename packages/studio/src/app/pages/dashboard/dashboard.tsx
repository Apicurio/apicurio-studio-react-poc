import React from "react";
import {AppEmptyState} from '../../appEmptyState';
import AppDrawer from '../../appDrawer';

class Dashboard extends React.Component<> {
  constructor(props) {
    super(props);
  }
  render() {
    var apiCount = 1; // update this value to count, if you want to see empty state set to 0
    console.log('what is dashboard' + props.apiView);
    return (
      <div>
        {apiCount === 0 ? (
          <AppEmptyState />
        ) : (
          <AppDrawer apiView={props.apiView}/>
        )}
      </div>
    );
  };
}

export default Dashboard;
