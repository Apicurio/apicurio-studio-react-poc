import React, { useContext } from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import {GlobalContext, GlobalContextObj, DashboardViews} from '../../../../context';
import ApiDataListState from '../apiDataList/apiDataListItem';
import './apiDetailsView.css';

export const ApiDetailsView: React.FunctionComponent = () => {

  function findId(array: any[], id: string) {
    const apiTemp = array.find(api => api.id === id);
    if (apiTemp !== undefined) {
      return apiTemp;
    }
    else {
      return Error;
    }
  }

  const currentId = ApiDataListState;

  const { apis } = {... useContext(GlobalContext).store}
  // const apiObject = findId(apis, props.currentApiId);

  // const globalContext: GlobalContextObj = useContext(GlobalContext);
  
    return (
    <div className="api-details-content">
        <p><b>Details</b></p>
        <p>Created on {}</p>
        <p>Created by {}</p>
        <p>{} Other collaborators</p>
        <br />
        <p><b>Collaborators</b></p>
    </div>
    );
  }

export default ApiDetailsView;