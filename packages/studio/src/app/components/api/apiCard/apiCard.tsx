import React from 'react';
import { Card, CardHead, CardHeader, CardBody, CardFooter, CardActions } from '@patternfly/react-core';
import {ApiTag} from '../apiTag';
import ApicurioIcon from '../../../assets/apicurio-icon.png';
import './apiCard.css'

interface ApiCardProps {
  id: string,
  name: string,
  description: string,
  tags: string[],
  type?: string
}

export const ApiCard: React.FunctionComponent<ApiCardProps> = ({ name, description, tags = []}: ApiCardProps) => {
  return (
    <Card>
      <CardHead>
        <img src={ApicurioIcon}/>
        <CardActions/>
      </CardHead>
      <CardHeader className="api-card-view-card-header">
        {name}
      </CardHeader>
      <CardBody className="api-card-view-card-body">
        {description}
      </CardBody>
      <CardFooter>
        <div className="app-api-tag-group">
          {tags.map((tag, index) => 
            <ApiTag key={index} text={tag}/>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
