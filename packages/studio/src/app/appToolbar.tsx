import React, { ReactNode } from 'react';
//import {UserDropdown} from './components/userDropDown'
import { DataToolbar , DataToolbarItem, DataToolbarContent } from '@patternfly/react-core/dist/esm/experimental';
import { Button, ButtonVariant, InputGroup, TextInput } from '@patternfly/react-core';
import {ThIcon, ListIcon} from '@patternfly/react-icons';
import './app.css'

type AppToolbarProps = {
  buttonClick: (ev: React.MouseEvent<HTMLButtonElement>) => void,
  buttonSelected: string
}


export class AppToolbar extends React.Component<AppToolbarProps> {
  constructor(props: AppToolbarProps) {
    super(props);
  }
  
  render() {
    return (
      <DataToolbar>
        <DataToolbarContent>
          <DataToolbarItem>
            This is where the Data Toolbar should go
          </DataToolbarItem>
          <DataToolbarItem variant="pagination">
            <Button onClick={this.props.buttonClick} className={'app-data-toolbar-button-control ' + (this.props.buttonSelected === "card" ? "pf-m-selected" : "")} variant="plain">
              <ThIcon/>
            </Button>
            <Button onClick={this.props.buttonClick} className={'app-data-toolbar-button-control ' + (this.props.buttonSelected === "list" ? "pf-m-selected" : "")} variant="plain">
              <ListIcon/>
            </Button>
            <span className="app-toolbar-api-total">
              4 APIs found
            </span>
          </DataToolbarItem>
        </DataToolbarContent>
      </DataToolbar>
    )
  }
}

export default AppToolbar;
