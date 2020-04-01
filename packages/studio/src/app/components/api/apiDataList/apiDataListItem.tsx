import React, { useEffect, useContext } from 'react';
import { Button, DataListItem, DataListItemCells, DataListItemRow, DataListCell, DataListCheck, DataListAction } from '@patternfly/react-core';
import {ApiTag} from '../apiTag';
import {ApiDropdownKebab} from '../apiDropDownKebab';
import ApicurioIcon from '../../../assets/apicurio-icon.png';
import './apiDataListItem.css';
import { useStoreContext } from '../../../../context/reducers';

export const ApiDataListItem = () => {

  const { apiData } = useStoreContext();

    return (
      <React.Fragment>
        {apiData.map((apis, index) => 
          <DataListItem id={apis.id} key={index} aria-labelledby={`data-list-item-${apis.id}`}>
          <DataListItemRow>
            <DataListCheck checked={false} aria-labelledby={`data-list-item-${apis.id}`} name={`data-list-item-check-${apis.id}`}/>
            <DataListItemCells
              dataListCells={[
                <DataListCell isIcon={true} className="api-data-list-cell" key={`primary content ${apis.id}`}>
                  <img src={ApicurioIcon}/>
                </DataListCell>,
                <DataListCell key={`secondary content ${apis.id}`}>
                  <div className="app-api-title">
                    {apis.name}
                  </div>
                  <div className="app-api-description">
                    {apis.description}
                  </div>
                  <div className="app-api-tag-group">
                    {apis.tags.map((tag, index) =>
                      <ApiTag key={index} text={tag}/>
                    )}
                  </div>
                </DataListCell>
              ]}
              />
            <DataListAction aria-labelledby={`data-list-item-${apis.id}`} id={`data-list-item-${apis.id}`} aria-label="Actions">
                <Button variant="link">View Details</Button>
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