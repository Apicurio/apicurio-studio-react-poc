import React from 'react';
import { DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell } from '@patternfly/react-core';
import { ApiActivityItem } from '../apiActivityItem/apiActivityItem';
import { GlobalContext } from '../../../../context';

export const ApiActivityView = () => {
  const { recentActivity } = { ... React.useContext(GlobalContext).store };
    return (
      <React.Fragment>
      <div className="api-details-content">
          <h3>Activity</h3>
                   <DataList aria-label="app-data-list-api-activity" key="api-activity-list">
                   <React.Fragment>
                       { recentActivity.map((activity, index) =>
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
                                  ]}
                                  />
                              </DataListItemRow>
                          </DataListItem>
                      )}
                  </React.Fragment>
              </DataList>
      </div>
      </React.Fragment>
    )
}

export default ApiActivityView;