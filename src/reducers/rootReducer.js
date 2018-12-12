//@ flow
import {combineReducers} from 'redux';
import {getQuestionsReducer} from './getQuestionsReducer';
import {getUserReducer} from './getUserReducer';
import {getQuestionSetsReducer} from './getQuestionSetsReducer';
import {addUserAnswerReducer} from './addUserAnswerReducer';

const rootReducer = combineReducers({
    getUserReducer, 
    getQuestionSetsReducer,
    getQuestionsReducer,
    addUserAnswerReducer
})

export default rootReducer;