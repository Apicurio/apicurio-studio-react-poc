import React, {useState} from 'react';
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
// import {CreateApiFormData} from "@apicurio/models";
import './createApi.css';
import { NewApi, ImportApi, CreateApiFormData} from "@apicurio/models";
import {Base64} from "js-base64";

export const CreateApi = () => {

  const apisService = Services.getInstance().apisService;

  const [apiType, setApiType] = useState('Please choose');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cardSelected, setCardSelected] = useState(null);

  // TO DO: Add more options here
  const typeOptions = [
    { value: 'Open API 2.0 (Swagger)', label: 'Open API 2.0 (Swagger)', disabled: false },
    { value: 'Open API 3.0.2', label: 'Open API 3.0.2', disabled: false, isPlaceholder: true  }
  ];

  const onChange = (apiType: string) => {
    setApiType(apiType);
  };

  const handleTextInputChangeName = (name: string) => {
    setName(name);
  };

  const handleTextInputChangeDescription = (description: string) => {
    setDescription(description);
  };

  const onClickCard = event => {
    const newSelected = event.currentTarget.id === cardSelected ? null : event.currentTarget.id
    setCardSelected(newSelected);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('did it get here');
    onCreateApi(event);
  }

  const onCreateApi = (eventData) => {
    console.log('what is all the data' + eventData.target.type.value);
    if(!eventData.template) {
      let newApi: NewApi = new NewApi();
      newApi.type = eventData.target.type.value;
      newApi.name = eventData.target.name.value;
      newApi.description = eventData.target.description.value;

      console.log("[CreateApiPageComponent] Creating a new (blank) API: " + JSON.stringify(newApi));
      
      apisService.createApi(newApi).then(api => {
        let link: string[] = ["/apis", api.id];
        console.info("[CreateApiPageComponent] Navigating to: %o", link);
        // this.router.navigate(link);
        }).catch(error => {
        console.error("[CreateApiPageComponent] Error creating an API");
        //this.error(error);
    })
    } else {
      let importApi: ImportApi = new ImportApi();
      let spec: any = JSON.parse(JSON.stringify(eventData.template.content));
      updateSpec(spec, eventData);
      importApi.data = Base64.encode(JSON.stringify(spec));

      apisService.importApi(importApi).then(updatedApi => {
          let link: string[] = [ "/apis", updatedApi.id ];
          console.info("[CreateApiPageComponent] Navigating to: %o", link);
          // this.router.navigate(link);
      }).catch( error => {
          console.error("[CreateApiPageComponent] Error creating API: %o", error);
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
                    isPlaceholder={option.isPlaceholder}
                  />
                ))}
              </FormSelect>
            </FormGroup>
            <FormGroup
              isRequired
              label="Template"
              fieldId="template-form-title"
            >
              <div className="app-create-api__form-card-group">
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
              <Button type="submit" variant="primary">Create API</Button>
            </ActionGroup>
          </Form>
        </PageSection>
      </React.Fragment>
    );
}
