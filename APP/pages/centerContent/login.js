'use strict'

import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={{ backgroundColor: "#f5f5f5", flex: 1 }}>
                <View style={styles.topbar_bg}>
                    <TouchableOpacity style={styles.topbar_left_item}
                        onPress={}>
                        <Image style={{ height: 20, width: 13 }}
                            source={require('../../imgs/ic_center_back.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.topbar_center_bg}>
                    <Text style={styles.topbar_center_tv}>登录</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.topbar_right_item}
                    onPress={}>
                        <Text style={styles.topbar_right_tv}>注册</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    topbar_bg: {
        height: 48,
        backgroundColor: 'black',
        flex: 'row'
    },
    topbar_left_item: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topbar_left_item_tv: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'center'
    },
    topbar_center_bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topbar_center_tv: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    topbar_right_item: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topbar_right_tv: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'center'
    }
});

