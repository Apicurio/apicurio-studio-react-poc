export interface IState {
    techList: string[]
}

const initialState: IState = {
    techList: ["TypeScript", "React Hooks"]
};

const types = {
    ADD_TO_TECH_LIST: "ADD_TO_TECH_LIST"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_TECH_LIST:
            return {
                ...state,   
                techList: action.payload
            };
        default:
            throw new Error("Unexpected action");
    }
};
export { initialState, types, reducer };
