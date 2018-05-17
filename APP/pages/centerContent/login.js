'use strict'

import React, { Component } from 'react';

import { toastShort } from '../../utils/TostUtil';
import LoginShortLine from '../../component/LoginShortLine'

import { connect } from 'react-redux';


import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

var username = '';
var password = '';

var { width, height } = Dimensions.get('window');

class Login extends Component {
    constructor(props) {
        super(props);
        this.buttonRegistOrLoginAction= this.buttonRegistOrLoginAction.bind(this);
    }

    /*****************************************************************************************/
    static navigationOptions = ({ navigation }) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle: '登录',
        headerStyle: {
            backgroundColor: '#ffff'
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
                <View style={{ backgroundColor: 'white', marginTop: 13, marginLeft: 10, marginRight: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: 45 }}>
                        <Image style={{ width: 17, height: 14, marginLeft: 8 }}
                            source={require('../../imgs/logre/ic_us_icon.png')} />
                        <TextInput
                            style={{ height: 40, textAlign: 'left', textAlignVertical: 'center', flex: 1 }}
                            placeholder="手机/邮箱"
                            placeholderTextColor="#aaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            multiline={true}
                            autoFocus={true}
                            ref={'username'}
                            onChangeText={(text) => {
                                username = text
                                toastShort(username);
                            }}
                        />
                    </View>
                    <LoginShortLine />
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: 45 }}>
                        <Image style={{ width: 20, height: 18, marginLeft: 8 }}
                            source={require('../../imgs/logre/ic_pwd_icon.png')} />
                        <TextInput
                            style={{ height: 40, textAlign: 'left', textAlignVertical: 'center', flex: 1 }}
                            placeholder="密码"
                            placeholderTextColor="#aaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            multiline={true}
                            ref={'password'}
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                password = text
                                toastShort(password);
                            }}
                        />
                    </View>
                </View>

                <TouchableOpacity style={{ justifyContent: 'center', marginTop: 13, alignItems: 'center' }}>
                    {/* <Image source={require('../../imgs/logre/ic_login_btn.png')}
                        style={{ width: 300, height: 40, justifyContent: 'center', alignItems: 'center' }}> */}
                        <Text style={{ color: 'white' }}>登录</Text>
                    {/* </Image> */}
                </TouchableOpacity>
            </View>
        );
    }


    buttonRegistOrLoginAction(){

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


function mapStateToProps(state,ownProps) {      
    const { login } = state;
    return {
        login
    }
}


export default connect(mapStateToProps)(Login);

