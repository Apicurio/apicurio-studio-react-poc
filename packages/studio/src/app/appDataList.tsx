import React from 'react';
import {DataList} from '@patternfly/react-core';
import AppDataListItem from './appDataListItem';

interface AppDataListProps {
  viewDetails: React.MouseEventHandler,
  selectItem: FunctionStringCallback,
  keyListItem: FunctionStringCallback
}

interface AppDataListState {
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
    this.props.keyListItem(id);
  }

  render() {
    return (
      <DataList 
        aria-label="selectable data list"
        selectedDataListItemId={this.state.selectedDataListItemId}
        onSelectDataListItem={this.onSelectDataListItem}
      >
        <AppDataListItem/>
      </DataList>
    );
  }
}

export default AppDataList;