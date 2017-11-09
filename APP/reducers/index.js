'use strict';

import {combineReducers} from 'redux';
import login from './LoginReducer';

const rootReducer = combineReducers({
    login
})
export default rootReducer;