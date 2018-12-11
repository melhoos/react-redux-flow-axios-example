//@ flow
import {GET_QUESTIONS} from '../constants/actionTypes';

export function getQuestionsByQuestionSetId(id: number) {
    return {
        type: GET_QUESTIONS,
        payload: {
            request: {
                url: '/questionSetById/'+id,
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            }
        }
    }
}