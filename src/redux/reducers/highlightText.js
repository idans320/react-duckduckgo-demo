import { SET_HIGHLIGHT } from "../actionTypes";

const initialState = {
    keyword : ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_HIGHLIGHT: {
            const payload = action.payload;
            return {...state, ...payload}
        }
        default:
            return state
    }
}