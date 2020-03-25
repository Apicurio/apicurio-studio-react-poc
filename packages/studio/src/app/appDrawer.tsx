import React from 'react';
import { Drawer, DrawerPanelContent, DrawerContent } from '@patternfly/react-core/dist/esm/experimental';
import AppDataList from './appDataList';
import {AppCardView} from './appCardView';
import AppDrawerPanelContent from './appDrawerPanelContent';
import './app.css';

interface AppDrawerProps {
  dashboardView: string
}

interface AppDrawerState {
  readonly currentApiId: string,
  readonly isExpanded: boolean,
}

class AppDrawer extends React.Component<AppDrawerProps, AppDrawerState> {
  constructor(props: AppDrawerProps) {
    super(props);
    this.state = {
      currentApiId: "",
      isExpanded: false
    };
  }

  private openDrawer = () => {
    const isExpanded = !this.state.isExpanded;
    this.setState({
      isExpanded
    });
  };

  private findKey = (id: string) => {
    const keyListItem = id;
    this.setState({
      currentApiId: keyListItem
    })
  }

 render() {
   const { isExpanded, currentApiId } = this.state;

   return (
    <React.Fragment>
      <Drawer isExpanded={isExpanded} isInline className="app-drawer-drawer">
        <DrawerContent>
          <div className="app-drawer-content">
            { 
            this.props.dashboardView === 'list' ? (
              <AppDataList keyListItem={this.findKey} selectItem={this.openDrawer} viewDetails={this.openDrawer}/>
             ) : (
            <AppCardView/>
            )
          }
          </div>
        </DrawerContent>
        <DrawerPanelContent className="app-drawer-panel-body">
          <AppDrawerPanelContent currentApiId={currentApiId}/>
        </DrawerPanelContent>
      </Drawer>
    </React.Fragment>
    );
 }
}

export default AppDrawer;