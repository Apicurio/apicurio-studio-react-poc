import React from 'react';
import { AboutModal, Button, TextContent, TextList, TextListItem, DropdownItem, Dropdown } from '@patternfly/react-core';
import brandImg from './../../../../assets/images/apicurio_gray.png';

interface IModalState {
  isModalOpen: boolean;
}

class SimpleAboutModal extends React.Component<{}, IModalState> {
  public handleModalToggle: () => void;
    
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };

    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };
  }

  public render() {
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <Button onClick={this.handleModalToggle}>
          About
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
              <TextListItem component="dt">Version</TextListItem>
              <TextListItem component="dd">0.2.30.Final</TextListItem>
              <TextListItem component="dt">Built On</TextListItem>
              <TextListItem component="dd">July 16, 2019</TextListItem>
              <TextListItem component="dt">Edition</TextListItem>
              <TextListItem component="dd">CLIv7</TextListItem>
              <TextListItem component="dt">Project URL</TextListItem>
              <TextListItem component="dd" href={'http://apicur.io/'}>link</TextListItem>
              <TextListItem component="dt">Project Roadmap</TextListItem>
              <TextListItem component="dd" onClick={event => window.location.href="http://apicur.io/roadmap"} >asdas</TextListItem>
            </TextList>
          </TextContent>
        </AboutModal>
      </React.Fragment>
    );
  }
}

export default SimpleAboutModal;
