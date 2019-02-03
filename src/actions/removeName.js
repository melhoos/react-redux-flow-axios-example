//@ flow
import {REMOVE_NAME} from '../constants/actionTypes';

export function removeName(id: number) {
    return {
        type: REMOVE_NAME,
        payload: {
            request: {
                url: '/deleteUser/'+id,
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            }
        }
    }
}