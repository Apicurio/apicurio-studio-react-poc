import React from 'react';
import { UserIcon, UsersIcon, OutlinedClockIcon } from '@patternfly/react-icons';
import './apiDetailsView.css';
import moment from "moment";

export interface ApiDetailsViewProps {
  currentApi: any
}

export const ApiDetailsView: React.FunctionComponent<ApiDetailsViewProps> = (props) => {
  const createdOn = props.currentApi.createdOn;
  const createdBy = props.currentApi.createdBy;

    return (
      <React.Fragment>
      <div className="api-details-content">
          <h3>Details</h3>
          <p><OutlinedClockIcon /><span>Created on {moment(createdOn).format('MMM DD, YYYY -- hh:mm A')}</span></p>
          <p><UserIcon /><span>Created by {createdBy}</span></p>
          <p><UsersIcon /><span>? Other collaborators</span></p>
          <br />
          <h3>Collaborators</h3>
      </div>
      </React.Fragment>
      );
  }

export default ApiDetailsView;