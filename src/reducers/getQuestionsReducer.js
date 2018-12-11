//@ flow
import {GET_QUESTIONS, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_ERROR} from '../constants/actionTypes';

const initialState = {
    loading: false,
    data: [] 
}

export function getQuestionsReducer( state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS: 
            return {...state, loading: true}
        case GET_QUESTIONS_SUCCESS: 
            return {...state, loading: false, data: action.payload.data.Questions}
        case GET_QUESTIONS_ERROR: 
            console.log("GET_QUESTIONS_ERROR");
            return {...state, loading: false, error: "error while getting question"}
        default: 
            return state;
    }
}