//@ flow
import {combineReducers} from 'redux';
import {removeNameReducer} from './removeNameReducer';
import {getNamesReducer} from './getNamesReducer';
import {countReducer} from './countReducer';
import {addNameReducer} from './addNameReducer';

const rootReducer = combineReducers({
    removeNameReducer,
    getNamesReducer,
    countReducer,
    addNameReducer
})

export default rootReducer;