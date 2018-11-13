//@ flow
import {SEND_POST_REQUEST} from '../constants/actionTypes';

export function sendPostRequest(textContent: string) {
    return {
        type: SEND_POST_REQUEST,
        payload: {
            request: {
                url: '/ekorn',
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                data: {
                    text: textContent
                }
            }
        }
    }
}