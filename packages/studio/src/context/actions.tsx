import { types } from "./reducers";

export const useActions = (state, dispatch) => {
    function addTechIfNotInList(newTech) {
        const techIndex = state.techList.indexOf(newTech);
        if (techIndex !== -1) {
            alert("Tech is defined in list");
        }
        else {
            dispatch({ type: types.ADD_TO_TECH_LIST, payload: newTech});
        }
    }

    return {
        addTechIfNotInList
    };
};