'use strict';

import {combineReducers} from 'redux';
import login from './LoginReducer';
import nav from './NavReducer';
import GetNewsData from './NewsListDataReducer'

const rootReducer = combineReducers({
    login,
    nav,
    GetNewsData
})
export default rootReducer;