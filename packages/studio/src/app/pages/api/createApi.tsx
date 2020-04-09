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
import './createApi.css';

// interface CreateApiProps {
//   isActive: true
// }

// interface CreateApiState {
//   name: string,
//   description: string,
//   apiType: string
// }

const apisService = Services.getInstance().apisService;
apisService.createApi(api);

// const loadAsyncPageData = async () => {
//   const apiState = await apisService.getApis()
//     .then( apis => {
//       const insideApis: Api[] = apis.data;
//       return insideApis;
//     })
//     .catch(error => {
//       console.error("error getting API" + error);
//     });

//   const activitiyState = await userService.getActivity(activityStart, activityEnd)
//   .then( activity => {
//     const activityData: ApiDesignChange[] = activity.data;
//     if(activityData && activityData.length >= 10) {
//       setHasMoreActivity(true);
//     }
//     return activityData;
//   })
//   .catch(error => {
//     console.error("error getting API" + error);
//   });

//   setState({...state, apiData: apiState, recentActivityData: activitiyState});
// }

export const CreateApi = () => {

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
          <Form className="app-create-api__form">
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
                name="api-create-name"
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
                name="description-text-area"
                value={description}
                onChange={handleTextInputChangeDescription}
                id="description-text-area"
                aria-label="description"
              />
            </FormGroup>
            <FormGroup 
              label="Type"
              fieldId="horizontal-form-title"
            >
              <FormSelect
                value={apiType}
                onChange={onChange}
                id="api-type-select"
                name="api-type-select"
              >
                {typeOptions.map((option, index) => (
                  <FormSelectOption
                    isDisabled={option.disabled}
                    key={index}
                    value={option.value}
                    label={option.label}
                  />
                ))}
              </FormSelect>
            </FormGroup>
            <FormGroup>
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
              <Button variant="primary">Create API</Button>
            </ActionGroup>
          </Form>
        </PageSection>
      </React.Fragment>
    );
}
