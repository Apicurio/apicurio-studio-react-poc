import React, { ReactNode } from "react";
import { Dropdown, DropdownItem, DropdownToggle } from "@patternfly/react-core";

let isDropdownOpen: boolean = false;

const userDropdownItems: ReactNode[] = [];

export class UserDropdown extends React.Component {
  public constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  
  private onSelect = (isOpen: boolean) => {};

  public render() {
    return (
      <Dropdown
        isPlain={true}
        position="right"
        onSelect={() => {}}
        isOpen={isDropdownOpen}
        toggle={<DropdownToggle onToggle={() => {}}>User</DropdownToggle>}
        dropdownItems={userDropdownItems}
      />
    );
  }
}

export default UserDropdown;
