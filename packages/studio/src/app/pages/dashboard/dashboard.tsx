import React, {useEffect, useContext} from "react";
<<<<<<< HEAD
import { Button, Drawer, DrawerContent, DrawerContentBody, DrawerPanelContent, Level, LevelItem, Title, PageSection, PageSectionVariants } from '@patternfly/react-core';
import AppEmptyState from '../../appEmptyState';
import { ApiToolbar } from '../../components/apiToolbar/apiToolbar';
import AppDrawer from '../../appDrawer';
import '../../app.css';
=======
import { Button, Level, LevelItem, Title, PageSection, PageSectionVariants } from '@patternfly/react-core';
import { ApiDrawer, ApiEmptyState, ApiToolbar } from '../../components';
>>>>>>> master
import {Link} from 'react-router-dom';
import { Services } from './../../common';
import { StoreContext } from './../../../context/StoreContext';
import {Api} from "@apicurio/models";
import { useStoreContext } from './../../../context/reducers';
import { AppNotificationDrawer } from '../../components/appNotificationDrawer/appNotificationDrawer';

export const Dashboard = () => {

  const apisService = Services.getInstance().apisService;
  const { apiData, dashboardView, notificationDrawerExpanded } = useStoreContext();
  const [state, setState] = useContext(StoreContext);

  const fetchDataAction = async () => {
    apisService.getApis()
    .then( apis => {
      const insideApis: Api[] = apis.data;
      return insideApis;
    })
    .then((insideApis) => {
        setState({...state, apiData: insideApis});
    })
    .catch(error => {
      console.error("error getting API" + error);
    });
   }

  useEffect(() => {
    fetchDataAction();
  }, []);

<<<<<<< HEAD
  const panelContent = (
    <AppNotificationDrawer/>
  );

    var apiCount = apiData.length;
=======
    const apiCount = apiData.length;
>>>>>>> master
    return (
      <React.Fragment>
        <Drawer isExpanded={notificationDrawerExpanded}>
            <DrawerContent panelContent={panelContent}>
              <DrawerContentBody>
                <PageSection variant={PageSectionVariants.light} className="app-page-section-border-bottom">
                  <Level>
                    <LevelItem>
                      <Title headingLevel="h1" size="3xl">
                        APIs
                      </Title>
                    </LevelItem>
                    <LevelItem className="app-button-group-md">
                      <Link to="/import-api">
                        <Button variant="secondary">
                          Import API
                        </Button>
                      </Link>
                      <Link to="/create-api">
                        <Button variant="primary">
                          Create new API
                        </Button>
                      </Link>
                    </LevelItem>
                  </Level>
                </PageSection>
                <PageSection variant={PageSectionVariants.light} noPadding={true} className="app-page-section-border-bottom">
                  <ApiToolbar/>
                </PageSection>

<<<<<<< HEAD
                <PageSection noPadding={true}>
                  {apiCount >= 8 ? (
                    <AppEmptyState />
                  ) : (
                    <AppDrawer dashboardView={dashboardView}/>
                  )}
                </PageSection>
              </DrawerContentBody>
            </DrawerContent>
        </Drawer>
=======
        <PageSection noPadding={true}>
          {apiCount >= 8 ? (
            <ApiEmptyState />
          ) : (
            <ApiDrawer dashboardView={dashboardView}/>
          )}
        </PageSection>
>>>>>>> master
      </React.Fragment>
    );
  };
