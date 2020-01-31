import React, { ReactNode } from 'react';
import {DataList} from '@patternfly/react-core';
import AppDataListItem from './appDataListItem';
import data from '../api-data.json';

export interface AppDataListProps {
  viewDetails: (ev: React.MouseEvent<HTMLElement>) => void,
  selectItem: (ev: React.MouseEvent<HTMLElement>) => void,
  keyListItem: (ev: React.MouseEvent<HTMLElement>) => void
}

export interface AppDataListState {
  selectedDataListItemId: string
}

const apiData = data.apis;

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
    this.props.keyListItem(id);
  }

  render() {
    const listItems = apiData.map((api, index) =>
      <AppDataListItem
        id={api.id}
        apiName={api.name}
        apiDescription={api.description}
        apiTag={api.tags}
        key={index}
        onClick={this.props.viewDetails}
      />
    );
    return (
      <DataList 
        aria-label="selectable data list"
        selectedDataListItemId={this.state.selectedDataListItemId}
        onSelectDataListItem={this.onSelectDataListItem}
      >
        {listItems}
      </DataList>
    );
  }
}

export default AppDataList;