

'use strict'

import React, { Component } from 'react';

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
    }

    componentDidMount() {
        console.log(this.props.navigation)
        const { navigate } = this.props.navigation;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigate('home');
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

}

export default Splash;