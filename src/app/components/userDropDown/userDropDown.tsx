import React, { ReactNode } from "react";
import { Dropdown, DropdownItem, DropdownToggle } from "@patternfly/react-core";

let isDropdownOpen: boolean = false;

const userDropdownItems: ReactNode[] = [];

export class UserDropdown extends React.Component {
  public state: {
    isOpen: boolean;
  };

  public constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  private onToggle = (isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  private onSelect = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  public render() {
    return (
      <Dropdown
        isPlain={true}
        position="right"
        onSelect={() => {}}
        isOpen={this.state.isOpen}
        toggle={<DropdownToggle onToggle={() => {}}>User</DropdownToggle>}
        dropdownItems={userDropdownItems}
      />
    );
  }
}

export default UserDropdown;
