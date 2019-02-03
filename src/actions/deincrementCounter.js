//@ flow
import {DEINCREMENT_COUNTER} from '../constants/actionTypes';

export function deincrementCounter() {
    return {
        type: DEINCREMENT_COUNTER
    }
}