import React, { useEffect, useContext } from 'react';
import { DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell, DrawerHead, DrawerPanelBody, DrawerPanelContent, Title } from '@patternfly/react-core';
import { Services } from './../../../common';
import { ApiDesignChange } from "@apicurio/models";
import { useStoreContext } from './../../../../context/reducers';
import { StoreContext } from './../../../../context/StoreContext';
import { ApiActivityItem } from '../ApiActivityItem/ApiActivityItem';

export const ApiNotificationDrawer = () => {
    const [state, setState] = useContext(StoreContext);
    const { recentActivityData } = useStoreContext();

    // const hasMoreActivity: boolean = false;
    // const gettingMoreActivity: boolean = false;
    

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
            </DrawerPanelBody>
        </DrawerPanelContent>
    )
};

export default ApiNotificationDrawer;