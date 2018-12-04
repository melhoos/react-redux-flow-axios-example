//@ flow
import {GET_QUESTIONS} from '../constants/actionTypes';

export function getQuestions() {
    return {
        type: GET_QUESTIONS,
        payload: {
            request: {
                url: '/questions',
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            }
        }
    }
}