import React, { useEffect, useContext } from 'react';
import { Button, DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell, DrawerHead, DrawerPanelBody, DrawerPanelContent, Title } from '@patternfly/react-core';
import { Services } from './../../common';
// import { ApiDesignChange } from "@apicurio/models";
import { useStoreContext } from './../../../context/reducers';
import { StoreContext } from './../../../context/StoreContext';

export const AppNotificationDrawer = () => {

    // fix all of this tomorrow 
    const apisService = Services.getInstance().apisService;
    const [state, setState] = useContext(StoreContext);
    const { recentActivityData } = useStoreContext();

    const fetchDataAction = async () => {
        apisService.getActivity(1, 20)
        .then( activity => {
          return activity;
        })
        .then(function(activity) {
            setState({...state, recentActivityData: activity});
        })
        .catch(error => {
          console.error("error getting API" + error);
        });
       }
    
      useEffect(() => {
        fetchDataAction();
      }, []);

    return (
        <DrawerPanelContent>
            <DrawerHead>
                <Title size="lg" headingLevel="h3">
                    Recent Activity
                </Title>
            </DrawerHead>
            <DrawerPanelBody noPadding>
                <DataList isCompact>
                    <DataListItem>
                        <DataListItemRow>
                        <DataListItemCells
                            dataListCells={[
                                <DataListCell key="1">
                                    <Button>
                                        Pet Store API
                                    </Button>
                                    <div>
                                        In PetStore you added a new operation named..
                                    </div>
                                    <div>
                                        Timestamp
                                    </div>
                                </DataListCell>
                            ]}
                            />
                        </DataListItemRow>
                    </DataListItem>
                </DataList>
            </DrawerPanelBody>
        </DrawerPanelContent>
    )
};

export default AppNotificationDrawer;