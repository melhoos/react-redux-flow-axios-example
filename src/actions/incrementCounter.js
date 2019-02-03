//@ flow
import {INCREMENT_COUNTER} from '../constants/actionTypes';

export function incrementCounter() {
    return {
        type: INCREMENT_COUNTER 
    }
}