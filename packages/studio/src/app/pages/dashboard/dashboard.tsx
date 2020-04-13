import React, {useEffect, useContext, useState} from "react";
import { Button, Drawer, DrawerContent, DrawerContentBody, DrawerPanelContent, Level, LevelItem, Title, PageSection, PageSectionVariants } from '@patternfly/react-core';
import '../../app.css';
import { ApiDrawer, ApiEmptyState, ApiToolbar } from '../../components';
import {Link} from 'react-router-dom';
import {} from '../../'
import { Services } from './../../common';
import { StoreContext } from './../../../context/StoreContext';
import {Api} from "@apicurio/models";
import { useStoreContext } from './../../../context/reducers';
import { ApiNotificationDrawer } from './../../components/api/apiNotificationDrawer/apiNotificationDrawer';
import { ApiDesignChange } from "@apicurio/models";
import { ApiContext, ApiContextObj } from '../../../context';

export const Dashboard = () => {

  const apisService = Services.getInstance().apisService;
  const userService = Services.getInstance().currentUserService;
  const apiContext = useContext(ApiContext) as ApiContextObj;

  apiContext.updateApi()

  //const { apiData, dashboardView, notificationDrawerExpanded, recentActivityData } = useStoreContext();
  const [state, setState] = useContext(StoreContext);
  const activityStart: number = 0;
  const activityEnd: number = 10;
  const [hasMoreActivity, setHasMoreActivity] = useState(false);

  const loadAsyncPageData = async () => {
    const apiState = await apisService.getApis()
      .then( apis => {
        const insideApis: Api[] = apis.data;
        return insideApis;
      })
      .catch(error => {
        console.error("error getting API" + error);
      });

    const activitiyState = await userService.getActivity(activityStart, activityEnd)
      .then( activity => {
        const activityData: ApiDesignChange[] = activity.data;
        if(activityData && activityData.length >= 10) {
          setHasMoreActivity(true);
        }
        return activityData;
      })
      .catch(error => {
        console.error("error getting API" + error);
      });

      setState({...state, apiData: apiState, recentActivityData: activitiyState});
    }

  useEffect(() => {
    loadAsyncPageData();
  }, []);

  const panelContent = (
    <ApiNotificationDrawer/>
  );

    const apiCount = apiData.length;

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
              <PageSection noPadding={true} className="app-page-section-height">
                {apiCount >= 8 ? (
                  <ApiEmptyState />
                ) : (
                  <ApiDrawer dashboardView={dashboardView}/>
                )}
              </PageSection>
            </DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  };
