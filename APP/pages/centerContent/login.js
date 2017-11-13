'use strict'

import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';

var username='';
var password='';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    /*****************************************************************************************/
    static navigationOptions = ({ navigation }) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle: '登录',
        headerStyle: {
            backgroundColor: '#000'
        },
        headerLeft: (//导航栏左侧区域
            <TouchableOpacity style={styles.topbar_left_item}
                onPress={() => { navigation.goBack() }}>
                <Image style={{ height: 20, width: 13 }}
                    source={require('../../imgs/ic_center_back.png')} />
            </TouchableOpacity>

        ),
        //导航栏的title的style
        headerTitleStyle: {
            color: 'white',
            //居中显示
            alignSelf: 'center',
        },
        headerRight: (//导航栏右侧区域
            <TouchableOpacity style={styles.topbar_right_item}>
                <Text style={styles.topbar_right_tv}>注册</Text>
            </TouchableOpacity>
        ),
    });

    /*****************************************************************************************/

    render() {
        return (
            <View style={{ backgroundColor: "#f5f5f5", flex: 1 }}>
                <View style={{ backgroundColor: 'white', marginTop: 13 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: 45 }}>
                        <Image style={{ width: 17, height: 14 }}
                            source={require('../../imgs/logre/ic_us_icon.png')} />
                        <TextInput
                        style={{height:40,textAlign:'left',textAlignVertical:'center',flex:1}}
                        placeholder="手机/邮箱"
                        placeholderTextColor="#aaa"
                        underlineColorAndroid="transparent"
                        numberOfLines={1}
                        multiline={true}
                        onFocus={true}
                        ref={'username'}
                        onChangeText={(text)=>{
                            username=text
                        }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    topbar_bg: {
        height: 48,
        backgroundColor: 'black',
        flexDirection: 'row'
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

export default Login;

