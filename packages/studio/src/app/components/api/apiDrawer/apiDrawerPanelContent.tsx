import React from 'react';
import { Button, Card, CardActions, CardHead, CardBody, Title } from '@patternfly/react-core';
import {TimesIcon, EyeIcon} from '@patternfly/react-icons';
import ApicurioIcon from '../../../assets/apicurio-icon.png';
import ApiTabs from '../apiTabs';
import data from '../../../../api-data.json';

export interface ApiDrawerPanelContentProps {
  currentApiId: string
}

export class ApiDrawerPanelContent extends React.Component<ApiDrawerPanelContentProps> {
  constructor(props: ApiDrawerPanelContentProps) {
    super(props);
  }

  render() {
    function findId(array: any[], id: string) {
      const apiTemp = array.find(api => api.id === id);
      if (apiTemp !== undefined) {
        return apiTemp;
      }
      else {
        return Error;
      }
    }

    const apiObject = findId(data.apis, this.props.currentApiId);

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
        <ApiTabs createdBy={apiObject.createdBy} createdOn={apiObject.createdOn}/>
      </Card>
    )
  };
}

export default ApiDrawerPanelContent;