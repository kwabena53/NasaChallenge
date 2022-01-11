
import {GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS} from "./action"

const INITIAL_STATE = {
    gettingData: false
}

export default function reducer  (state = INITIAL_STATE, action = { type: "" }) {

    const { type } = action;
    switch (type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                gettingData: true,
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                apods: action.data,
            };
        case GET_DATA_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}