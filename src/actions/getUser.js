//@ flow
import {GET_USER} from '../constants/actionTypes';

export function getUser(id: int) {
    return {
        type: GET_USER,
        payload: {
            request: {
                url: '/userById/'+id,
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            }
        }
    }
}