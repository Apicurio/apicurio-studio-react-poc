import React, { ReactNode } from 'react';
import { Button, Card, CardBody, Form, FormGroup, Split, SplitItem, TextInput, TextArea, FormSelectOption, FormSelect, ActionGroup, Title, PageSection, PageSectionVariants } from '@patternfly/react-core';
import '../../app.css'

type ImportApiProps = {
}

type ImportApiState = {
  importType: string,
  url: string
}

export class ImportApi extends React.Component<ImportApiProps, ImportApiState> {
  constructor(props: ImportApiProps) {
    super(props);
    this.state = {
      importType: '',
      url: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleTextInputChangeURL = this.handleTextInputChangeURL.bind(this);
  }

  onChange = (importType: string, event) => {
    this.setState({importType});
  };

  handleTextInputChangeURL = (url: string) => {
    this.setState({ url });
  };

  /* Add more options here */
  options = [
    { value: 'Import from URL', label: 'Import from URL', disabled: false }
  ];

  render() {
    const { url } = this.state;

    return (
      <React.Fragment>
        <PageSection variant={PageSectionVariants.light}>
          <Title headingLevel="h1" size="3xl">
            Import an existing API
          </Title>
        </PageSection>
        <PageSection>
          <Split>
            <SplitItem>
              <Form>
                <p className="app-form-helper-text">Fields marked with <span className="app-form-helper-text-asterisk">*</span> are required.</p>
                <FormGroup
                  label="Import Type"
                  fieldId="import-type"
                >
                  <FormSelect
                      value={this.state.importType}
                      onChange={this.onChange}
                      id="import-type"
                      name="import-type"
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
                <FormGroup
                  label="URL"
                  isRequired
                  fieldId="import-url"
                >
                  <TextInput
                    isRequired
                    type="text"
                    id="import-url"
                    name="import-url"
                    value={url}
                    onChange={this.handleTextInputChangeURL}
                  />
                </FormGroup>
                <ActionGroup>
                  <Button variant="primary">Create API</Button>
                </ActionGroup>
              </Form>
            </SplitItem>
            <SplitItem>
              <Card className="app-card-import-api">
                <CardBody>
                  What is this page?

                  Hey there! Here you can import an existing API to the Studio by either 
                  giving us the OpenAPI document or telling us where we can get it.

                  Choose from the following options:
                  - Import from source control URL
                  - Import raw content from URL
                  - Copy and paste raw content directly
                </CardBody>
              </Card>
            </SplitItem>
          </Split>
        </PageSection>
      </React.Fragment>
    );
  }
}
