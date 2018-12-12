//@ flow
import {combineReducers} from 'redux';
import {removeNameReducer} from './xremoveNameReducer';
import {getNamesReducer} from './xgetNamesReducer';
import {countReducer} from './xcountReducer';
import {addNameReducer} from './xaddNameReducer';

const rootReducer = combineReducers({
    removeNameReducer,
    getNamesReducer,
    countReducer,
    addNameReducer
})

export default rootReducer;