import { SET_RESULTS, SET_PAGE } from "../actionTypes";

const initialState = {
    result: null,
    pageNumber : 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_RESULTS: {
            const payload = action.payload;
            return Object.assign({}, payload )
        }
        case SET_PAGE: {
            const payload = action.payload;
            return {...state, ...payload}
        }
        default:
            return state
    }
}
