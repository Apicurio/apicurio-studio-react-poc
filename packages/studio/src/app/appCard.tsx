import React from 'react';
import { Card, CardHead, CardHeader, CardBody, CardFooter, CardActions } from '@patternfly/react-core';
import {AppTag} from './appTag';
import ApicurioIcon from './assets/apicurio-icon.png';
import './app.css'

interface AppCardProps {
  id: string,
  name: string,
  description: string,
  tags: string[],
  type?: string
}

export const AppCard: React.FunctionComponent<AppCardProps> = ({ name, description, tags = []}: AppCardProps) => {
  return (
    <Card>
      <CardHead>
        <img src={ApicurioIcon}/>
        <CardActions/>
      </CardHead>
      <CardHeader className="app-card-view-card-header">
        {name}
      </CardHeader>
      <CardBody className="app-card-view-card-body">
        {description}
      </CardBody>
      <CardFooter>
        <div className="app-api-tag-group">
          {tags.map((tag, index) => 
            <AppTag key={index} text={tag}/>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
