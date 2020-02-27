import { types } from "./reducers";

export const useActions = dispatch => {
    dispatch({ type: types.FETCH_API_DATA, payload: apiData});
}