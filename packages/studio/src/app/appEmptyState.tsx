import React, { ReactNode } from 'react';
import {Button, EmptyState, EmptyStateIcon, EmptyStateVariant, EmptyStateBody, EmptyStateSecondaryActions, Title} from '@patternfly/react-core';
import {PlusCircleIcon} from '@patternfly/react-icons';
import {Link} from 'react-router-dom';

export const AppEmptyState: React.FunctionComponent<any> = (props) => {

  return (
  <EmptyState variant={EmptyStateVariant.full} className="app-empty-state">
    <EmptyStateIcon icon={PlusCircleIcon} />
    <Title headingLevel="h5" size="lg">
      You have no APIs yet!
    </Title>
    <EmptyStateBody>
      You can use Apicurio to create, modify and collaborate on new and existing APIs.
    </EmptyStateBody>
    <Link to="/create-api">
      <Button variant="primary">
        Create new API
      </Button>
    </Link>
    <EmptyStateSecondaryActions>
      <Link to="/import-api">
        <Button variant="link">
          Import existing API
        </Button>
      </Link>
    </EmptyStateSecondaryActions>
  </EmptyState>
  );
}

export default AppEmptyState;