import React, { ReactNode } from 'react';
import { Button, DataListItem, DataListItemCells, DataListItemRow, DataListCell, DataListCheck, DataListAction, Dropdown, DropdownItem, DropdownPosition, KebabToggle} from '@patternfly/react-core';
import {AppDropdownKebab} from './appDropdownKebab';
import ApicurioIcon from './assets/apicurio-icon.png';
import './app.css'
//import {UserDropdown} from './components/userDropDown'

//let isDropdownOpen: boolean = false;

//const userDropdownItems: ReactNode[] = [];

export const AppDataListItem = ({
  apiName,
  apiDescription
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
            <div>
              {apiName}
            </div>
            <div>
              {apiDescription}
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