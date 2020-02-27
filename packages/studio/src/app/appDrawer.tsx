import React, { useContext, useEffect } from 'react';
import { Drawer, DrawerPanelContent, DrawerContent } from '@patternfly/react-core/dist/esm/experimental';
import AppDataList from './appDataList';
import {AppCardView} from './appCardView';
import AppDrawerPanelContent from './appDrawerPanelContent';
import './app.css';
import { Services } from './common'
import {Api} from "@apicurio/models";
import { ApisService } from '@apicurio/services';
// import { StoreContext } from './../context/StoreContext';
import {storeApis} from './../functions/fetchApis';

interface AppDrawerProps {
  apiView: string
}

interface AppDrawerState {
  readonly currentApiId: string,
  readonly isExpanded: boolean
}

class AppDrawer extends React.Component<AppDrawerProps, AppDrawerState> {
  private apisService: ApisService;
  constructor(props: AppDrawerProps) {
    super(props);
    this.apisService = Services.getInstance().apisService;
    this.state = {
      currentApiId: "",
      isExpanded: false
    };
  }

  public allApis: Api[] = [];

  componentDidMount() {
    this.fetchDataAction();
  }

  fetchDataAction = async () => {
    this.apisService.getApis().then( apis => {
      console.log('what happened here' + JSON.stringify(apis.data));
      apis.data.forEach(api => this.allApis.push({
        id: api.id,
        name: api.name,
        description: api.description,
        createdOn: api.createdOn,
        createdBy: api.createdBy,
        tags: api.tag,
        type: api.type
      }))
      console.log(this.allApis);
      storeApis(this.allApis);
      })
      .catch(error => {
        console.error("error getting API" + error);
      });
   }

  // loadAsyncPageData(): void {
  //   this.apisService.getApis().then( apis => {
  //     console.log('what happened here' + JSON.stringify(apis.data));
  //     apis.data.forEach(api => this.allApis.push({
  //       id: api.id,
  //       name: api.name,
  //       description: api.description,
  //       createdOn: api.createdOn,
  //       createdBy: api.createdBy,
  //       tags: api.tag,
  //       type: api.type
  //     }))
  //     console.log(this.allApis);
  //     })
  //     .catch(error => {
  //       console.error("error getting API" + error);
  //     });
  // }

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
      <Drawer isExpanded={isExpanded} isInline>
        <DrawerContent>
          <div className="app-drawer-content">
            { this.props.apiView === 'list' ?
              <AppDataList keyListItem={this.findKey} selectItem={this.openDrawer} viewDetails={this.openDrawer}/>
            :
            <AppCardView/>
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