import React, { useState } from 'react';
import {Api} from "@apicurio/models";

const StoreContext = React.createContext({});

export interface IState {
    apiData: Api[],
    dashboardView: string
}

const initialState: IState = {
    apiData: [],
    dashboardView: 'list'
};

const StoreProvider = ({ children }) => {
    const [state, setState] = useState({ ...initialState });

    return (
        <StoreContext.Provider value={[state, setState]}>
            {children}
        </StoreContext.Provider>
    );
};

export { StoreProvider, StoreContext };