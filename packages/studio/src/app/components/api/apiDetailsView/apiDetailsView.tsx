import React, { useContext } from 'react';
import { UserIcon, UsersIcon, OutlinedClockIcon } from '@patternfly/react-icons';
import './apiDetailsView.css';
import moment from "moment";

export interface ApiDetailsViewProps {
  createdBy: string,
  createdOn: Date,
}
interface ApiDetailsViewState {
  activeTabKey: number
}
export class ApiDetailsView extends React.Component<ApiDetailsViewProps, ApiDetailsViewState> {
  constructor(props: ApiDetailsViewProps) {
    super(props);
    this.state = {
      activeTabKey: 0
    };
  }
  render() {
    const { createdOn, createdBy} = this.props;
    return (
      <React.Fragment>
      <div className="api-details-content">
          <h3>Details</h3>
          <p><OutlinedClockIcon /><span>Created on {moment(createdOn).format('MMM DD, YYYY')}</span></p>
          <p><UserIcon /><span>Created by {createdBy}</span></p>
          <p><UsersIcon /><span>Other collaborators {}</span></p>
          <br />
          <h3>Collaborators</h3>
      </div>
      </React.Fragment>
      );
  }
}

export default ApiDetailsView;