import React from "react";
import { Dropdown, DropdownItem, DropdownToggle, DropdownSeparator, AboutModal, Text, TextContent, TextList, TextListItem, Button, TextVariants } from "@patternfly/react-core";
import { HelpIcon } from '@patternfly/react-icons';
import brandImg from './../../../../assets/images/apicurio_gray.png';

const gsUrl =
      'https://access.redhat.com/products/red-hat-integration/';
const csUrl = 'https://access.redhat.com/support';

class HelpDropdown extends React.Component<{}, {isModalOpen: boolean; isOpen: boolean}> {

  public onToggle: (isOpen: any) => void;
  public onSelect: (event: any) => void;
  public handleModalToggle: () => void;
  public aboutModal: () => JSX.Element;

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isOpen: false
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = event => {
      this.setState({
        isModalOpen: true,
        isOpen: !this.state.isOpen
      });
    };

    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };

    this.aboutModal = () => (
      <AboutModal
        isOpen={this.state.isModalOpen}
        onClose={this.handleModalToggle}
        trademark="Trademark and copyright information here"
        brandImageAlt="Apicurio Logo"
        brandImageSrc={brandImg}
        productName="Apicurio Studio"
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
              <TextListItem component="dd">
                <Button variant="link" isInline={true}>http://apicur.io/</Button>
              </TextListItem>
              <TextListItem component="dt">Project Roadmap</TextListItem>
              <TextListItem component="dd">
                <Button variant="link" isInline={true}>http://apicur.io/roadmap</Button>
              </TextListItem>
          </TextList>
        </TextContent>
        <TextContent>
          <Text component={TextVariants.p} style={{marginTop: 150}}>
            Questions or Ideas? 
            <Button component="a" variant="link" href="https://github.com/Apicurio/apicurio-studio-react-poc">Contact our Development Team</Button> 
            </Text>
        </TextContent>
      </AboutModal>
    );
  }

  public render() {

    const { isOpen } = this.state;

    const dropdownItems = [
      <DropdownItem key="separated link 1" href={gsUrl}>Getting Started</DropdownItem>,
      <DropdownItem key="separated link 2" href={csUrl}>Customer Support</DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="about" component="button">
       About
      </DropdownItem>    
    ];
    
    return (
      <React.Fragment>
        <Dropdown
          onSelect={this.onSelect}
          toggle={
            <DropdownToggle
              iconComponent={null}
              onToggle={this.onToggle}
              aria-label="Applications"
              id="toggle-id-7"
            >
              <HelpIcon />
            </DropdownToggle>
          }
          isOpen={isOpen}
          isPlain={true}
          dropdownItems={dropdownItems}
        />
        {this.aboutModal()}
      </React.Fragment>
    );
  }
}

export default HelpDropdown;