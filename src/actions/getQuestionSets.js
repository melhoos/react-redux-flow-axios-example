//@ flow
import {GET_QUESTIONSETS} from '../constants/actionTypes';

export function getQuestionSets() {
    return {
        type: GET_QUESTIONSETS,
        payload: {
            request: {
                url: '/questionSetsSimple',
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            }
        }
    }
}