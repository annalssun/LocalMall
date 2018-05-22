import React, {Component} from 'react';
import{ 
} from 'react-native';
import {Provider} from 'react-redux'
import configureStore from './store/configure-store'

import App from './App'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const store = configureStore();

class rootApp extends Component {
	render() {
		return (
			<Provider store={store}>
               <App/>
            </Provider>
		   )
	}
}
export default rootApp;