import React, { ReactNode } from 'react';
import {DataList} from '@patternfly/react-core';
import AppDataListItem from './appDataListItem';

export interface AppDataListProps {
  viewDetails: (ev: React.MouseEvent<HTMLButtonElement>) => void,
  selectItem: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

export interface AppDataListState {
  selectedDataListItemId: string
}

class AppDataList extends React.Component<AppDataListProps, AppDataListState> {
  constructor(props: AppDataListProps) {
    super(props);
    this.state = {
      selectedDataListItemId: ''
    };
  }

  onSelectDataListItem = (id: string) => {
    this.setState({ selectedDataListItemId: id });
    this.props.selectItem(id);
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
          rowid="1" // generate this automatically
          onClick={this.props.viewDetails}
        />
        <AppDataListItem
          apiName="My Pet Store API 2"
          apiDescription="Description goes here 2"
          apiTag1="Tag 2"
          apiTag2="Another tag"
          rowid="2"
          onClick={this.props.viewDetails}
        />
        <AppDataListItem
          apiName="My Pet Store API 3"
          apiDescription="Description goes here 3"
          apiTag1="Tag 3"
          apiTag2="Another tag"
          rowid="3"
          onClick={this.props.viewDetails}
        />
        <AppDataListItem
          apiName="My Pet Store API 4"
          apiDescription="Description goes here 4"
          apiTag1="Tag 4"
          apiTag2="Another tag"
          rowid="4"
          onClick={this.props.viewDetails}
        />
      </DataList>
    );
  }
}

export default AppDataList;