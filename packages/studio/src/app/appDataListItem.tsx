import React, { useContext, useState } from 'react';
import { Button, DataListItem, DataListItemCells, DataListItemRow, DataListCell, DataListCheck, DataListAction } from '@patternfly/react-core';
import AppDropdownKebab from './appDropdownKebab';
import {AppTag} from './appTag';
import ApicurioIcon from './assets/apicurio-icon.png';
import './app.css';
import { Services } from './common';
import { ApisService } from '@apicurio/services';
import { StoreContext } from './../context/StoreContext';
import {Api} from "@apicurio/models";
// import {storeData} from './../context/reducers';
import { useStoreContext } from './../context/reducers'

interface AppDataListItemProps {
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

export const AppDataListItem = (onClick: AppDataListItemProps) => {

  const apisService = Services.getInstance().apisService;
  // const allApis: Api[] = [];
  const { apiData, storeData } = useStoreContext();

  const fetchDataAction = async () => {
    apisService.getApis()
    .then( apis => {
      const insideApis = apis.data;
      console.log('data back from server:' + JSON.stringify(insideApis));
      storeData(insideApis);
      })
      .catch(error => {
        console.error("error getting API" + error);
      });
   }

   React.useEffect(() => {
     console.log('did it call fetch data');
    fetchDataAction();
  });
    
    return (
        <React.Fragment>
          {apiData.map(apis => 
        <DataListItem id={apis.id} aria-labelledby={`data-list-item-${apis.id}`}>
        <DataListItemRow>
          <DataListCheck checked={false} aria-labelledby={`data-list-item-${apis.id}`} name={`data-list-item-check-${apis.id}`}/>
          <DataListItemCells
            dataListCells={[
              <DataListCell isIcon className="app-data-list-cell" key={`primary content ${apis.id}`}>
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
                    <AppTag key={index} text={tag}/>
                  )}
                </div>
              </DataListCell>
            ]}
            />
          <DataListAction aria-labelledby={`data-list-item-${apis.id}`} id={`data-list-item-${apis.id}`} aria-label="Actions">
              {/* <Button variant="link" onClick={this.props.onClick}>View Details</Button> */}
              <Button variant="secondary">Edit API</Button>
              <AppDropdownKebab/>
          </DataListAction>
        </DataListItemRow>
      </DataListItem>
          )}
      </React.Fragment>
    )
};

export default AppDataListItem;