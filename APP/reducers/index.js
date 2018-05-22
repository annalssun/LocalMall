'use strict';

import {combineReducers} from 'redux';
import login from './LoginReducer';
// import nav from './NavReducer';
import NavReducer from './NavReducer'
import GetNewsData from './NewsListDataReducer'

const rootReducer = combineReducers({
    login,
    nav:NavReducer,
    GetNewsData
})
export default rootReducer;