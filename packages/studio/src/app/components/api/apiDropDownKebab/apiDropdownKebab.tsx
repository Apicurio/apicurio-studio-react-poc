import React from 'react';
import{ Dropdown, DropdownItem, DropdownSeparator, DropdownPosition, KebabToggle } from '@patternfly/react-core';

interface ApiDropdownKebabState {
  readonly isOpen: boolean
}

export class ApiDropdownKebab extends React.Component<{}, ApiDropdownKebabState> {
  state = {
    isOpen: false
  };

  // TO DO: Add in the focus function
  // public onFocus = () => {
  //   const element = document.getElementById('toggle-id-1');
  //   element.focus();
  // };

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="dropdown-item-1">
        Preview docs
      </DropdownItem>,
      <DropdownItem key="dropdown-item-2">
        Collaborate
      </DropdownItem>,
      <DropdownItem key="dropdown-item-3">
        Make a copy
      </DropdownItem>,
      <DropdownItem key="dropdown-item-4">
        Publish
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="dropdown-item-5">
        Download (YAML)
      </DropdownItem>,
      <DropdownItem key="dropdown-item-6">
        Download (JSON)
      </DropdownItem>,
      <DropdownItem key="dropdown-item-7">
        Generate project
     </DropdownItem>
    ];
    return (
      <Dropdown
        // TO DO: onSelect={this.onSelect}
        position={DropdownPosition.right}
        toggle={<KebabToggle onToggle={this.onToggle} id="toggle-id-1" />}
        isOpen={isOpen}
        isPlain={true}
        dropdownItems={dropdownItems}
      />
    );
  }

  private onToggle = (isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };
  
  private onSelect = (event: React.MouseEvent) => {
      this.setState({
        isOpen: !this.state.isOpen
      });
      // TO DO: Add in the focus function
      // this.onFocus();
    };
};

export default ApiDropdownKebab;