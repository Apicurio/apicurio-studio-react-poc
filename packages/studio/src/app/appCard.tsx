import React, { ReactNode } from 'react';
import { Card, CardHead, CardHeader, CardBody, CardFooter, CardActions } from '@patternfly/react-core';
import {AppTag} from './appTag';
import ApicurioIcon from './assets/apicurio-icon.png';
import './app.css'

type AppCardProps = {
  apiName: string,
  apiDescription: string,
  apiTag1: string,
  apiTag2: string
}

class AppCard extends React.Component<AppCardProps> {
  constructor(props: AppCardProps) {
    super(props);
    this.state = {
      check: false
    };
  }
  render() {
    return (
      <Card>
        <CardHead>
          <img src={ApicurioIcon}/>
          <CardActions>
          </CardActions>
        </CardHead>
        <CardHeader className="app-card-view-card-header">
          {this.props.apiName}
        </CardHeader>
        <CardBody className="app-card-view-card-body">
          {this.props.apiDescription}
        </CardBody>
        <CardFooter>
          <div className="app-api-tag-group">
            <AppTag
              text={this.props.apiTag1}
            />
            <AppTag
              text={this.props.apiTag2}
            />
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export default AppCard;