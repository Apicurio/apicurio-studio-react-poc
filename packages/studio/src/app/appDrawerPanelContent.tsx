import React from 'react';
import { Button, Card, CardActions, CardHead, CardHeader, CardBody, CardFooter, Title } from '@patternfly/react-core';
import {TimesIcon, EyeIcon} from '@patternfly/react-icons';
import ApicurioIcon from './assets/apicurio-icon.png';
import AppTabs from './appTabs';
import './app.css'
import data from '../api-data.json';

type AppDrawerPanelContentProps = {
  currentApiId: string
}

class AppDrawerPanelContent extends React.Component<AppDrawerPanelContentProps> {
  constructor(props: AppDrawerPanelContentProps) {
    super(props);
  }

  render() {
    function findId(array: string[], id: string) {
      var apiTemp = array.find(api => api.id === id);
      if (apiTemp != undefined) {
        return apiTemp;
      }
      else {
        return Error;
      }
    }

    var apiObject = findId(data.apis, this.props.currentApiId);

    return (
      <Card>
        <CardHead>
          <span>
            <img src={ApicurioIcon}/>
            <Title headingLevel="h3" size="xl">
              {apiObject.name}
            </Title>
          </span>
          <CardActions>
            <Button variant="plain" aria-label="Action">
              <TimesIcon/>
            </Button>
          </CardActions>
        </CardHead>
        <CardBody>
          <div className="app-button-group-sm">
            <Button variant="tertiary" className="pf-u-mr-sm">
              <EyeIcon/>
              Preview documentation
            </Button>
            <Button variant="secondary">
              Edit API
            </Button>
          </div>
        </CardBody>
        <AppTabs date={apiObject.createdBy} author={apiObject.createdBy}/>
      </Card>
    )
  };
}

export default AppDrawerPanelContent;