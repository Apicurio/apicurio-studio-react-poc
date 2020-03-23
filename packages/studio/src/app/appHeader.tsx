import React, {useState} from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Dropdown,
  Toolbar,
  KebabToggle,
  ToolbarItem,
  ToolbarGroup,
  PageHeader
} from '@patternfly/react-core';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import brandImg from '../../assets/images/apicurio_logo_darkbkg_200px.png';
import imgAvatar from '../../assets/images/avatar_image.svg';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';

export const AppHeader = () => {
    const [isKebabDropdownOpen, setKebabDropdown] = useState(false);

    const onKebabDropdownToggle = () => {
      setKebabDropdown(true);
    }

    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="" aria-label="" variant={ButtonVariant.plain}>
              <BellIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="" aria-label="" variant={ButtonVariant.plain}>
              <CogIcon/>
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>Username</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );

    return (<PageHeader
        logo={<Brand src={ brandImg } alt="Apicurio" />}
        avatar={ <Avatar src={imgAvatar} alt="user image"/>}
        toolbar={PageToolbar}
      />);
}

export default AppHeader;
