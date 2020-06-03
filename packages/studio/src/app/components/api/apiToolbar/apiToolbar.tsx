import React, { useContext, useState } from "react";
import {
  DataToolbar,
  DataToolbarItem,
  DataToolbarContent
} from "@patternfly/react-core/dist/esm/experimental";
import {
  Button,
  Dropdown,
  DropdownPosition,
  DropdownToggle,
  DropdownItem,
  DropdownToggleCheckbox,
  InputGroup,
  TextInput,
  ButtonVariant,
  DataToolbarGroup
} from "@patternfly/react-core";
import {
  ThIcon,
  ListIcon,
  FilterIcon,
  SearchIcon,
  SortAlphaDownIcon,
  SortAlphaUpIcon
} from "@patternfly/react-icons";
import { Api } from "@apicurio/models";
import {
  GlobalContext,
  GlobalContextObj,
  DashboardViews,
  ToolbarStatus
} from "../../../../context";

export const ApiToolbar = () => {
  const globalContext: GlobalContextObj = useContext(GlobalContext);

  const apiCount = globalContext.store.apis.length;
  const [splitButtonDropdownIsOpen, setSplitButtonDropdownIsOpen] = useState(
    false
  );
  const [isLowerToolbarDropdownOpen, setIsLowerToolbarDropdownOpen] = useState(
    false
  );
  const [sortIconChanged, setSortIconChanged] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("Name");

  const compare = (direction: string) => {
    if (direction === "asc") {
      return (a: Api, b: Api) => (a.name > b.name ? 1 : -1);
    } else if (direction === "desc") {
      return (a: Api, b: Api) => (b.name > a.name ? 1 : -1);
    }
    return (a: Api, b: Api) => 0;
  };

  const sortAlphaDown = () => {
    globalContext.updateApis(globalContext.store.apis.sort(compare("desc")));
    setSortIconChanged(true);
  };

  const sortAlphaUp = () => {
    globalContext.updateApis(globalContext.store.apis.sort(compare("asc")));
    setSortIconChanged(false);
  };

  const onNameSelect = (event: any) => {
    setCurrentCategory(event.target.innerText);
    setIsLowerToolbarDropdownOpen(!isLowerToolbarDropdownOpen);
  };

  const onToolbarDropdownToggle = (event: any) => {
    setIsLowerToolbarDropdownOpen(!isLowerToolbarDropdownOpen);
  };

  const selectAll = () => {
    let collection: number[] = [];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < globalContext.store.apis.length; i++) {
      // tslint:disable-next-line: radix
      collection = [...collection, parseInt(globalContext.store.apis[i].id)];
    }

    globalContext.updateToolbarStatus({
      areAllSelected: true,
      isChecked: true,
      selectedItems: collection
    });
  };

  const splitCheckboxSelectAll = (e: any) => {
    const { checked } = e.target;
    let collection: number[] = [];

    if (checked) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < globalContext.store.apis.length; i++) {
        // tslint:disable-next-line: radix
        collection = [...collection, parseInt(globalContext.store.apis[i].id)];
      }
    }

    globalContext.updateToolbarStatus({
      areAllSelected: checked,
      isChecked: checked,
      selectedItems: collection
    });
  };

  const selectNone = (e: any) => {
    globalContext.updateToolbarStatus({
      areAllSelected: false,
      isChecked: false,
      selectedItems: []
    });
  };

  const onSplitButtonToggle = (isOpen: boolean) => {
    setSplitButtonDropdownIsOpen(isOpen);
  };

  const onSplitButtonSelect = (event: any) => {
    setSplitButtonDropdownIsOpen(!splitButtonDropdownIsOpen);
  };

  const buildFilterDropdown = () => (
    <DataToolbarItem>
      <Dropdown
        onSelect={onNameSelect}
        position={DropdownPosition.left}
        toggle={
          <DropdownToggle
            onToggle={onToolbarDropdownToggle}
            style={{ width: "100%" }}
          >
            <FilterIcon /> {currentCategory}
          </DropdownToggle>
        }
        isOpen={isLowerToolbarDropdownOpen}
        dropdownItems={[
          <DropdownItem key="category-1">Name</DropdownItem>,
          <DropdownItem key="category-2">Tag</DropdownItem>
        ]}
        style={{ width: "100%" }}
      />
    </DataToolbarItem>
  );

  const buildSelectDropdown = () => {
    const numSelected = globalContext.store.toolbarStatus.selectedItems.length;
    const allSelected = globalContext.store.toolbarStatus.areAllSelected;
    const anySelected = numSelected > 0;

    return (
      <Dropdown
        position={DropdownPosition.left}
        onSelect={onSplitButtonSelect}
        toggle={
          <DropdownToggle
            splitButtonItems={[
              <DropdownToggleCheckbox
                id="dropdown-checkbox"
                key="split-checkbox"
                aria-label={anySelected ? "Deselect all" : "Select all"}
                isChecked={allSelected}
                onClick={splitCheckboxSelectAll}
              />
            ]}
            onToggle={onSplitButtonToggle}
          >
            {numSelected !== 0 && (
              <React.Fragment>{numSelected} selected</React.Fragment>
            )}
          </DropdownToggle>
        }
        isOpen={splitButtonDropdownIsOpen}
        dropdownItems={[
          <DropdownItem key="item-1" onClick={selectNone}>
            Select none (0 items)
          </DropdownItem>,
          <DropdownItem key="item-2" onClick={selectAll}>
            Select all ({globalContext.store.apis.length} items)
          </DropdownItem>
        ]}
      />
    );
  };

  return (
    <DataToolbar id="apiToolbar">
      <DataToolbarContent>
        <DataToolbarItem>{buildSelectDropdown()}</DataToolbarItem>
        <DataToolbarGroup variant="filter-group">
          {buildFilterDropdown()}
          <InputGroup>
            <TextInput
              name="textInput1"
              id="textInput1"
              type="search"
              aria-label="search input"
            />
            <Button
              variant={ButtonVariant.control}
              aria-label="search"
            >
              <SearchIcon />
            </Button>
          </InputGroup>
        </DataToolbarGroup>
        <DataToolbarItem>
          <Button
            variant="plain"
            onClick={sortIconChanged ? sortAlphaUp : sortAlphaDown}
          >
            {sortIconChanged ? <SortAlphaDownIcon /> : <SortAlphaUpIcon />}
          </Button>
        </DataToolbarItem>
        <DataToolbarItem variant="pagination">
          <Button
            aria-label="toggle card view"
            onClick={() => globalContext.setDashboardView(DashboardViews.card)}
            className={
              "app-data-toolbar-button-control " +
              (globalContext.store.dashboardView === DashboardViews.card
                ? "pf-m-selected"
                : "")
            }
            variant="plain"
          >
            <ThIcon />
          </Button>
          <Button
            aria-label="toggle dashboard view"
            onClick={() => globalContext.setDashboardView(DashboardViews.list)}
            className={
              "app-data-toolbar-button-control " +
              (globalContext.store.dashboardView === DashboardViews.list
                ? "pf-m-selected"
                : "")
            }
            variant="plain"
          >
            <ListIcon />
          </Button>
          <span className="app-toolbar-api-total">
            {apiCount} APIs found
          </span>
        </DataToolbarItem>
      </DataToolbarContent>
    </DataToolbar>
  );
};

export default ApiToolbar;
