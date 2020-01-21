import React, { ReactNode } from 'react';
import { Button, DataListItem, DataListItemCells, DataListItemRow, DataListCell, DataListCheck, DataListAction, Dropdown, DropdownItem, DropdownPosition, KebabToggle} from '@patternfly/react-core';
import {AppDropdownKebab} from './appDropdownKebab';
import {AppTag} from './appTag';
import ApicurioIcon from './assets/apicurio-icon.png';
import './app.css'
//import {UserDropdown} from './components/userDropDown'

//let isDropdownOpen: boolean = false;

//const userDropdownItems: ReactNode[] = [];

export const AppDataListItem = ({
  apiName,
  apiDescription,
  apiTag1,
  apiTag2
}) => (
  <DataListItem>
    <DataListItemRow>
      <DataListCheck/>
      <DataListItemCells
        dataListCells={[
          <DataListCell isIcon>
            <img src={ApicurioIcon}/>
          </DataListCell>,
          <DataListCell>
            <div class="app-api-title">
              {apiName}
            </div>
            <div class="app-api-description">
              {apiDescription}
            </div>
            <div class="app-api-tag-group">
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
);