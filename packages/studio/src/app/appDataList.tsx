import React, { ReactNode } from 'react';
import {DataList} from '@patternfly/react-core';
import AppDataListItem from './appDataListItem';

// let isDropdownOpen: boolean = false;
// const userDropdownItems: ReactNode[] = [];

class AppDataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDataListItemId: ''
    };
    this.onSelectDataListItem = (id) => {
      this.setState({ selectedDataListItemId: id });
    }
  }
  render() {
    return (
      <DataList 
        aria-label="selectable data list"
        selectedDataListItemId={this.state.selectedDataListItemId}
        onSelectDataListItem={this.onSelectDataListItem}>
        <AppDataListItem
          apiName="My Pet Store API"
          apiDescription="Description goes here"
          apiTag1="Tag 1"
          apiTag2="Another tag"
          id="one" // generate this automatically
        />
        <AppDataListItem
          apiName="My Pet Store API 2"
          apiDescription="Description goes here 2"
          apiTag1="Tag 2"
          apiTag2="Another tag"
          id="two"
        />
        <AppDataListItem
          apiName="My Pet Store API 3"
          apiDescription="Description goes here 3"
          apiTag1="Tag 3"
          apiTag2="Another tag"
          id="three"
        />
        <AppDataListItem
          apiName="My Pet Store API 4"
          apiDescription="Description goes here 4"
          apiTag1="Tag 4"
          apiTag2="Another tag"
          id="four"
        />
      </DataList>
    );
  }
}

export default AppDataList;