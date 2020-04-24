import React, { useEffect, useContext } from 'react';
import { Button, DataListItem, DataListItemCells, DataListItemRow, DataListCell, DataListCheck, DataListAction } from '@patternfly/react-core';
import {ApiTag} from '../apiTag';
import {ApiDropdownKebab} from '../apiDropDownKebab';
import ApicurioIcon from '../../../assets/apicurio-icon.png';
import './apiDataListItem.css';
import { GlobalContext, GlobalContextObj } from '../../../../context';
import ApiDrawerPanelContentProps from '../apiDrawer/apiDrawerPanelContent'

// export interface ApiDataListItemProps {
//   currentApiId: string,
//   apiDrawerExpanded: boolean
// }
// interface ApiDataListItemState {
//   apiDrawerExpanded: boolean,
// }

export const ApiDataListItem = () => {
  // console.log(`apiDataListItem props is: ${JSON.stringify(props)}`);

  const { apis } = {... useContext(GlobalContext).store}
  const globalContext: GlobalContextObj = useContext(GlobalContext);

  const setApiDrawerState = (apiDrawerState: boolean) => {
    globalContext.setApiDrawerExpanded(!apiDrawerState);
    console.log(`apiDataListItem: apiDrawerState is ${apiDrawerState}`);
  }

    return (
      <React.Fragment>
        {apis.map((api, index) => 
          <DataListItem id={api.id} key={index} aria-labelledby={`data-list-item-${api.id}`}>
          <DataListItemRow>
            <DataListCheck checked={false} aria-labelledby={`data-list-item-${api.id}`} name={`data-list-item-check-${api.id}`}/>
            <DataListItemCells
              dataListCells={[
                <DataListCell isIcon={true} className="api-data-list-cell" key={`primary content ${api.id}`}>
                  <img src={ApicurioIcon}/>
                </DataListCell>,
                <DataListCell key={`secondary content ${api.id}`}>
                  <div className="app-api-title">
                    {api.name}
                  </div>
                  <div className="app-api-description">
                    {api.description}
                  </div>
                  <div className="app-api-tag-group">
                    {api.tags.map((tag, index) =>
                      <ApiTag key={index} text={tag}/>
                    )}
                  </div>
                </DataListCell>
              ]}
              />
            <DataListAction aria-labelledby={`data-list-item-${api.id}`} id={`data-list-item-${api.id}`} aria-label="Actions">
                <Button variant="link" onClick={() => setApiDrawerState(globalContext.store.apiDrawerExpanded)}>View Details</Button>
                <Button variant="secondary">Edit API</Button>
                <ApiDropdownKebab/>
            </DataListAction>
          </DataListItemRow>
        </DataListItem>
      )}
    </React.Fragment>
  )
};

export default ApiDataListItem;