import React from "react";
import {AppEmptyState} from '../../appEmptyState';
import AppDataList from '../../appDataList';
import {AppCardView} from '../../appCardView';

export const Dashboard = (props) => {
  const apiCount = 1; // update this value to count, if you want to see empty state set to 0
  const listOrCard = this.props.listOrCard;
  return (
    <div>
      {apiCount === 0 ? (
        <AppEmptyState />
      ) : (
        <AppDataList />
      )}
    </div>
  );
};
