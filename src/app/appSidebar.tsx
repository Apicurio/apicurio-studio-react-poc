import React from "react";
import {
  Nav,
  NavExpandable,
  NavItem,
  NavList,
  NavProps,
  PageSidebar
} from "@patternfly/react-core";

interface AppSidebarProps extends NavProps {
  activeMenuGroup: string;
  activeMenuGroupItem: string;
}

export const AppSidebar: React.FunctionComponent<AppSidebarProps> = ({
  onSelect,
  activeMenuGroup,
  activeMenuGroupItem,
  ...props
}: AppSidebarProps) => {
  const sideBarNavigation = (<Nav onSelect={onSelect} aria-label="Nav">
  <NavList>
    <NavItem
    groupId="grp-1"
    itemId="grp-1_itm-1"
    isActive={activeMenuGroupItem === "grp-1_itm-1"}
    >
    Dashboard
    </NavItem>
    <NavExpandable
      title="APIs"
      groupId="grp-2"
      isActive={activeMenuGroup === "grp-2"}
    >
      <NavItem
        groupId="grp-2"
        itemId="grp-2_itm-1"
        isActive={activeMenuGroupItem === "grp-2_itm-1"}
      >
        View All APIs
      </NavItem>
      <NavItem
        groupId="grp-2"
        itemId="grp-2_itm-2"
        isActive={activeMenuGroupItem === "grp-2_itm-2"}
      >
        Create New API
      </NavItem>
      <NavItem
        groupId="grp-3"
        itemId="grp-2_itm-3"
        isActive={activeMenuGroupItem === "grp-2_itm-3"}
      >
        Import API
      </NavItem>
    </NavExpandable>
    <NavExpandable
      title="Settings"
      groupId="grp-3"
      isActive={activeMenuGroup === "grp-3"}
    >
      <NavItem
        groupId="grp-3"
        itemId="grp-3_itm-1"
        isActive={activeMenuGroupItem === "grp-3_itm-1"}
      >
        User Profile
      </NavItem>
      <NavItem
        groupId="grp-3"
        itemId="grp-3_itm-2"
        isActive={activeMenuGroupItem === "grp-3_itm-2"}
      >
        Linked Accounts
      </NavItem>
      <NavItem
        groupId="grp-3"
        itemId="grp-3_itm-3"
        isActive={activeMenuGroupItem === "grp-3_itm-3"}
      >
        Validation
      </NavItem>
    </NavExpandable>
  </NavList>
</Nav>)
  return (
    <PageSidebar nav={sideBarNavigation} />
  );
};

export default AppSidebar;
