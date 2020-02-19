import React, { ReactNode } from 'react';
import {Button, ButtonVariant, Dropdown, DropdownToggle, Toolbar, ToolbarGroup, ToolbarItem} from '@patternfly/react-core';
import { DataToolbar , DataToolbarItem, DataToolbarContent } from '@patternfly/react-core/dist/esm/experimental';
import { CogIcon, HelpIcon, ThIcon, ListIcon} from '@patternfly/react-icons';
//TODO: Need to add accessibility to the toolbar (see: http://patternfly-react.surge.sh/patternfly-4/demos/pagelayout)
 
interface ApiToolbarProps {
  buttonClick: (ev: React.MouseEvent<HTMLButtonElement>) => void,
  buttonSelected: string
}

export class ApiToolbar extends React.Component<ApiToolbarProps> {
  constructor(props: ApiToolbarProps) {
    super(props);
  }

render(){
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
  export default ApiToolbar;