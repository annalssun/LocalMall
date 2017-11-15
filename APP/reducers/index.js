'use strict';

import {combineReducers} from 'redux';
import login from './LoginReducer';
import nav from './NavReducer';

const rootReducer = combineReducers({
    login,
    nav
})
export default rootReducer;