import React from 'react';
import { Drawer, DrawerContent } from '@patternfly/react-core/dist/esm/experimental';
import PropTypes from 'prop-types';

export const AppNotificationDrawer = ({ isExpanded }) => {

    return (
        <Drawer isExpanded={isExpanded}>
            <DrawerContent>
                HI
            </DrawerContent>
        </Drawer>
    )
};

AppNotificationDrawer.propTypes = {
    isExpanded: PropTypes.any
};

export default AppNotificationDrawer;