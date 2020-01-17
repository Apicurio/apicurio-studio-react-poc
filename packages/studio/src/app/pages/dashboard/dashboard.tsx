import React from "react";
import {AppEmptyState} from '../../appEmptyState';
import {AppDataList} from '../../appDataList';

export const Dashboard: React.FunctionComponent<any> = () => {
  return (
    <React.Fragment>
      <AppEmptyState></AppEmptyState>
      <AppDataList></AppDataList>
    </React.Fragment>
  );
};
