//@ flow
import {REMOVE_NAME, REMOVE_NAME_SUCCESS, REMOVE_NAME_ERROR } from '../constants/actionTypes';

const initialState = {

}

export function removeNameReducer( state = initialState, action) {
    switch (action.type) {
        case REMOVE_NAME: 
            return state
        case REMOVE_NAME_SUCCESS: 
            return state
        case REMOVE_NAME_ERROR: 
            console.log("REMOVE_NAME_ERROR");
            return {...state, error: 'Error while removing'}
        default: 
            return state;
    }
}