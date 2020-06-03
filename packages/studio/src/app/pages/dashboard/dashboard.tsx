import React, {useEffect, useContext, useState} from "react";
import { Button, Drawer, DrawerContent, DrawerContentBody, DrawerPanelContent, Level, LevelItem, Title, PageSection, PageSectionVariants } from '@patternfly/react-core';
import '../../app.css';
import { ApiDrawer, ApiEmptyState, AppToolbar } from '../../components';
import {Link} from 'react-router-dom';
import { GlobalContext, GlobalContextObj } from '../../../context';
import { Services } from './../../common';
import { ApiNotificationDrawer } from './../../components/api/apiNotificationDrawer/apiNotificationDrawer';
import { ApiDesignChange } from "@apicurio/models";
import ApiToolbar from "src/app/components/api/apiToolbar/apiToolbar";

export const Dashboard = () => {

  const apisService = Services.getInstance().apisService;
  const userService = Services.getInstance().currentUserService;
  const globalContext: GlobalContextObj = useContext(GlobalContext);
  const activityStart: number = 0;
  const activityEnd: number = 10;
  const [hasMoreActivity, setHasMoreActivity] = useState(false);

  const loadAsyncPageData = async () => {
     await apisService.getApis()
      .then( apis => {
        globalContext.updateApis(apis);
      })
      .catch(error => {
        console.error("error getting API " + error);
      });

    await userService.getActivity(activityStart, activityEnd)
      .then( activity => {
        globalContext.updateRecentActivity(activity);
        const activityData: ApiDesignChange[] = activity;
        if(activityData && activityData.length >= 10) {
          setHasMoreActivity(true);
        }
        return activityData;
      })
      .catch(error => {
        console.error("error getting activities " + error);
      });
    }

  useEffect(() => {
    loadAsyncPageData();
  }, []);

  const panelContent = (
    <ApiNotificationDrawer/>
  );

    const apiCount = globalContext.store.apis.length;

    return (
      <React.Fragment>
        <Drawer isExpanded={globalContext.store.notificationDrawerExpanded}>
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
                {apiCount === 0 ? (
                  <ApiEmptyState />
                ) : (
                  <ApiDrawer dashboardView={globalContext.store.dashboardView}/>
                )}
              </PageSection>
            </DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  };
