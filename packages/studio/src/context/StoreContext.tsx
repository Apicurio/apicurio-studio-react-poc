import React, { useState } from 'react';
import {Api, ApiDesignChange} from "@apicurio/models";

const StoreContext = React.createContext({});

export interface IState {
    apiData: Api[],
    recentActivityData: ApiDesignChange[],
    dashboardView: string,
    notificationDrawerExpanded: boolean
}

const initialState: IState = {
    apiData: [],
    recentActivityData: [],
    dashboardView: 'list',
    notificationDrawerExpanded: false
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