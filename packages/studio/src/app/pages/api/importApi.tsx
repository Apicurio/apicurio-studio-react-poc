import React, { ReactNode } from 'react';
import { Button, Form, Level, LevelItem, Title, PageSection, PageSectionVariants } from '@patternfly/react-core';
import '../../app.css'

type ImportApiProps = {
}

export class ImportApi extends React.Component<ImportApiProps> {
  constructor(props: ImportApiProps) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <PageSection variant={PageSectionVariants.light}>
          <Title headingLevel="h1" size="3xl">
            Import an existing API
          </Title>
        </PageSection>
        <PageSection noPadding={true}>
          <Form>
            Form placeholder
          </Form>
        </PageSection>
      </React.Fragment>
    );
  }
}
