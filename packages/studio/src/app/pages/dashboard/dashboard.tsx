import React from "react";
import {AppEmptyState} from '../../appEmptyState';
import AppDrawer from '../../appDrawer';

export const Dashboard = () => {
  var apiCount = 1; // update this value to count, if you want to see empty state set to 0
  return (
    <div>
      {apiCount === 0 ? (
        <AppEmptyState />
      ) : (
        <AppDrawer/>
      )}
    </div>
  );
};
