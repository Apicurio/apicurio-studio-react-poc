import React, { ReactNode } from 'react';
import { Drawer, DrawerPanelContent, DrawerContent } from '@patternfly/react-core/dist/esm/experimental';
import { Button } from '@patternfly/react-core';
import AppDataList from './appDataList';
import {AppCardView} from './appCardView';
import {AppDrawerPanelContent} from './appDrawerPanelContent';
import './app.css'

type AppDrawerProps = {
}

type AppDrawerState = {
  isExpanded: boolean
}

class AppDrawer extends React.Component<AppDrawerProps, AppDrawerState> {
  constructor(props: AppDrawerProps) {
   super(props);
   this.state = {
     isExpanded: false
   };
  }

  onClick = () => {
    const isExpanded = !this.state.isExpanded;
    this.setState({
      isExpanded
    });
  };

 render() {
   const { isExpanded } = this.state;

   return (
    <React.Fragment>
      <Button onClick={this.onClick}>Toggle Drawer</Button>
      <Drawer isExpanded={isExpanded} isInline>
        <DrawerContent>
          <div className="app-drawer-content">
            <AppDataList/>
            <AppCardView/>
          </div>
        </DrawerContent>
        <DrawerPanelContent>
          <AppDrawerPanelContent/>
        </DrawerPanelContent>
      </Drawer>
    </React.Fragment>
    );
 }
}

export default AppDrawer;