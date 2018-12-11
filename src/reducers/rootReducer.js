//@ flow
import {combineReducers} from 'redux';
import {getQuestionsReducer} from './getQuestionsReducer';
import {getUserReducer} from './getUserReducer';
import {getQuestionSetsReducer} from './getQuestionSetsReducer';

const rootReducer = combineReducers({
    getUserReducer, 
    getQuestionSetsReducer,
    getQuestionsReducer
})

export default rootReducer;