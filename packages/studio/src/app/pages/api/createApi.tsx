import React, {useState, useEffect, useRef} from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  TextInput,
  TextArea,
  FormSelectOption,
  FormSelect,
  ActionGroup,
  Title,
  PageSection,
  PageSectionVariants 
} from '@patternfly/react-core';
import '../../app.css';
import { PlusCircleIcon } from '@patternfly/react-icons';
import { PficonTemplateIcon } from '@patternfly/react-icons'
import { Services } from './../../common';
import './createApi.css';
import { NewApi, ImportApi} from "@apicurio/models";
import { CreateApiFormData } from '../../../../../models/src/create-api-form-data.model';
import {Base64} from "js-base64";

export const CreateApi = () => {

  const apisService = Services.getInstance().apisService;

  // TO DO: Add more options here
  const typeOptions = [
    { value: "OpenAPI20", label: "Open API 2.0 (Swagger)", disabled: false },
    { value: 'OpenAPI30', label: 'Open API 3.0.2', disabled: false }
  ];

  const [apiType, setApiType] = useState(typeOptions[1].value);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cardSelected, setCardSelected] = useState('card-blank-api');
  const [isNameValid, setIsNameValid] = useState(true);
  const [countSubmit, setCountSubmit] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  const onChange = (apiType: string) => {
    setApiType(apiType);
  };

  const handleTextInputChangeName = (name: string) => {
    if(name.length > 0) {
      setIsNameValid(true);
    }
    setName(name);
  };

  const handleTextInputChangeDescription = (description: string) => {
    setDescription(description);
  };

  const onClickCard = event => {
    const newSelected = event.currentTarget.id === cardSelected ? null : event.currentTarget.id
    setCardSelected(newSelected);
  };

  // On handle submit, check if the form is valid, and call the onCreateApi method
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      onCreateApi(event);
    }
  }

  // Keep count of the first time the submit button is clicked
  const updateButtonCount = () => {
    setCountSubmit(countSubmit + 1);
  }

  // Every component render except the first button submit, set the validation states of the form
  useEffect(() => {
    if (countSubmit === 0) {
      return;
    }
    else {
      if (name === '') {
        setIsNameValid(false);
        setIsFormValid(false);
      }
      else {
        setIsFormValid(true);
      }
    }
  });

  const onCreateApi = (eventData: CreateApiFormData) => {
    if(!eventData.target.template) {
      const newApi: NewApi = new NewApi();
      newApi.type = eventData.target.type.value;
      newApi.name = eventData.target.name.value;
      newApi.description = eventData.target.description.value;

      console.log("[CreateApiPageComponent] Creating a new (blank) API: " + JSON.stringify(newApi));

      apisService.createApi(newApi).then(api => {
        // TO DO: Set up routes in the app to redirect here
        // let link: string[] = ["/", api.id];
        // console.info("[CreateApiPageComponent] Navigating to: %o", link);
        // this.router.navigate(link);
        }).catch(error => {
        console.error("[CreateApiPageComponent] Error creating an API");
        // TO DO: Set up error handling
        //this.error(error);
    })
    } else {
      let importApi: ImportApi = new ImportApi();
      let spec: any = JSON.parse(JSON.stringify(eventData.template.value));
      updateSpec(spec, eventData);
      importApi.data = Base64.encode(JSON.stringify(spec));

      apisService.importApi(importApi).then(updatedApi => {
        // TO DO: Set up routes in the app to redirect here
        // let link: string[] = [ "/apis", updatedApi.id ];
        // console.info("[CreateApiPageComponent] Navigating to: %o", link);
        // this.router.navigate(link);
      }).catch( error => {
          console.error("[CreateApiPageComponent] Error creating API: %o", error);
          // TO DO: Set up error handling
          // this.error(error);
      })
    }
  }

  const updateSpec = (spec: any, eventData: CreateApiFormData): void => {
    // OpenAPI20, OpenAPI30, AsyncAPI20, GraphQL
    if (eventData.type === 'OpenAPI20') {
      spec.swagger = "2.0";
    } else if (eventData.type === 'OpenAPI30') {
      spec.openapi = "3.0.2";
    } else if (eventData.type === 'AsyncAPI20') {
      spec.asyncapi = "2.0.0";
    } else if (eventData.type == 'GraphQL') {
      spec.graphql = "June 2018";
    }
    if (!spec.info) {
        spec.info = {};
    }
    spec.info.title = eventData.name;
    if (eventData.description) {
        spec.info.description = eventData.description;
    }
  }

  return (
      <React.Fragment>
        <PageSection variant={PageSectionVariants.light} className="app-page-section-breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem to="/">
              APIs
            </BreadcrumbItem>
            <BreadcrumbItem isActive>
              Create API
            </BreadcrumbItem>
          </Breadcrumb>
        </PageSection>
        <PageSection variant={PageSectionVariants.light}>
          <Title headingLevel="h1" size="3xl">
            Create a new API design
          </Title>
        </PageSection>
        <PageSection>
          <Form onSubmit={handleSubmit} className="app-create-api__form">
            <p className="app-form-helper-text">Fields marked with <span className="app-form-helper-text-asterisk">*</span> are required.</p>
            <FormGroup
              label="Name"
              placeholder="Create the new API's name"
              isRequired
              fieldId="api-create-name"
              helperTextInvalid="Please enter a name."
              isValid={isNameValid}
            >
              <TextInput
                isRequired
                type="text"
                id="api-create-name"
                name="name"
                value={name}
                onChange={handleTextInputChangeName}
              />
            </FormGroup>
            <FormGroup
              label="Description"
              fieldId="description-text-area"
              placeholder="Type a short description of the API"
            >
              <TextArea
                name="description"
                value={description}
                onChange={handleTextInputChangeDescription}
                id="description-text-area"
                aria-label="description"
              />
            </FormGroup>
            <FormGroup
              isRequired
              label="Type"
              fieldId="type-form-title"
            >
              <FormSelect
                value={apiType}
                onChange={onChange}
                id="api-type-select"
                name="type"
              >
                {typeOptions.map((option, index) => (
                  <FormSelectOption
                    key={index}
                    value={option.value}
                    label={option.label}
                  />
                ))}
              </FormSelect>
            </FormGroup>
            <FormGroup
              isRequired
              label="Template"
              fieldId="template-form-title"
              name="template"
              value={cardSelected}
            >
              <div className="app-create-api__form-card-group" id="api-template">
                <Card id="card-blank-api" className="app-create-api__form-card" onClick={onClickCard} isSelected={cardSelected === 'card-blank-api'} isSelectable isCompact>
                  <CardBody>
                    <div className="app-create-api__form-card-text">
                      <PlusCircleIcon/>
                      <span>
                        Blank API
                      </span>
                    </div>
                  </CardBody>
                </Card>
                <Card id="card-pet-store-api" className="app-create-api__form-card" onClick={onClickCard} isSelected={cardSelected === 'card-pet-store-api'} isSelectable isCompact>
                  <CardBody>
                    <div className="app-create-api__form-card-text">
                      <PficonTemplateIcon/>
                      <span>
                        Pet Store example API
                      </span>
                    </div>
                  </CardBody>
                </Card>
                <Card id="card-dataset-api" className="app-create-api__form-card" onClick={onClickCard} isSelected={cardSelected === 'card-dataset-api'} isSelectable isCompact>
                  <CardBody>
                    <div className="app-create-api__form-card-text">
                      <PficonTemplateIcon/>
                      <span>
                        USPTO Dataset API
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </FormGroup>
            <ActionGroup>
              <Button type="submit" variant="primary" onClick={() => updateButtonCount()}>Create API</Button>
            </ActionGroup>
          </Form>
        </PageSection>
      </React.Fragment>
    );
}
