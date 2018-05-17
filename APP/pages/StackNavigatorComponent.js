
/** 使用React navigattion进行导航，此处进行页面注册*/
'use strict'

import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import AppHome from './AppHome';
import Splash from './Splash';
import Login from './centerContent/login';
import { toastShort } from '../utils/TostUtil';

import { NavigationActions } from 'react-navigation';

import {
    Platform,
    BackHandler,
    BackAndroid,
    StatusBar,
    View
} from 'react-native';

class NavigatorComponent extends Component {
    constructor(props) {
        super(props);
        this.goBackAndroid = this.goBackAndroid.bind(this);
        this.goback= this.goback.bind(this);
    }

    render() {
        return (
                <Navigator
                    navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    })}
                />
        );

    }

    // render(){
    //     return(
    //         <Navigator/>
    //     )
    // }

    goBackAndroid() {
        const { routes } = this.props.nav;
        const {nav} = this.props;
        const {dispatch} = this.props;
        console.log(nav.index);
        if (nav.index===0) {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                //最近2秒内按过back键，可以退出应用。
                BackAndroid.exitApp();
                
                return false;
            }
            this.lastBackPressed = Date.now();
            toastShort("再按一次退出应用");
            return true;
        }
        dispatch(NavigationActions.back())
        return true;
    }

    goback(){
        const { dispatch } = this.props;
        if (dispatch) {
            dispatch(
                NavigationActions.back({})
            );
        }
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.goBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.goBackAndroid);
    
        }
    }


}

// 路由表
const RouteConfigs = {
    home: { screen: AppHome },
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: null,
        }
    },
    Login: { screen: Login },
}

//初始页
const StackNavigatorConfigs = {
    initialRouteName: 'Splash',
};

export const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfigs);





function mapStateToProps(state,ownProps) {      
    const { nav } = state;
    return {
        nav
    }
}


export default connect(mapStateToProps)(NavigatorComponent);