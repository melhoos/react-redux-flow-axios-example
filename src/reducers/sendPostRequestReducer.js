//@ flow
import {SEND_POST_REQUEST, SEND_POST_SUCCESS, SEND_POST_ERROR} from '../constants/actionTypes';

const initialState = {
    loading: false
}

export function sendPostRequestReducer( state = initialState, action) {
    switch (action.type) {
        case SEND_POST_REQUEST: 
            return {...state, loading: true}
        case SEND_POST_SUCCESS: 
            return {...state, loading: false}
        case SEND_POST_ERROR: 
            return {...state, loading: false, error: 'Error while posting'}
        default: 
            return state;
    }
}