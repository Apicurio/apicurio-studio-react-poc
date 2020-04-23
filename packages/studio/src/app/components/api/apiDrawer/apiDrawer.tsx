import React from 'react';
import { Drawer, DrawerPanelContent, DrawerContent } from '@patternfly/react-core/dist/esm/experimental';
import AppDataList from '../apiDataList/apiDataList';
import {ApiCardView} from '../..';
import ApiDrawerPanelContent from './apiDrawerPanelContent';
import './apiDrawer.css';

export interface ApiDrawerProps {
  dashboardView: string
}

interface ApiDrawerState {
  readonly currentApiId: string,
  readonly isExpanded: boolean,
}

export class ApiDrawer extends React.Component<ApiDrawerProps, ApiDrawerState> {
  constructor(props: ApiDrawerProps) {
    super(props);
    this.state = {
      currentApiId: "",
      isExpanded: false
    };
  }

  render() {
   const { isExpanded, currentApiId } = this.state;

   return (
    <React.Fragment>
      <Drawer isExpanded={isExpanded} isInline className="app-drawer-drawer">
        <DrawerContent>
          <div className="api-drawer-content">
            { 
            this.props.dashboardView === 'list' ? (
              <AppDataList keyListItem={this.findKey} selectItem={this.openDrawer} viewDetails={this.openDrawer}/>
             ) : (
            <ApiCardView/>
            )
          }
          </div>
        </DrawerContent>
        <DrawerPanelContent className="api-drawer-panel-body">
          <ApiDrawerPanelContent currentApiId={currentApiId}/>
        </DrawerPanelContent>
      </Drawer>
    </React.Fragment>
    );
 }

  public openDrawer = () => {
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
}

export default ApiDrawer;