//@ flow
import {combineReducers} from 'redux';
import {countReducer} from './countReducer.js';
import {addNameReducer} from './addNameReducer';
import {getNamesReducer} from './getNamesReducer';
import {removeNameReducer} from './removeNameReducer';

const rootReducer = combineReducers({ 
    countReducer,
    addNameReducer,
    getNamesReducer,
    removeNameReducer
})

export default rootReducer;