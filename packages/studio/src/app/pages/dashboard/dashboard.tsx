import React from "react";
import {AppEmptyState} from '../../appEmptyState';
import AppDrawer from '../../appDrawer';

type DashboardProps = {
  apiView: string
}

export class Dashboard extends React.Component<DashboardProps> {
  constructor(props: DashboardProps) {
    super(props);
  }
  render() {
    var apiCount = 0; // update this value to count, if you want to see empty state set to 0
    return (
      <div>
        {apiCount === 0 ? (
          <React.Fragment>
            <AppEmptyState />
          </React.Fragment>
        ) : (
          <AppDrawer apiView={this.props.apiView}/>
        )}
      </div>
    );
  };
}

