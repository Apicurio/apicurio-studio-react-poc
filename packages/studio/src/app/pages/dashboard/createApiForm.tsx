import React, { ReactNode } from 'react';
import { Form } from '@patternfly/react-core';
import './app.css'

type CreateApiFormProps = {
}

class CreateApiForm extends React.Component<CreateApiFormProps> {
  constructor(props: CreateApiFormProps) {
    super(props);
  }
  render() {
    return (
      <Form>
        Placeholder
      </Form>
    );
  }
}

export default CreateApiForm;