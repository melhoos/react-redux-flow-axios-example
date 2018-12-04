//@ flow
import {combineReducers} from 'redux';
import {countReducer} from './countReducer.js';
import {addNameReducer} from './addNameReducer';
import {getNamesReducer} from './getNamesReducer';
import {removeNameReducer} from './removeNameReducer';
import {getQuestionsReducer} from './getQuestionsReducer';

const rootReducer = combineReducers({ 
    countReducer,
    addNameReducer,
    getNamesReducer,
    removeNameReducer,
    getQuestionsReducer
})

export default rootReducer;