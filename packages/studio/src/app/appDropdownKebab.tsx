import React, { ReactNode } from 'react';
import{ Dropdown, DropdownItem, DropdownSeparator, DropdownPosition, KebabToggle } from '@patternfly/react-core';
import './app.css'

type AppDropdownKebabProps = {
}

type AppDropdownKebabState = {
  isOpen: boolean
}


export class AppDropdownKebab extends React.Component<AppDropdownKebabProps, AppDropdownKebabState> {
  constructor(props: AppDropdownKebabProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onToggle = (isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };
  
  onSelect = (event: React.SyntheticEvent<HTMLDivElement, Event>) => {
      this.setState({
        isOpen: !this.state.isOpen
      });
      // this.onFocus();
    };

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
        //onSelect={this.onSelect}
        position={DropdownPosition.right}
        toggle={<KebabToggle onToggle={this.onToggle} id="toggle-id-1" />}
        isOpen={isOpen}
        isPlain
        dropdownItems={dropdownItems}
      />
    );
  }
};

export default AppDropdownKebab;