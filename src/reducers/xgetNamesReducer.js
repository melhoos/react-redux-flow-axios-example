//@ flow
// NOT IN USE
import {GET_NAMES, GET_NAMES_SUCCESS, GET_NAMES_ERROR} from '../constants/actionTypes';

const initialState = {
    loading: false,
    data: [] 
}

export function getNamesReducer( state = initialState, action) {
    switch (action.type) {
        case GET_NAMES: 
            return {...state, loading: true}
        case GET_NAMES_SUCCESS: 
            return {...state, loading: false, data: action.payload.data}
        case GET_NAMES_ERROR: 
            console.log("GET_NAMES_ERROR");
            return {...state, loading: false, error: 'Error while getting'}
        default: 
            return state;
    }
}