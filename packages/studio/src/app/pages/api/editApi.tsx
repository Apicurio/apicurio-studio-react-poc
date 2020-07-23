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
  PageSection,
  PageSectionVariants,
  Badge,
} from "@patternfly/react-core";
import {
    SearchIcon,
    FilterIcon,
    ExternalLinkAltIcon,
    RedoIcon

  } from "@patternfly/react-icons";
import "./importApi.css";
import MonacoEditor from "react-monaco-editor";
import { Services } from "./../../common";
import { ImportApi } from "@apicurio/models";
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

//   const [importType, setImportType] = React.useState(options[0].value);
//   const [textInputUrl1, setTextInputUrl1] = React.useState("");
//   const [textInputUrl2, setTextInputUrl2] = React.useState("");
//   const [isValidTextInput1, setIsValidTextInput1] = React.useState(true);
//   const [isValidTextInput2, setIsValidTextInput2] = React.useState(true);
//   const [helperTextInvalid1, setHelperTextInvalid1] = React.useState("");
//   const [helperTextInvalid2, setHelperTextInvalid2] = React.useState("");
//   const [importing, setImporting] = useState(false);
//   const [importError, setImportError] = useState(null);
  const [redirect, setRedirect] = useState("");
//   const [importError2, setImportError2] = React.useState(null);

//   const onSelectChange = (importType: string) => {
//     setImportType(importType);
//   };

//   const handleTextInputChange1 = (textInputUrl1: string) => {
//     setTextInputUrl1(textInputUrl1);
//     if (textInputUrl1 === "") {
//       setIsValidTextInput1(false);
//       setHelperTextInvalid1("URL is required.");
//     } else {
//       if (validateURL(textInputUrl1)) {
//         setIsValidTextInput1(true);
//       } else {
//         setIsValidTextInput1(false);
//         setHelperTextInvalid1("Please enter a valid URL.");
//       }
//     }
//   };

//   const handleTextInputChange2 = (textInputUrl2: string) => {
//     setTextInputUrl2(textInputUrl2);
//     if (textInputUrl2 === "") {
//       setIsValidTextInput2(false);
//       setHelperTextInvalid2("URL is required.");
//     } else {
//       if (validateURL(textInputUrl2)) {
//         setIsValidTextInput2(true);
//       } else {
//         setIsValidTextInput2(false);
//         setHelperTextInvalid2("Please enter a valid URL.");
//       }
//     }
//   };

  // Text Editor
  // TO DO: Add functionality for importing an API using the Monaco Editor / Drag + Drop Functionality
  const monacoOnChange = (newValue, e) => {
    console.log("onChange", newValue, e);
  };

  const editorDidMount = (editor, monaco) => {
    console.log("editorDidMount", editor);
    editor.focus();
  };

  const monacoOptions = {
    selectOnLineNumbers: true,
  };

  // Validate the URL to determine if it is a valid HTML
//   const validateURL = (url: string) => {
//     const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
//     if (regexp.test(url)) {
//       return true;
//     } else {
//       return false;
//     }
//   };

  // On handle submit, check if the form is valid, and call the onCreateApi method
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if(importType === options[0].value) {
  //       const urlValue = event.target.importurl.value;
  //       console.log('what is event' + urlValue);
  //       if (isValidTextInput1) {
  //         onImportApi(urlValue);
  //       }
  //     }
  //     else if (importType === options[1].value) {
  //       const sourceControlUrlValue = event.target.importsourcecontrolurl.value;
  //       console.log('what is event' + sourceControlUrlValue);
  //       if (isValidTextInput2) {
  //         onImportApi(sourceControlUrlValue);
  //       }
  //     }
  //   };

  // const onEditApi = (api) => {
  //   const editApiObject: EditApi = { url: null, data: null, name: "" };
  //   if (api) {
  //     editApiObject.url = api;
  //   } else {
  //     try {
  //       editApiObject.data = Base64.encode(api);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }

  //   console.log(
  //     "[EditApiPageComponent] onEditApi(): " + JSON.stringify(editApiObject)
  //   );
  //   apisService
  //     .editApi(editApiObject)
  //     .then((api) => {
  //       globalContext.setLastCreatedApi(api.data.id);
  //       console.info("[ImportApiPageComponent] Navigating to: Apis" + api);
  //       setRedirect("/");
  //     })
  //     .catch((error) => {
  //       console.error("[CreateApiPageComponent] Error creating an API");
  //       setImporting(false);
  //       if (error.status === 404) {
  //         setImportError(error);
  //       } else {
  //         setImportError(error);
  //       }
  //     });
  // };

  const getApiName = () => {
    const url = window.location.href;
    console.log(url);
    const match = url.match(/apiID=(\d+)/);
    if (match) {
      const apiID = match[1];
      return globalContext.store.apis.find((x) => x.id === apiID).name;
    }
    return 0;
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
          <DropdownItem key="category-2">TBD ???</DropdownItem>
        ]}
        style={{ width: "100%" }}
      />
    </DataToolbarItem>
  );

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
        <Button variant="link" iconPosition="left" icon={<ExternalLinkAltIcon />}> Live Documentation</Button>
        <Button variant="link" iconPosition="left" icon={<Badge key={1} isRead={true}>0</Badge>}> View Issues</Button>
        <Button variant="primary" isDisabled={true} isInline={true}> <RedoIcon /> </Button>
        </DataToolbarItem>

        </DataToolbarGroup>
        </DataToolbar>
      </PageSection>
      <PageSection>
        <Split className="app-import-api-split-layout">
          <SplitItem>
            {/* <Form onSubmit={(event) => {event.persist();handleSubmit(event)}}> */}
            <Grid gutter={"md"}>
              <GridItem span={12}>API Title</GridItem>
              <GridItem span={4}>Left Pane
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
              </GridItem>
              <GridItem span={8}>Right Pane</GridItem>
            </Grid>
          </SplitItem>
        </Split>
      </PageSection>
    </React.Fragment>
  );
};
