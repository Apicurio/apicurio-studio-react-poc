import React, { ReactNode } from 'react';
import {Button, EmptyState, EmptyStateIcon, EmptyStateVariant, EmptyStateBody, EmptyStateSecondaryActions, Title} from '@patternfly/react-core';
//import {UserDropdown} from './components/userDropDown'
import {PlusCircleIcon} from '@patternfly/react-icons';
//TODO: Need to add accessibility to the toolbar (see: http://patternfly-react.surge.sh/patternfly-4/demos/pagelayout)
 

let isDropdownOpen: boolean = false;

const userDropdownItems: ReactNode[] = [];

export const AppEmptyState: React.FunctionComponent<any> = (props) => {
  return (
  <EmptyState variant={EmptyStateVariant.full}>
    <EmptyStateIcon icon={PlusCircleIcon} />
    <Title headingLevel="h5" size="lg">
      You have no APIs yet!
    </Title>
    <EmptyStateBody>
      You can use Apicurio to create, modify and collaborate on new and existing APIs.
    </EmptyStateBody>
    <Button variant="primary">Create new API</Button>
    <EmptyStateSecondaryActions>
      <Button variant="link">Import existing API</Button>
    </EmptyStateSecondaryActions>
  </EmptyState>
  );
}

export default AppEmptyState;