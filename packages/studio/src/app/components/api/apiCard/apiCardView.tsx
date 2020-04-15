import React, { useContext } from 'react';
import { Gallery } from '@patternfly/react-core';
import {ApiCard} from './apiCard';
import { GlobalContext } from '../../../../context';

export const ApiCardView: React.FunctionComponent<any> = (props) => {
  const { apis } = {... useContext(GlobalContext).store}

  const cardList = apis.map((api, index) =>
    <ApiCard
      key={index}
      id={api.id}
      name={api.name}
      description={api.description}
      tags={api.tags}
    />
  );

  return (
    <Gallery gutter="md">
      {cardList}
    </Gallery>
  );
}

export default ApiCardView;