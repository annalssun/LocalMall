
/** 使用React navigattion进行导航，此处进行页面注册*/
'use strict'

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import AppHome from './AppHome';
import Splash from './Splash'
import Login from './centerContent/login'

class NavigatorComponent extends Component {

    render() {
        return (
            <Navigator />
        );
    }
}

// 路由表
const RouteConfigs = {
    home: { screen: AppHome },
    Splash: {
         screen: Splash,
         navigationOptions: {
            header:null,
        }
     },
    Login: { screen: Login },
}

//初始页
const StackNavigatorConfigs = {
    initialRouteName: 'Splash',
};

const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfigs);

export default NavigatorComponent;