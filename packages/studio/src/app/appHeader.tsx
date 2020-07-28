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
  PageHeader,
  PageHeaderTools
} from '@patternfly/react-core';
import { HistoryIcon, CogIcon } from '@patternfly/react-icons';
import brandImg from '../../assets/images/apicurio_logo_darkbkg_200px.png';
import imgAvatar from '../../assets/images/avatar_image.png';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { ApiUserDropdown } from './components/api/apiUserDropdown/apiUserDropDown';
import { GlobalContext, GlobalContextObj } from '../context';

export const AppHeader = () => {

  const globalContext: GlobalContextObj = useContext(GlobalContext);

  const setNotificationDrawerState = (notificationDrawerState: boolean) => {
    globalContext.setNotificationDrawerExpanded(!notificationDrawerState);
  }
  
    const [isKebabDropdownOpen, setKebabDropdown] = useState(false);
    const [isKebabDropdownMdOpen, setKebabDropdownMd] = useState(false);

    const onKebabDropdownToggle = (isKebabDropdownOpen: boolean) => {
      setKebabDropdown(isKebabDropdownOpen)
    }

    const onKebabDropdownSelect = (event: any) => {
      setKebabDropdown(!isKebabDropdownOpen)
    }

    const onKebabDropdownMdToggle = (isKebabDropdownMdOpen: boolean) => {
      setKebabDropdownMd(isKebabDropdownMdOpen)
    }

    const onKebabDropdownMdSelect = (event: any) => {
      setKebabDropdownMd(!isKebabDropdownMdOpen)
    }

    const kebabDropdownItems = [
      <DropdownItem component="button" onClick={() => setNotificationDrawerState(globalContext.store.notificationDrawerExpanded)}>
        Notifications
      </DropdownItem>,
      <DropdownItem component="button">
        Settings
      </DropdownItem>
    ];

    const kebabDropdownItemsMd = [
      <DropdownItem component="button" onClick={() => setNotificationDrawerState(globalContext.store.notificationDrawerExpanded)}>
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
      <React.Fragment>
        <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="" aria-label="" variant={ButtonVariant.plain} onClick={() => setNotificationDrawerState(globalContext.store.notificationDrawerExpanded)}>
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
            <ApiUserDropdown/>
          </ToolbarItem>
        </ToolbarGroup>
        </React.Fragment>
    );

    return (
      <PageHeader
        logo={<Brand src={ brandImg } alt="Apicurio" />}
        // avatar={ <Avatar src={imgAvatar} alt="user image"/>}
        headerTools={<PageHeaderTools>{PageToolbar}</PageHeaderTools>}
        />
    );
}

export default AppHeader;
