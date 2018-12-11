//@ flow
import {GET_QUESTIONSETS, GET_QUESTIONSETS_SUCCESS, GET_QUESTIONSETS_ERROR} from '../constants/actionTypes';

const initialState = {
    loading: false,
    data: [] 
}

export function getQuestionSetsReducer( state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONSETS: 
            return {...state, loading: true}
        case GET_QUESTIONSETS_SUCCESS: 
            return {...state, loading: false, data: action.payload.data}
        case GET_QUESTIONSETS_ERROR: 
            console.log("GET_QUESTIONSETS_ERROR");
            return {...state, loading: false, error: "error while getting"}
        default: 
            return state;
    }
}