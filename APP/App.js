

'use strict'

import React, { Component } from 'react';
import StackNavigatorComponent from './pages/StackNavigatorComponent';

import {
    View,
    StatusBar,
    BackAndroid,
    StyleSheet
} from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='transparent'
                    style={{ height: 30 }}
                />
                <StackNavigatorComponent />
            </View>
        );
    }
}

export default App;