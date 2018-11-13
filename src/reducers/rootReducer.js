//@ flow
import {combineReducers} from 'redux';
import {countReducer} from './countReducer.js';
import {sendPostRequestReducer} from './sendPostRequestReducer';
import {getNamesReducer} from './getNamesReducer';

const rootReducer = combineReducers({ 
    countReducer,
    sendPostRequestReducer,
    getNamesReducer
})

export default rootReducer;