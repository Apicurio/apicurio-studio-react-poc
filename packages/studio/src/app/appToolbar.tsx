import React, { useContext } from 'react';
import { DataToolbar , DataToolbarItem, DataToolbarContent } from '@patternfly/react-core/dist/esm/experimental';
import { Button } from '@patternfly/react-core';
import {ThIcon, ListIcon} from '@patternfly/react-icons';
import './app.css';
import { StoreContext } from './../context/StoreContext';
import { useStoreContext } from './../context/reducers';

export const AppToolbar = () => {

  const [state, setState] = useContext(StoreContext);
  const { dashboardState } = useStoreContext();

  const setDashboardState = (dashboardState: string) => {
    setState({...state, dashboardView: dashboardState});
  }

    return (
      <DataToolbar>
        <DataToolbarContent>
          <DataToolbarItem>
            This is where the Data Toolbar should go
          </DataToolbarItem>
          <DataToolbarItem variant="pagination">
            <Button onClick={() => setDashboardState('card')} className={'app-data-toolbar-button-control ' + (dashboardState === "card" ? "pf-m-selected" : "")} variant="plain">
              <ThIcon/>
            </Button>
            <Button onClick={() => setDashboardState('list')} className={'app-data-toolbar-button-control ' + (dashboardState === "list" ? "pf-m-selected" : "")} variant="plain">
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

export default AppToolbar;
