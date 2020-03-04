import React, {useEffect, useContext} from "react";
import { Button, Level, LevelItem, Title, PageSection, PageSectionVariants } from '@patternfly/react-core';
import AppEmptyState from '../../appEmptyState';
import AppToolbar from "../../appToolbar";
import AppDrawer from '../../appDrawer';
import '../../app.css';
import {Link} from 'react-router-dom';
import { Services } from './../../common';
import { StoreContext } from './../../../context/StoreContext';
import {Api} from "@apicurio/models";
import { useStoreContext } from './../../../context/reducers';

export const Dashboard = () => {

  // const apiViewChange = () => {
  //   // this.setState(prevState => ({ 
  //   //   apiView: prevState.apiView === "list" ? "card" : "list"
  //   // }))
  // }

  const { apiData, dashboardView } = useStoreContext();
  const apisService = Services.getInstance().apisService;
  const [state, setState] = useContext(StoreContext);

  const fetchDataAction = async () => {
    apisService.getApis()
    .then( apis => {
      const insideApis: Api[] = apis.data;
      return insideApis;
    })
    .then(function(insideApis) {
        setState({...state, apiData: insideApis});
    })
    .catch(error => {
      console.error("error getting API" + error);
    });
   }

  useEffect(() => {
    fetchDataAction();
  }, []);

    var apiCount = apiData.length;
    return (
      <React.Fragment>
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
          <AppToolbar/>
        </PageSection>

        <PageSection noPadding={true}>
          {apiCount >= 8 ? (
              <AppEmptyState />
          ) : (
            <AppDrawer dashboardView={dashboardView}/>
          )}
        </PageSection>
      </React.Fragment>
    );
  };
