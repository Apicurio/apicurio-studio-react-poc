import React, { ReactNode } from 'react';
import { Button, DataListItem, DataListItemCells, DataListItemRow, DataListCell, DataListCheck, DataListAction } from '@patternfly/react-core';
import {AppDropdownKebab} from './appDropdownKebab';
import {AppTag} from './appTag';
import ApicurioIcon from './assets/apicurio-icon.png';
import './app.css'
//import {UserDropdown} from './components/userDropDown'
//let isDropdownOpen: boolean = false;
//const userDropdownItems: ReactNode[] = [];

class AppDataListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { apiName, apiDescription, apiTag1, apiTag2, id } = this.props;
    return (
      <DataListItem id={id}>
        <DataListItemRow>
          <DataListCheck/>
          <DataListItemCells
            dataListCells={[
              <DataListCell isIcon>
                <img src={ApicurioIcon}/>
              </DataListCell>,
              <DataListCell>
                <div className="app-api-title">
                  {apiName}
                </div>
                <div className="app-api-description">
                  {apiDescription}
                </div>
                <div className="app-api-tag-group">
                <AppTag
                  text={apiTag1}
                />
                <AppTag
                  text={apiTag2}
                />
                </div>
              </DataListCell>
            ]}
            />
          <DataListAction>
              <Button variant="link">View Details</Button>
              <Button variant="secondary">Edit API</Button>
              <AppDropdownKebab />
          </DataListAction>
        </DataListItemRow>
      </DataListItem>
    )
  }
};

export default AppDataListItem;