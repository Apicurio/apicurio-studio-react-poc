import React from 'react';
import {DataList} from '@patternfly/react-core';
import ApiDataListItem from './apiDataListItem';

interface ApiDataListProps {
  viewDetails: React.MouseEventHandler,
  selectItem: FunctionStringCallback,
  keyListItem: FunctionStringCallback
}

interface ApiDataListState {
  selectedDataListItemId: string
}

class ApiDataList extends React.Component<ApiDataListProps, ApiDataListState> {
  constructor(props: ApiDataListProps) {
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
        <ApiDataListItem />
      </DataList>
    );
  }
}

export default ApiDataList;