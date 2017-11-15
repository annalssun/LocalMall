
'use strict'

import React, { Component } from 'react';
import { toastShort } from '../utils/TostUtil';
import { connect } from 'react-redux';
import {
    View,
    Text,
    StatusBar,
    BackAndroid,
    TouchableOpacity,
    Button,
    Platform,
    BackHandler
} from 'react-native'


class AppHome extends Component {
    constructor(props) {
        super(props);

    }


    /*****************************************************************************************/
    static navigationOptions = ({ navigation }) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle: '主页',
        headerStyle: {
            backgroundColor: '#000'
        },
        //导航栏的title的style
        headerTitleStyle: {
            color: 'white',
            //居中显示
            alignSelf: 'center',
        },
        headerBackTitle: null,
        headerLeft: null,
    });
    /*****************************************************************************************/


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'black', alignContent: 'center', alignSelf: 'center' }}
                    onPress={() => { navigate('Login') }}>
                    <Text style={{ fontSize: 15, color: 'white' }}>点我到登录</Text>
                </TouchableOpacity>
            </View>

        );
    }


   
}


function mapStateToProps(state) {
    const { nav } = state;
    return {
        nav
    }
}


export default connect(mapStateToProps)(AppHome);
