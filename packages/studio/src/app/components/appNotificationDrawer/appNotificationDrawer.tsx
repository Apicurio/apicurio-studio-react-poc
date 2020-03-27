import React, { useEffect, useContext } from 'react';
import { DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell, DrawerHead, DrawerPanelBody, DrawerPanelContent, Title } from '@patternfly/react-core';
import { UserServices } from './../../common';
import { ApiDesignChange } from "@apicurio/models";
import { useStoreContext } from './../../../context/reducers';
import { StoreContext } from './../../../context/StoreContext';
import { AppActivityItem } from '../appActivityItemComponent/appActivityItemComponent';

export const AppNotificationDrawer = () => {

    const userService = UserServices.getInstance().currentUserApisService;
    const [state, setState] = useContext(StoreContext);
    const { recentActivityData } = useStoreContext();

    const activityStart: number = 0;
    const activityEnd: number = 10;
    // const hasMoreActivity: boolean = false;
    // const gettingMoreActivity: boolean = false;

    const fetchDataAction = async () => {
        userService.getActivity(activityStart, activityEnd)
        .then( activity => {
            const activityData: ApiDesignChange[] = activity.data;
            return activityData;
        })
        .then(function(activityData) {
            setState({...state, recentActivityData: activityData});
        })
        .catch(error => {
          console.error("error getting API" + error);
        });
       }
    
      useEffect(() => {
        fetchDataAction();
      }, []);

      console.log('what is recent activity' + JSON.stringify(recentActivityData));

    return (
        <DrawerPanelContent>
            <DrawerHead>
                <Title size="lg" headingLevel="h3">
                    Recent Activity
                </Title>
            </DrawerHead>
            <DrawerPanelBody noPadding>
                <DataList>
                    <React.Fragment>
                        { recentActivityData.map( activity =>
                            <DataListItem>
                                <DataListItemRow>
                                <DataListItemCells
                                    dataListCells={[
                                        <DataListCell key="1">
                                            <AppActivityItem
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
            </DrawerPanelBody>
        </DrawerPanelContent>
    )
};

export default AppNotificationDrawer;