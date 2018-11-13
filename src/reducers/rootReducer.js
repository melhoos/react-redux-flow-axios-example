//@ flow
import {combineReducers} from 'redux';
import {countReducer} from './countReducer.js';
import {sendPostRequestReducer} from './sendPostRequestReducer';

const rootReducer = combineReducers({ 
    countReducer,
    sendPostRequestReducer
})

export default rootReducer;