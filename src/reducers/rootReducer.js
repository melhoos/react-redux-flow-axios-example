//@ flow
import {combineReducers} from 'redux';
import {countReducer} from './countReducer.js';
import {addNameReducer} from './addNameReducer';
import {getNamesReducer} from './getNamesReducer';

const rootReducer = combineReducers({ 
    countReducer,
    addNameReducer,
    getNamesReducer
})

export default rootReducer;