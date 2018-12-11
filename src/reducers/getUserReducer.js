//@ flow
import {GET_USER, GET_USER_SUCCESS, GET_USER_ERROR} from '../constants/actionTypes';

const initialState = {
    loading: false,
    data: [] 
}

export function getUserReducer( state = initialState, action) {
    switch (action.type) {
        case GET_USER: 
            return {...state, loading: true}
        case GET_USER_SUCCESS: 
            return {...state, loading: false, data: action.payload.data}
        case GET_USER_ERROR: 
            console.log("GET_USER_ERROR");
            return {...state, loading: false, error: 'Error while getting'}
        default: 
            return state;
    }
}