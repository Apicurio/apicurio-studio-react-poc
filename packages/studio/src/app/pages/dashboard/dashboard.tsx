import React from "react";
import {AppEmptyState} from '../../appEmptyState';
import AppDataList from '../../appDataList';
import {AppCardView} from '../../appCardView';
import {AppDrawer} from '../../appDrawer';

export const Dashboard = () => {
  var apiCount = 1; // update this value to count, if you want to see empty state set to 0
  return (
    <div>
      {apiCount === 0 ? (
        <AppEmptyState />
      ) : (
        <React.Fragment>
          <AppDataList/>
          <AppCardView />
          <AppDrawer/>
        </React.Fragment>
      )}
    </div>
  );
};
