//@ flow
import {SEND_USERANSWER} from '../constants/actionTypes';

export function addUserAnswer(data: object) {
    return {
        type: SEND_USERANSWER,
        payload: {
            request: {
                url: '/addUserAnswer',
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                data: {
                    data
                }
            }
        }
    }
}

/* data = 
{
    "questionSetId": 1,
    "questionId": 3,
    "userAnswerValues": [
        {
            "value": 3,
            "freeText": null,
            "answerAlternativeId": 1
        }
    ]
} */