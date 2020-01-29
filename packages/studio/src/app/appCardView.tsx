import React, { ReactNode } from 'react';
import { Gallery, GalleryItem } from '@patternfly/react-core';
import AppCard from './appCard';
import data from '../api-data.json';

export const AppCardView: React.FunctionComponent<any> = (props) => {
  const apiData = data.apis;

  const cardList = apiData.map((api) =>
    <AppCard
      apiName={api.name}
      apiDescription={api.description}
      apiTag1="Tag 1"
      apiTag2="Another tag"
    />
  );

  return (
    <Gallery gutter="md">
      {cardList}
    </Gallery>
  );
}

export default AppCardView;