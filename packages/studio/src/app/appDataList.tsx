import React, { ReactNode } from 'react';
import {DataList} from '@patternfly/react-core';
import {AppDataListItem} from './appDataListItem';

let isDropdownOpen: boolean = false;

const userDropdownItems: ReactNode[] = [];

export const AppDataList: React.FunctionComponent<any> = (props) => {
  return (
    <DataList>
      <AppDataListItem
        apiName="My Pet Store API"
        apiDescription="Description goes here"
      />
      <AppDataListItem
        apiName="My Pet Store API 2"
        apiDescription="Description goes here 2"
      />
    </DataList>
  );
}

export default AppDataList;