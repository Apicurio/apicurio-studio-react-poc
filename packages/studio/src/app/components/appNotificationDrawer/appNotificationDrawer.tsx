import React from 'react';
import { Button, DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell, DrawerHead, DrawerPanelBody, DrawerPanelContent, Title } from '@patternfly/react-core';

export const AppNotificationDrawer = () => {

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