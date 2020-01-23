import React, { ReactNode } from 'react';
//import {UserDropdown} from './components/userDropDown'
import { DataToolbar , DataToolbarItem, DataToolbarContent } from '@patternfly/react-core/dist/esm/experimental';
import { Button, ButtonVariant, InputGroup, TextInput } from '@patternfly/react-core';
import {ThIcon, ListIcon} from '@patternfly/react-icons';
import './app.css'

type AppToolbarProps = {
}


export class AppToolbar extends React.Component<AppToolbarProps> {
  constructor(props: AppToolbarProps) {
    super(props);
  }
  
  render() {
    return (
      <DataToolbar>
        <DataToolbarItem>
          This is where the Data Toolbar should go
        </DataToolbarItem>
        <DataToolbarItem>
          <Button className="app-data-toolbar-button-control" variant="plain">
            <ThIcon/>
          </Button>
          <Button className="app-data-toolbar-button-control pf-m-selected" variant="plain">
            <ListIcon/>
          </Button>
        </DataToolbarItem>
      </DataToolbar>
    )

  }
}

export default AppToolbar;
