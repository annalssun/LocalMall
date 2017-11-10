
'use strict'

import React, { Component } from 'react';

import {
    View,
    Text,
    StatusBar,
    BackAndroid
} from 'react-native'


class AppHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{
                    fontSize: 25,
                    color: 'black',
                    alignSelf: 'center'
                }}>
                    进入主页导航条没有问题
        </Text>
            </View>
        );
    }

}

export default AppHome;