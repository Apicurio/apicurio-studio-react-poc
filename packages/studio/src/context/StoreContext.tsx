import React, { useState } from 'react';
import {Api} from "@apicurio/models";
// import { IState, initialState, reducer } from './reducers'

// export const StoreContext = React.createContext({} as IContextProps);
const StoreContext = React.createContext({});
// import {useActions} from './actions';

// interface IContextProps {
//     state: IState,
//     dispatch: ({type}:{type:string}) => void
// }

export interface IState {
    apiData: Api[]
}

const initialState: IState = {
    apiData: []
};

const StoreProvider = ({ children }) => {
    // console.log('this is the value passed to store provider' + value);
    const [state, setState] = useState({ ...initialState });

    return (
        <StoreContext.Provider value={[state, setState]}>
            {children}
        </StoreContext.Provider>
    );
};

export { StoreProvider, StoreContext };