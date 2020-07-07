import React, {useState, useContext, useEffect} from 'react';
import {DataList} from '@patternfly/react-core';
import ApiDataListItem from './apiDataListItem';
import { GlobalContext, GlobalContextObj } from '../../../../context';

interface ApiDataListProps {
  viewDetails: React.MouseEventHandler,
  selectItem: FunctionStringCallback,
  keyListItem: FunctionStringCallback
}

export const ApiDataList: React.FunctionComponent<ApiDataListProps> = () => {

  const globalContext: GlobalContextObj = useContext(GlobalContext);
  const [selectedDataListItemId, setSelectedDataListItemId] = useState('');

  const onSelectDataListItem = (id: string) => {
    if (globalContext.store.lastCreatedApi !== '') {
      globalContext.setLastCreatedApi('');
    }
    setSelectedDataListItemId(id);
  }

  useEffect(() => {
    if (globalContext.store.lastCreatedApi !== '') {
      setSelectedDataListItemId(globalContext.store.lastCreatedApi);
    }
  });

  return (
    <DataList 
      aria-label="Selectable data list"
      selectedDataListItemId={selectedDataListItemId}
      onSelectDataListItem={onSelectDataListItem}
    >
      <ApiDataListItem />
    </DataList>
  );
};

export default ApiDataList;