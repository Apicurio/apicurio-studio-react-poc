import React from 'react';
import { AboutModal, Button, TextContent, TextList, TextListItem, DropdownItem, Dropdown } from '@patternfly/react-core';
import brandImg from './apicurioBrand.png';

class SimpleAboutModal extends React.Component {

    public state: {
        isModalOpen: boolean;
      };
    
  constructor(props: any) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  public render() {
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <Button onClick={this.handleModalToggle}>
          <DropdownItem>
          About
          </DropdownItem>
        </Button>
        <AboutModal
          isOpen={this.state.isModalOpen}
          onClose={this.handleModalToggle}
          trademark="Trademark and copyright information here"
          brandImageSrc={brandImg}
          brandImageAlt="Apicurio Logo"
          productName="Product Name"
        >
          <TextContent>
            <TextList component="dl">
              <TextListItem component="dt">CFME Version</TextListItem>
              <TextListItem component="dd">5.5.3.4.20102789036450</TextListItem>
              <TextListItem component="dt">Cloudforms Version</TextListItem>
              <TextListItem component="dd">4.1</TextListItem>
              <TextListItem component="dt">Server Name</TextListItem>
              <TextListItem component="dd">40DemoMaster</TextListItem>
              <TextListItem component="dt">User Name</TextListItem>
              <TextListItem component="dd">Administrator</TextListItem>
              <TextListItem component="dt">User Role</TextListItem>
              <TextListItem component="dd">EvmRole-super_administrator</TextListItem>
              <TextListItem component="dt">Browser Version</TextListItem>
              <TextListItem component="dd">601.2</TextListItem>
              <TextListItem component="dt">Browser OS</TextListItem>
              <TextListItem component="dd">Mac</TextListItem>
            </TextList>
          </TextContent>
        </AboutModal>
      </React.Fragment>
    );
  }
  public handleModalToggle = () => {
    this.setState((isModalOpen: boolean) => ({
      isModalOpen: !this.state.isModalOpen
    }));
  };
}

export default SimpleAboutModal;
