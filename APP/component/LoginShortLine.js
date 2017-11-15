

import React, { Component } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';

var { height, width } = Dimensions.get("window");

const LoginShortLine = () => (
    <View style={{ backgroundColor: 'white' }}>
        <Image source={require('../imgs/ic_short_bar.png')}
            style={styles.short_line} />
    </View>
);

const styles = StyleSheet.create({
    shortLine: {
        marginLeft: 10,
        marginRight: 10,
        width: width - 20
    },
});

export default LoginShortLine;