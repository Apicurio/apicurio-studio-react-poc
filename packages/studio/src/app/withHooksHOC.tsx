import React from 'react';
import { storeApis } from './../functions/fetchApis';

export const withHooksHOC = (Component: any) => {
  return (props: any) => {
    const storeApise = storeApis(data);

    return <Component storeApis={ storeApis }/>
  }
}
