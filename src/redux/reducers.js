import { UPDATE_PAGE_ONE, UPDATE_PAGE_TWO } from './actions.js';

const INITIAL_STATE = {
    pageOne: "",
    pageTwo: ""
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_PAGE_ONE:
            return {
                ...state,
                pageOne: action.payload
            };
        case UPDATE_PAGE_TWO:
            return {
                ...state,
                pageTwo: action.payload
            };
        default:
            return state;
    }
}