import React, { ReactNode } from 'react';
import { Drawer, DrawerPanelContent, DrawerContent } from '@patternfly/react-core/dist/esm/experimental';
import { Button } from '@patternfly/react-core';
import AppDataList from './appDataList';
import {AppCardView} from './appCardView';
import AppDrawerPanelContent from './appDrawerPanelContent';
import './app.css';
import data from '../api-data.json';

type AppDrawerProps = {
  apiView: string
}

type AppDrawerState = {
  isExpanded: boolean,
  currentAPIId: number
}

const apiData = data.apis;

class AppDrawer extends React.Component<AppDrawerProps, AppDrawerState> {
  constructor(props: AppDrawerProps) {
   super(props);
   this.state = {
     isExpanded: false,
     currentAPIId: 0
   };
  }

  onClick = () => {
    const isExpanded = !this.state.isExpanded;
    this.setState({
      isExpanded
    });
  };

  findKey = (key) => {
    const keyListItem = key;
    this.setState({
      currentAPIId: keyListItem
    })
  }

 render() {
   const { isExpanded, currentAPIId } = this.state;

   return (
    <React.Fragment>
      <Drawer isExpanded={isExpanded} isInline>
        <DrawerContent>
          <div className="app-drawer-content">
            { this.props.apiView === 'list' ?
              <AppDataList keyListItem={this.findKey} selectItem={this.onClick} viewDetails={this.onClick}/>
            :
            <AppCardView/>
          }
          </div>
        </DrawerContent>
        <DrawerPanelContent>
          <AppDrawerPanelContent drawerContent={apiData[currentAPIId]}/>
        </DrawerPanelContent>
      </Drawer>
    </React.Fragment>
    );
 }
}

export default AppDrawer;