import React from 'react';
import { DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell } from '@patternfly/react-core';
import { ApiActivityItem } from '../apiActivityItem/apiActivityItem';
import { GlobalContext } from '../../../../context';

export interface ApiActivityViewProps {
    currentApi: any
  }

function findId(apis: any[], id: string) {
  // console.log(`array is ${JSON.stringify(apis)}, id is ${id}`);
    const apiTemp = apis.find(api => api.apiId === id);
    if (apiTemp !== undefined) {
      return apiTemp;
    }
    else {
      return Error;
    }
  }

export const ApiActivityView = (props) => {
  const { recentActivity } = { ... React.useContext(GlobalContext).store };
  const selectedApi = props.currentApi.id;
  let specificApiActivity = [];

  specificApiActivity = findId(recentActivity, selectedApi);

  const noActivityMsg = "No activity found for this API.";


    return (
      <React.Fragment>
      <div className="api-details-content">
          <h3>Activity</h3>
                       { specificApiActivity !== Error ? recentActivity.map((activity, index) =>
                   <DataList aria-label="app-data-list-api-activity" key="api-activity-list">
                   <React.Fragment>
                          <DataListItem aria-labelledby={`data-list-item-${index}`} key={index}>
                              <DataListItemRow>
                              <DataListItemCells
                                  dataListCells={[
                                      <DataListCell key="1">
                                          <ApiActivityItem
                                              activityApiName={activity.apiName}
                                              activityType={activity.type}
                                              activityOn={activity.on}
                                              activityData={activity.data}
                                          />
                                      </DataListCell>
                                  ]}/>
                              </DataListItemRow>
                          </DataListItem>
                          </React.Fragment>
                      </DataList>
                      ) :
                      <p>{noActivityMsg}</p>}
      </div>
      </React.Fragment>
    )
}

export default ApiActivityView;