import React, { ReactNode } from 'react';
import { Card, CardHead, CardHeader, CardBody, CardFooter, CardActions } from '@patternfly/react-core';
import {AppTag} from './appTag';
import ApicurioIcon from './assets/apicurio-icon.png';
import './app.css'
//let isDropdownOpen: boolean = false;
//const userDropdownItems: ReactNode[] = [];

class AppCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false
    };
  }
  render() {
    const { apiName, apiDescription, apiTag1, apiTag2 } = this.props;
    return (
      <Card>
        <CardHead>
          <img src={ApicurioIcon}/>
          <CardActions>
          </CardActions>
        </CardHead>
        <CardHeader className="app-card-view-card-header">
          {apiName}
        </CardHeader>
        <CardBody className="app-card-view-card-body">
          {apiDescription}
        </CardBody>
        <CardFooter>
          <div class="app-api-tag-group">
            <AppTag
              text={apiTag1}
            />
            <AppTag
              text={apiTag2}
            />
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export default AppCard;