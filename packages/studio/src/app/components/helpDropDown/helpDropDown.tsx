import React from "react";
import SimpleAboutModal from '../aboutModal/aboutModal'
import { Dropdown, DropdownItem, DropdownToggle, DropdownSeparator, AboutModal } from "@patternfly/react-core";
import { HelpIcon, ThIcon } from '@patternfly/react-icons';

const gsUrl =
      'https://access.redhat.com/products/red-hat-integration/';
const csUrl = 'https://access.redhat.com/support';

const helpDropdownItems: React.ReactNode[] = [
  <DropdownItem key="separated link 1" href={gsUrl}>Getting Started</DropdownItem>,
  <DropdownItem key="separated link 2" href={csUrl}>Customer Support</DropdownItem>,
  <DropdownSeparator key="separator" />,
  // <DropdownItem key="separated action">
  //   About
  // </DropdownItem>,
  <SimpleAboutModal key="modal" />

  
];
 
export class HelpDropdown extends React.Component {
  public state: {
    isOpen: boolean;
  };

  public constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  public render() {
    return (
      <Dropdown
        isPlain={true}
        position="right"
        onSelect={this.onSelect}
        isOpen={this.state.isOpen}
        toggle={<DropdownToggle iconComponent={null} onToggle={this.onToggle} id="toggle-id">
            <HelpIcon/> 
           </DropdownToggle>}
        dropdownItems={helpDropdownItems}
      />
    );
  }

  private onToggle = (isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };


  private onSelect = (event: any) => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.onFocus();
  };
 
  private onFocus = () => {
      const element = document.getElementById('toggle-id');
      element.focus();    
    }
  }


export default HelpDropdown;
