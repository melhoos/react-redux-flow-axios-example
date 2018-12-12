//@ flow
import {SEND_USERANSWER, SEND_USERANSWER_SUCCESS, SEND_USERANSWER_ERROR} from '../constants/actionTypes';

const initialState = {
    loading: false
}

export function addUserAnswerReducer( state = initialState, action) {
    switch (action.type) {
        case SEND_USERANSWER: 
            return {...state, loading: true}
        case SEND_USERANSWER_SUCCESS: 
            return {...state, loading: false}
        case SEND_USERANSWER_ERROR: 
            return {...state, loading: false, error: 'Error while posting'}
        default: 
            return state;
    }
}