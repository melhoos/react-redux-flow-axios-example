//@ flow
import {SEND_POST} from '../constants/actionTypes';

export function addName(name: string) {
    return {
        type: SEND_POST,
        payload: {
            request: {
                url: '/addUser',
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                data: {
                    Name: name
                }
            }
        }
    }
}