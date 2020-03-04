import React, { useEffect, useContext } from 'react';
import { Button, DataListItem, DataListItemCells, DataListItemRow, DataListCell, DataListCheck, DataListAction } from '@patternfly/react-core';
import AppDropdownKebab from './appDropdownKebab';
import {AppTag} from './appTag';
import ApicurioIcon from './assets/apicurio-icon.png';
import './app.css';
import { Services } from './common';
import { StoreContext } from './../context/StoreContext';
import {Api} from "@apicurio/models";
import { useStoreContext } from './../context/reducers'

export const AppDataListItem = () => {

  const apisService = Services.getInstance().apisService;
  const { apiData } = useStoreContext();
  const [state, setState] = useContext(StoreContext);

  const fetchDataAction = async () => {
    apisService.getApis()
    .then( apis => {
      const insideApis: Api[] = apis.data;
      return insideApis;
    })
    .then(function(insideApis) {
        setState({...state, apiData: insideApis});
    })
    .catch(error => {
      console.error("error getting API" + error);
    });
   }

  useEffect(() => {
    fetchDataAction();
  }, []);
    
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
                <Button variant="link">View Details</Button>
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