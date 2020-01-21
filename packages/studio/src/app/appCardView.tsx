import React, { ReactNode } from 'react';
import { Gallery, GalleryItem } from '@patternfly/react-core';
import AppCard from './appCard';

//let isDropdownOpen: boolean = false;
//const userDropdownItems: ReactNode[] = [];

export const AppCardView: React.FunctionComponent<any> = (props) => {
  return (
    <Gallery gutter="md">
      <AppCard
        apiName="My Pet Store API"
        apiDescription="A sample API that uses a pet store as an example to demonstrate features in OpenAPI 3.0."
        apiTag1="Tag 1"
        apiTag2="Another tag"
      />
      <AppCard
        apiName="My Pet Store API 2"
        apiDescription="A sample API that uses a pet store as an example to demonstrate features in OpenAPI 3.0."
        apiTag1="Tag 2"
        apiTag2="Another tag"
      />
      <AppCard
        apiName="My Pet Store API 3"
        apiDescription="A sample API that uses a pet store as an example to demonstrate features in OpenAPI 3.0."
        apiTag1="Tag 3"
        apiTag2="Another tag"
      />
      <AppCard
        apiName="My Pet Store API 4"
        apiDescription="A sample API that uses a pet store as an example to demonstrate features in OpenAPI 3.0."
        apiTag1="Tag 4"
        apiTag2="Another tag"
      />
    </Gallery>
  );
}

export default AppCardView;