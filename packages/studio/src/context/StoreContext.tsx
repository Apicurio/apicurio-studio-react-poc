import React, { useEffect, useReducer } from 'react';
import { IState, initialState, reducer } from './reducers'

export const StoreContext = React.createContext({} as IContextProps);
import {useActions} from './actions';

interface IContextProps {
    state: IState,
    dispatch: ({type}:{type:string}) => void
}

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const actions = useActions(state, dispatch);

    useEffect(() => console.log({ newState: state }), [state]);
    const value = { state, dispatch, actions };

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};

export { StoreProvider };