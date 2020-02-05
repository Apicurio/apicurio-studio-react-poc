import React from 'react';
import {DataList} from '@patternfly/react-core';
import AppDataListItem from './appDataListItem';
import data from '../api-data.json';

interface AppDataListProps {
  viewDetails: React.MouseEventHandler,
  selectItem: FunctionStringCallback,
  keyListItem: FunctionStringCallback
}

interface AppDataListState {
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
        key={index}
        id={api.id}
        name={api.name}
        description={api.description}
        tags={api.tags}
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