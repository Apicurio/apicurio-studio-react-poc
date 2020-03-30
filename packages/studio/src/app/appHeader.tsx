import React, { useState, useContext } from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Dropdown,
  DropdownItem,
  Toolbar,
  KebabToggle,
  ToolbarItem,
  ToolbarGroup,
  PageHeader
} from '@patternfly/react-core';
import { HistoryIcon, CogIcon } from '@patternfly/react-icons';
import brandImg from '../../assets/images/apicurio_logo_darkbkg_200px.png';
import imgAvatar from '../../assets/images/avatar_image.png';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { UserDropdown } from '../../src/app/components/userDropDown';
import { AppNotificationDrawer } from './components/appNotificationDrawer/appNotificationDrawer';
import { useStoreContext } from './../../../studio/src/context/reducers';
import { StoreContext } from './../../../studio/src/context/StoreContext';

export const AppHeader = () => {

  const [state, setState] = useContext(StoreContext);
  const { notificationDrawerExpanded } = useStoreContext();

  const setNotificationDrawerState = (notificationDrawerState: boolean) => {
    setState({...state, notificationDrawerExpanded: !notificationDrawerState});
  }

  
    const [isKebabDropdownOpen, setKebabDropdown] = useState(false);
    const [isKebabDropdownMdOpen, setKebabDropdownMd] = useState(false);

    const onKebabDropdownToggle = isKebabDropdownOpen => {
      setKebabDropdown(isKebabDropdownOpen)
    }

    const onKebabDropdownSelect = event => {
      setKebabDropdown(!isKebabDropdownOpen)
    }

    const onKebabDropdownMdToggle = isKebabDropdownMdOpen => {
      setKebabDropdownMd(isKebabDropdownMdOpen)
    }

    const onKebabDropdownMdSelect = event => {
      setKebabDropdownMd(!isKebabDropdownMdOpen)
    }

    const kebabDropdownItems = [
      <DropdownItem component="button" onClick={() => setNotificationDrawerState(notificationDrawerExpanded)}>
        Notifications
      </DropdownItem>,
      <DropdownItem component="button">
        Settings
      </DropdownItem>
    ];

    const kebabDropdownItemsMd = [
      <DropdownItem component="button" onClick={() => setNotificationDrawerState(notificationDrawerExpanded)}>
        Notifications
      </DropdownItem>,
      <DropdownItem component="button">
        Settings
      </DropdownItem>,
      <DropdownItem component="button">
        About
      </DropdownItem>,
      <DropdownItem component="button">
        Logout
      </DropdownItem>
    ];

    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="" aria-label="" variant={ButtonVariant.plain} onClick={() => setNotificationDrawerState(notificationDrawerExpanded)}>
              <HistoryIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="" aria-label="" variant={ButtonVariant.plain}>
              <CogIcon/>
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
        <ToolbarItem className={css(accessibleStyles.hiddenOnMd, spacingStyles.mr_0)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={onKebabDropdownMdSelect}
              toggle={<KebabToggle onToggle={onKebabDropdownMdToggle} />}
              isOpen={isKebabDropdownMdOpen}
              dropdownItems={kebabDropdownItemsMd}
            />
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd, accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
            <UserDropdown/>
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );

    return (
      <PageHeader
        logo={<Brand src={ brandImg } alt="Apicurio" />}
        avatar={ <Avatar src={imgAvatar} alt="user image"/>}
        toolbar={PageToolbar}
      />
    );
}

export default AppHeader;
