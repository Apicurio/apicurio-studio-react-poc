import React, { useContext } from 'react';
import { DataToolbar , DataToolbarItem, DataToolbarContent } from '@patternfly/react-core/dist/esm/experimental';
import { Button } from '@patternfly/react-core';
import {ThIcon, ListIcon} from '@patternfly/react-icons';
import {GlobalContext, GlobalContextObj, DashboardViews} from '../../../../context';

export const ApiToolbar: React.FunctionComponent = () => {

  const globalContext: GlobalContextObj = useContext(GlobalContext);

  return (
    <DataToolbar id="apiToolbar">
      <DataToolbarContent>
        <DataToolbarItem>
          This is where the Data Toolbar should go
        </DataToolbarItem>
        <DataToolbarItem variant="pagination">
          <Button onClick={() => globalContext.setDashboardView(DashboardViews.CARD)} className={'app-data-toolbar-button-control ' + (globalContext.store.dashboardView === DashboardViews.CARD ? "pf-m-selected" : "")} variant="plain">
            <ThIcon/>
          </Button>
          <Button onClick={() => globalContext.setDashboardView(DashboardViews.LIST)} className={'app-data-toolbar-button-control ' + (globalContext.store.dashboardView === DashboardViews.LIST ? "pf-m-selected" : "")} variant="plain">
            <ListIcon/>
          </Button>
          <span className="app-toolbar-api-total">
            4 APIs found
          </span>
        </DataToolbarItem>
      </DataToolbarContent>
    </DataToolbar>
  )
}

export default ApiToolbar;
