import React, { useContext } from 'react';
import { Button, Card, CardActions, CardHead, CardBody, Title } from '@patternfly/react-core';
import {TimesIcon, EyeIcon} from '@patternfly/react-icons';
import ApicurioIcon from '../../../assets/apicurio-icon.png';
import { ApiTabs } from '../apiTabs';
import { GlobalContext } from '../../../../context';
import './apiDrawer.css';

export interface ApiDrawerPanelContentProps {
  currentApiId: string,
  apiDrawerExpanded: boolean
}

function findId(array: any[], id: string) {
  const apiTemp = array.find(api => api.id === id);
  if (apiTemp !== undefined) {
    return apiTemp;
  }
  else {
    return Error;
  }
}

export const ApiDrawerPanelContent: React.FunctionComponent<ApiDrawerPanelContentProps> = (props) => {
  const { apis } = {... useContext(GlobalContext).store};
  const apiObject = findId(apis, props.currentApiId);
  console.log(`apiDrawerPanelContent props is: ${JSON.stringify(props)}`);

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
            <Button variant="tertiary">
              <EyeIcon className='api-drawer-panel-button'/>
              Preview documentation
            </Button>
            <Button variant="secondary">
              Edit API
            </Button>
          </div>
        </CardBody>
        <ApiTabs currentApiObject={apiObject}/>
      </Card>
    )
  }

export default ApiDrawerPanelContent;
