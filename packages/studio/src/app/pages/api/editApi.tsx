import React, { useState, useContext } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  DataToolbar,
  DataToolbarItem,
  DataToolbarGroup,
  DataToolbarContent,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownPosition,
  TextItem,
  InputGroup,
  TextInput,
  FileUpload,
  Form,
  FormGroup,
  Grid,
  GridItem,
  GutterSize,
  Split,
  SplitItem,
  TextArea,
  TextContent,
  Text,
  TextVariants,
  TextList,
  TextListItem,
  FormSelectOption,
  FormSelect,
  ActionGroup,
  Title,
  Expandable,
  PageSection,
  PageSectionVariants,
  Badge,
  Divider,
  Tabs,
  Tab,
} from "@patternfly/react-core";
import {
  SearchIcon,
  FilterIcon,
  CheckCircleIcon,
  ExternalLinkAltIcon,
  RedoIcon,
} from "@patternfly/react-icons";
import "./importApi.css";
import MonacoEditor from "react-monaco-editor";
import { Services } from "./../../common";
import { ImportApi } from "@apicurio/models";
import "./editApi.css";
import { GlobalContext, GlobalContextObj } from "../../../context";
import { Redirect } from "react-router-dom";
import { Base64 } from "js-base64";

export const EditApi = () => {
  const apisService = Services.getInstance().apisService;
  const globalContext: GlobalContextObj = useContext(GlobalContext);

  const options = [
    { value: "URL", label: "Import from URL", disabled: false },
    {
      value: "SourceControl",
      label: "Import from Source Control",
      disabled: false,
    },
    {
      value: "Clipboard",
      label: "Import from File/Clipboard",
      disabled: false,
    },
  ];

  const [redirect, setRedirect] = useState("");

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
    <DataToolbarItem>
      <Dropdown
        // onSelect={onNameSelect}
        position={DropdownPosition.left}
        toggle={
          <DropdownToggle
            // onToggle={onToolbarDropdownToggle}
            style={{ width: "100%" }}
          >
            All
          </DropdownToggle>
        }
        // isOpen={isLowerToolbarDropdownOpen}
        dropdownItems={[
          <DropdownItem key="category-1">All</DropdownItem>,
          <DropdownItem key="category-2">TBD ???</DropdownItem>,
        ]}
        style={{ width: "100%" }}
      />
    </DataToolbarItem>
  );

  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <React.Fragment>
      {redirect && <Redirect to={redirect} />}
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
        <DataToolbar id="apiToolbar">
          <DataToolbarGroup>
            <DataToolbarItem>
              <Title headingLevel="h1" size="3xl">
                {getApiName()}
              </Title>
            </DataToolbarItem>
            <DataToolbarItem variant="pagination">
              <Button variant="link" isDisabled={true} icon={<CheckCircleIcon />}> All changes saved </Button>
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
                <RedoIcon />{" "}
              </Button>
            </DataToolbarItem>
          </DataToolbarGroup>
        </DataToolbar>
      </PageSection>
      <Divider />

      <PageSection variant={PageSectionVariants.light}>
        {/* <Split className="app-edit-api-split-layout"> */}
          {/* <SplitItem> */}
            {/* <Form onSubmit={(event) => {event.persist();handleSubmit(event)}}> */}
            <Grid gutter={"md"}>
              <GridItem span={3} style={{backgroundColor: 'white'}}>
                {/* Left Pane */}
                <DataToolbar id="leftPaneToolbar">
                  <DataToolbarContent>
                    {/* <DataToolbarItem>{buildSelectDropdown()}</DataToolbarItem> */}
                    <DataToolbarGroup variant="filter-group">
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
                    </DataToolbarGroup>
                  </DataToolbarContent>
                </DataToolbar>
                <Title size={"md"}>API Summary</Title>
                <Divider />
                <Expandable
                  toggleText={"Paths (19)"}
                  onToggle={() => setIsExpanded(!isExpanded)}
                  isExpanded={isExpanded}
                >
                  This content is visible only when the component is expanded.
                </Expandable>
              </GridItem>
              <GridItem span={9}>
                <Title size={"lg"}>API Summary</Title>
                <Divider />
                <Tabs>
                  <Tab eventKey={0} title="Design">Design</Tab>
                  <Tab eventKey={1} title="Source">Source</Tab>

                  </Tabs>
              </GridItem>
            </Grid>
          {/* </SplitItem>
        </Split> */}
      </PageSection>
    </React.Fragment>
  );
};
