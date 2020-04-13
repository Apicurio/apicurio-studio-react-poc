import React, { useState } from 'react';
import {Api, ApiDesignChange} from "@apicurio/models";

export const GlobalContext = React.createContext({});

export interface GlobalState {
    apiData: Api[],
    recentActivityData: ApiDesignChange[],
    dashboardView: string,
    notificationDrawerExpanded: boolean
}

export interface GlobalContextObj {
    state: GlobalState,
    setState: React.Dispatch<React.SetStateAction<GlobalState>>
}

const initialState: GlobalState = {
    apiData: [],
    recentActivityData: [],
    dashboardView: 'list',
    notificationDrawerExpanded: false
};

export const GlobalContextProvider: React.FunctionComponent = ({children}) => {
    const [state, setState] = useState({ ...initialState });

    return (
        <GlobalContext.Provider value={{state, setState}}>
            {children}
        </GlobalContext.Provider>
    );
};

// import React from 'react';
// import {Api, ApiDesignChange} from "@apicurio/models";
// import {createStore} from './store';

// export const GlobalContext = React.createContext({});

// export interface GlobalState {
//     // apiData: Api[],
//     // recentActivityData: ApiDesignChange[],
//     dashboardView: string,
//     notificationDrawerExpanded: boolean
// }

// // const initialState: GlobalState = {
// //     // apiData: [],
// //     // recentActivityData: [],
    
// // };

// const store = createStore({
//     dashboardView: 'list',
//     notificationDrawerExpanded: false
// });


// export const GlobalContextProvider = (children: React.ReactNode) => {
//     //const [state, setState] = React.useState();
//     const GlobalContextObject = {
//         store: store.store,
//         setDashboardView: (value: string) => {store.set('dashboardView', value)},
//         setNotificationDrawerExpanded: (value: boolean) => {store.set('notificationDrawerExpanded', value)}
//     }

//     return (
//         <GlobalContext.Provider value={store}>
//             {children}
//         </GlobalContext.Provider>
//     );
// };