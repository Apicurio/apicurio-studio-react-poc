import React, { ReactNode } from 'react';
import {Button, ButtonVariant, Dropdown, DropdownToggle, Toolbar, ToolbarGroup, ToolbarItem} from '@patternfly/react-core';
import {UserDropdown} from './components/userDropDown'
import { CogIcon, HelpIcon} from '@patternfly/react-icons';
import HelpDropdown from './components/helpDropDown/helpDropDown';
//TODO: Need to add accessibility to the toolbar (see: http://patternfly-react.surge.sh/patternfly-4/demos/pagelayout)
 
export const AppToolbar = (
    <Toolbar>
        <ToolbarGroup>
            <ToolbarItem>
              <HelpDropdown />
            </ToolbarItem>
            <ToolbarItem> 
            <Button id="simple-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
                <CogIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
        <ToolbarItem>
          <UserDropdown/>
        </ToolbarItem>
      </ToolbarGroup>
    </Toolbar>
  );
  export default AppToolbar;