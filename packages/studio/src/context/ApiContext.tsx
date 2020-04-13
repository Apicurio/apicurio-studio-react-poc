import React, { useState } from 'react';
import {Api} from "@apicurio/models";

export const ApiContext = React.createContext({});

export interface ApiState {
    apiData: Api[]
}

export interface ApiContextObj {
    state: ApiState,
    updateApi: any
}

const initialState: ApiState = {
    apiData: [],
};




export const ApiContextProvider: React.FunctionComponent = ({children}) => {
    const [state, setState] = useState({ ...initialState });
    const updateApi = (apis: Api[]) => {
        // Update with new apis or modifed apis only.
        setState({apiData: apis});
    }

    return (
        <ApiContext.Provider value={{state, updateApi}}>
            {children}
        </ApiContext.Provider>
    );
};