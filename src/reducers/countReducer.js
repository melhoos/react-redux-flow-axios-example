
//@ flow
import {INCREMENT_COUNTER, DEINCREMENT_COUNTER} from '../constants/actionTypes';

const initialState = {
    count: 0
}

export function countReducer( state = initialState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER: 
            return {...state, count: state.count += 1}
        case DEINCREMENT_COUNTER:
            return {...state, count: state.count -= 1}
        default: 
            return state;
    }
}