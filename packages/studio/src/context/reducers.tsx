import {Api} from "@apicurio/models";

export interface IState {
    apiData: Api[]
}

const initialState: IState = {
    apiData: []
};

const types = {
    FETCH_API_DATA: 'FETCH_API_DATA'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_API_DATA:
            return {
                ...state,   
                apiData: action.payload.apiData
            };
        default:
            throw new Error("Unexpected action");
    }
};
export { initialState, types, reducer };
