import {useContext} from 'react';
import {Api} from "@apicurio/models";
import { StoreContext } from './../context/StoreContext';

export function storeApis(data: Api[]) {
    console.log('hi did it get here');
    const { state, dispatch, actions } = useContext(StoreContext);
    dispatch({
        type: 'FETCH_API_DATA',
        payload: data
    })

    return dispatch;
}