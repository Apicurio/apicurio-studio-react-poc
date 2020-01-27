import React, { ReactNode } from 'react';
import { Button, Card, CardActions, CardHead, CardHeader, CardBody, CardFooter, Title } from '@patternfly/react-core';
import {TimesIcon, EyeIcon} from '@patternfly/react-icons';
import ApicurioIcon from './assets/apicurio-icon.png';
import AppTabs from './appTabs';
import './app.css'

export const AppDrawerPanelContent = ({ }) => (
  <Card>
    <CardHead>
      <span>
        <img src={ApicurioIcon}/>
        <Title headingLevel="h3" size="xl">
          My Pet Store API
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
);