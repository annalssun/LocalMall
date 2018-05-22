'use strict';

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import {reactMiddleware} from '../utils/MyNaviRedux'


const createStoreWithMiddleware = applyMiddleware(thunkMiddleware,reactMiddleware)(createStore);
export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState);
	return store;
}