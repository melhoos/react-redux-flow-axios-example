//@ flow
import {GET_NAMES} from '../constants/actionTypes';

export function getNames() {
    return {
        type: GET_NAMES,
        payload: {
            request: {
                url: '/users',
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            }
        }
    }
}