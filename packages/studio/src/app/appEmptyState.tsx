import React, { ReactNode } from 'react';
import {EmptyState} from '@patternfly/react-core';
import {UserDropdown} from './components/userDropDown'
import {PlusCircleIcon} from '@patternfly/react-icons';
//TODO: Need to add accessibility to the toolbar (see: http://patternfly-react.surge.sh/patternfly-4/demos/pagelayout)
 

let isDropdownOpen: boolean = false;

const userDropdownItems: ReactNode[] = [];

export const AppEmptyState = (
  <EmptyState>
    
  </EmptyState>
);

export default AppEmptyState;