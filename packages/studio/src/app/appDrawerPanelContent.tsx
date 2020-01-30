import React, { ReactNode } from 'react';
import { Button, Card, CardActions, CardHead, CardHeader, CardBody, CardFooter, Title } from '@patternfly/react-core';
import {TimesIcon, EyeIcon} from '@patternfly/react-icons';
import ApicurioIcon from './assets/apicurio-icon.png';
import AppTabs from './appTabs';
import './app.css'
import data from '../api-data.json';
import { variance } from '../../../../node_modules/@babel/types';

type AppDrawerPanelContentProps = {
  drawerContent: string
}

class AppDrawerPanelContent extends React.Component<AppDrawerPanelContentProps> {
  constructor(props: AppDrawerPanelContentProps) {
    super(props);
  }

  render() {
    const name;
    data.apis.map((api) => {
      if(api.id === this.props.currentAPIId) {
        name = api.name;
      }
    });

    return (
      <Card>
        <CardHead>
          <span>
            <img src={ApicurioIcon}/>
            <Title headingLevel="h3" size="xl">
              {name}
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
        <AppTabs/>
      </Card>
    )
  };
}

export default AppDrawerPanelContent;