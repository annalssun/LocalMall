

'use strict'

import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';

import {
    InteractionManager,
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'

var { height, width } = Dimensions.get('window');
class Splash extends Component {
    constructor(props) {
        super(props);
        this.gotoHome = this.gotoHome.bind(this);
    }

    componentDidMount() {
        const { navigate } = this.props.navigation;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                // navigate('home');
                this.gotoHome();
            });
        }, 2000);
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image
                    style={{ flex: 1, height: height, width: width }}
                    source={require('../imgs/ic_welcome.jpg')}
                />
            </View>
        );
    }

    gotoHome() {
        const { dispatch } = this.props.navigation;
        if (dispatch) {
            dispatch(
                NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'home' })],
                })
            );
        }

    }

}

export default Splash;