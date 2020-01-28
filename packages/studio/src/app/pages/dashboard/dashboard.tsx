import React from "react";
import {AppEmptyState} from '../../appEmptyState';
import AppDrawer from '../../appDrawer';

type DashboardProps = {
  apiName: string,
  apiDescription: string,
  apiTag1: string,
  apiTag2: string
}

export class Dashboard extends React.Component<DashboardProps> {
  constructor(props: DashboardProps) {
    super(props);
  }
  render() {
    var apiCount = 1; // update this value to count, if you want to see empty state set to 0
    return (
      <div>
        {apiCount === 0 ? (
          <AppEmptyState />
        ) : (
          <AppDrawer apiView={this.props.apiView}/>
        )}
      </div>
    );
  };
}

