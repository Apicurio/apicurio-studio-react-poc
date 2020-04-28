import React, { useContext } from 'react';
import { Drawer, DrawerPanelContent, DrawerContent } from '@patternfly/react-core/dist/esm/experimental';
import ApiDataList from '../apiDataList/apiDataList';
import {ApiCardView} from '../..';
import ApiDrawerPanelContent from './apiDrawerPanelContent';
import { GlobalContext, GlobalContextObj } from '../../../../context';
import './apiDrawer.css';

export interface ApiDrawerProps {
  dashboardView: string
}

interface ApiDrawerState {
  readonly currentApiId: string,
  readonly isExpanded: boolean,
}

export const ApiDrawer: React.FunctionComponent<ApiDrawerProps> = (props) => {
  const globalContext: GlobalContextObj = useContext(GlobalContext);
  const { apis,  apiDrawerExpanded } = {... useContext(GlobalContext).store};
  const { store } = useContext(GlobalContext);
  const setSelectedApiState = (selectedApiState: string) => {
    globalContext.setSelectedApiId(selectedApiState);
  }

  function openDrawer() {
    const isExpanded = !apiDrawerExpanded;
  };

  function findKey(id: string) {
    const keyListItem = id;
    setSelectedApiState(keyListItem);
  }  

   return (
    <React.Fragment>
      <Drawer isExpanded={apiDrawerExpanded} isInline className="app-drawer-drawer">
        <DrawerContent>
          <div className="api-drawer-content">
            { 
            props.dashboardView === 'list' ? (
              <ApiDataList keyListItem={findKey} selectItem={openDrawer} viewDetails={openDrawer}/>
             ) : (
            <ApiCardView/>
            )
          }
          </div>
        </DrawerContent>
        <DrawerPanelContent className="api-drawer-panel-body">
          <ApiDrawerPanelContent currentApiId={globalContext.store.selectedApiId}/>
        </DrawerPanelContent>
      </Drawer>
    </React.Fragment>
    );
 }

export default ApiDrawer;