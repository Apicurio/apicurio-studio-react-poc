import React, { ReactNode } from 'react';
import { Button, Form, FormGroup, TextInput, TextArea, FormSelectOption, FormSelect, Checkbox, ActionGroup, Radio, Title, PageSection, PageSectionVariants } from '@patternfly/react-core';
import '../../app.css'

type CreateApiProps = {
}

type CreateApiState = {
  name: string,
  description: string,
  apiType: string
}

export class CreateApi extends React.Component<CreateApiProps, CreateApiState> {
  constructor(props: CreateApiProps) {
    super(props);
    this.state = {
      name: '',
      description: '',
      apiType: 'please choose'
    };
    this.handleTextInputChangeName = this.handleTextInputChangeName.bind(this);
    this.handleTextInputChangeDescription = this.handleTextInputChangeDescription.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (apiType, event) => {
    this.setState({apiType});
  };

  handleTextInputChangeName = (name: string) => {
    this.setState({ name });
  };

  handleTextInputChangeDescription = (description: string) => {
    this.setState({ description });
  };

  /* Add more options here */
  options = [
    { value: 'Please choose', label: 'Please choose', disabled: false },
    { value: 'Open API 3.0.2', label: 'Open API 3.0.2', disabled: false }
  ];

  render() {
    const { name, description } = this.state;
    return (
      <React.Fragment>
        <PageSection variant={PageSectionVariants.light}>
          <Title headingLevel="h1" size="3xl">
            Create a new API design
          </Title>
        </PageSection>
        <PageSection>
          <Form>
            <FormGroup
              label="Name"
              isRequired
              fieldId="api-create-name"
            >
              <TextInput
                isRequired
                type="text"
                id="api-create-name"
                name="api-create-name"
                value={name}
                onChange={this.handleTextInputChangeName}
              />
            </FormGroup>
            <FormGroup
              label="Description"
              fieldId="description-text-area"
            >
              <TextArea
                name="description-text-area"
                value={description}
                onChange={this.handleTextInputChangeDescription}
                id="description-text-area"
                aria-label="description"
              />
            </FormGroup>
            <FormGroup 
              label="Your title"
              fieldId="horizontal-form-title"
            >
              <FormSelect
                value={this.state.apiType}
                onChange={this.onChange}
                id="api-type-select"
                name="api-type-select"
              >
                {this.options.map((option, index) => (
                  <FormSelectOption
                    isDisabled={option.disabled}
                    key={index}
                    value={option.value}
                    label={option.label}
                  />
                ))}
              </FormSelect>
            </FormGroup>
            <ActionGroup>
              <Button variant="primary">Create API</Button>
            </ActionGroup>
          </Form>
        </PageSection>
      </React.Fragment>
    );
  }
}
