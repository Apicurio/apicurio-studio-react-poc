import React, { useState, useContext } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownPosition,
  InputGroup,
  TextInput,
  Title,
  ExpandableSection,
  PageSection,
  PageSectionVariants,
  Badge,
  Divider,
  Tabs,
  Tab,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  ToolbarContent,
  FlexItem,
  Flex,
} from "@patternfly/react-core";
import {
  SearchIcon,
  CheckCircleIcon,
  ExternalLinkAltIcon,
  RedoIcon,
  UndoIcon,
} from "@patternfly/react-icons";
import "./editApi.css";
import { GlobalContext, GlobalContextObj } from "../../../context";

export const EditApi = () => {
  const globalContext: GlobalContextObj = useContext(GlobalContext);

  const [
    isSidebarToolbarDropdownOpen,
    setSidebarToolbarDropdownOpen,
  ] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("All");

  const onNameSelect = (event: any) => {
    const currentCategory = event.target.innerText;
    setCurrentCategory(currentCategory);
    setSidebarToolbarDropdownOpen(!isSidebarToolbarDropdownOpen);
  };

  const onSidebarDropdownToggle = (event: any) => {
    setSidebarToolbarDropdownOpen(!isSidebarToolbarDropdownOpen);
  };

  const getApiName = () => {
    const url = window.location.href;
    console.log(url);
    const match = url.match(/apiID=(\d+)/);
    if (match) {
      const apiID = match[1];
      const findApiById = globalContext.store.apis.find((x) => x.id === apiID);
      if (findApiById !== undefined) {
        return findApiById.name;
      }
      return 0;
    }
  };

  const buildFilterDropdown = () => (
    <ToolbarItem>
      <Dropdown
        onSelect={onNameSelect}
        position={DropdownPosition.left}
        toggle={
          <DropdownToggle
            onToggle={onSidebarDropdownToggle}
            style={{ width: "100%" }}
          >
            {currentCategory}
          </DropdownToggle>
        }
        isOpen={isSidebarToolbarDropdownOpen}
        dropdownItems={[
          <DropdownItem key="category-1">All</DropdownItem>,
          <DropdownItem key="category-2">Paths</DropdownItem>,
          <DropdownItem key="category-3">Data types</DropdownItem>,
          <DropdownItem key="category-4">Responses</DropdownItem>,
        ]}
        style={{ width: "100%" }}
      />
    </ToolbarItem>
  );

  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <React.Fragment>
      <PageSection
        variant={PageSectionVariants.light}
        className="app-page-section-breadcrumb"
      >
        <Breadcrumb>
          <BreadcrumbItem to="/">APIs</BreadcrumbItem>
          <BreadcrumbItem isActive>Edit API</BreadcrumbItem>
        </Breadcrumb>
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>
        <Toolbar id="editApiToolbar">
          <ToolbarGroup>
            <ToolbarItem>
              <Title headingLevel="h1" size="3xl">
                {getApiName()}
              </Title>
            </ToolbarItem>

            <ToolbarItem variant="pagination">
              <Button
                variant="link"
                isDisabled={true}
                icon={<CheckCircleIcon className="success-icon" />}
              >
                {" "}
                All changes saved{" "}
              </Button>
              <Button
                variant="link"
                iconPosition="left"
                icon={<ExternalLinkAltIcon />}
              >
                {" "}
                Live Documentation
              </Button>
              <Button
                variant="link"
                iconPosition="left"
                icon={
                  <Badge key={1} isRead={true}>
                    0
                  </Badge>
                }
              >
                {" "}
                View Issues
              </Button>
              <Button variant="primary" isDisabled={true} isInline={true}>
                {" "}
                <UndoIcon />{" "}
              </Button>{" "}
              <Button variant="primary" isDisabled={true} isInline={true}>
                {" "}
                <RedoIcon />{" "}
              </Button>
            </ToolbarItem>
          </ToolbarGroup>
        </Toolbar>
      </PageSection>
      <Divider />

      <PageSection variant={PageSectionVariants.light}>
        {/* <Split className="app-edit-api-split-layout"> */}
        {/* <SplitItem> */}
        {/* <Form onSubmit={(event) => {event.persist();handleSubmit(event)}}> */}
        <Flex>
          {/* <Grid hasGutter={true}> */}
          <FlexItem flex={{ default: "flex_1" }} className="test1">
            <Toolbar id="leftPaneToolbar">
              <ToolbarContent id="leftPaneToolbarContent">
                {/* <DataToolbarItem>{buildSelectDropdown()}</DataToolbarItem> */}
                <ToolbarGroup className="api-search-bar" variant="filter-group">
                  {buildFilterDropdown()}
                  <InputGroup>
                    <TextInput
                      name="textInput1"
                      id="textInput1"
                      type="search"
                      aria-label="search input"
                      // onChange={onInputChange}
                    />
                    <Button
                      variant="control"
                      aria-label="search"
                      // onClick={onNameInput}
                    >
                      <SearchIcon />
                    </Button>
                  </InputGroup>
                </ToolbarGroup>
              </ToolbarContent>
            </Toolbar>
            <Title id="apiSummary" headingLevel="h2">
              API Summary
            </Title>
            <Divider />
            <ExpandableSection
              toggleText={"Paths (19)"}
              onToggle={() => setIsExpanded(!isExpanded)}
              isExpanded={isExpanded}
            >
              This content is visible only when the component is expanded.
            </ExpandableSection>
          </FlexItem>
          <Divider isVertical={true} />
          <FlexItem flex={{ default: "flex_3" }}>
            <Title id="apiSummary" headingLevel="h2">
              API Summary
            </Title>
            <Divider />
            <Tabs>
              <Tab eventKey={0} title="Design" />
              <Tab eventKey={1} title="Source" />
            </Tabs>
            <Toolbar>
              <ToolbarGroup alignment={{ default: "alignRight" }}>
                <ToolbarItem>
                  <Button variant="secondary"> Format </Button>
                </ToolbarItem>
                <ToolbarItem>
                  <Button isDisabled={true} variant="secondary">
                    {" "}
                    Revert{" "}
                  </Button>
                </ToolbarItem>
                <ToolbarItem>
                  <Button isDisabled={true} variant="secondary">
                    {" "}
                    Save{" "}
                  </Button>
                </ToolbarItem>
                <ToolbarItem>
                  <Button variant="secondary"> As JSON </Button>
                </ToolbarItem>
              </ToolbarGroup>
            </Toolbar>
            <Divider />
            Editor
          </FlexItem>
        </Flex>
      </PageSection>
    </React.Fragment>
  );
};
