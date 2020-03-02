import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownSeparator,
  AboutModal,
  Text,
  TextContent,
  TextList,
  TextListItem,
  Button,
  TextVariants
} from "@patternfly/react-core";
import brandImg from "../../assets/apicurio_gray.png";

export class UserDropdown extends React.Component<
  {},
  { isAboutClicked: boolean; isModalOpen: boolean; isOpen: boolean }
> {

  constructor(props: any) {
    super(props);
    this.state = {
      isAboutClicked: false,
      isModalOpen: false,
      isOpen: false
    };
  }

  onToggle = (isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  onSelect = (event: React.SyntheticEvent<HTMLDivElement, Event> | undefined) => {
    this.setState({
      isModalOpen: true,
      isOpen: !this.state.isOpen
    });
    this.onFocus();
  };

  handleModalToggle = () => {
    this.setState(prevState => ({
      isAboutClicked: !prevState.isAboutClicked
    }));
  };

  onFocus = () => {
    const element = document.getElementById("toggle-id-7");
    element.focus();
  };

  buildAboutModal = () => (
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
            <Button component="a" variant="link" href="http://apicur.io/" isInline={true}>
              http://apicur.io/
            </Button>
          </TextListItem>
          <TextListItem component="dt">Project Roadmap</TextListItem>
          <TextListItem component="dd">
            <Button component="a" variant="link" href="http://apicur.io/roadmap" isInline={true}>
              http://apicur.io/roadmap
            </Button>
          </TextListItem>
        </TextList>
      </TextContent>
      <TextContent>
        <Text component={TextVariants.p} style={{ marginTop: 150 }}>
          Questions or Ideas?
          <Button
            component="a"
            variant="link"
            href="https://www.apicur.io/contact/"
          >
            Contact our Development Team
          </Button>
        </Text>
      </TextContent>
    </AboutModal>
  );

  render() {
    const { isOpen, isAboutClicked } = this.state;

    const dropdownItems = [
      <DropdownItem
        key="about"
        component="button"
        onClick={this.handleModalToggle}
      >
        About
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="action">Logout</DropdownItem>
    ];

    return (
      <React.Fragment>
        <Dropdown
          onSelect={this.onSelect}
          isPlain={true}
          position="right"
          toggle={
            <DropdownToggle
              onToggle={this.onToggle}
              aria-label="Applications"
              id="toggle-id-7"
            >
              User
            </DropdownToggle>
          }
          isOpen={isOpen}
          dropdownItems={dropdownItems}
        />
        {isAboutClicked ? this.buildAboutModal() : ""}
      </React.Fragment>
    );
  }
}
