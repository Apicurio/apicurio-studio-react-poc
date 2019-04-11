import React from 'react';
import {Avatar, Brand, PageHeader } from '@patternfly/react-core';
import {AppToolbar} from './appToolbar';
import brandImg from '../../assets/APIDesigner.svg';

const showNavToogle: boolean = false;

export const AppHeader: React.FunctionComponent<any> = (props) => {
    return (<PageHeader
        logo={<Brand src={ brandImg } alt="Patternfly Logo" />}
        toolbar={AppToolbar}
        avatar={<Avatar alt="Avatar image" />}
        showNavToggle = {showNavToogle}
      />);
}

export default AppHeader;
