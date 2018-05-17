'use strict'

import React, { Component } from 'react';

import { 
    StatusBar,
    View
} from "react-native"

class CommonStatusBar extends Component{
    render(){
        return(
            <View>
                <StatusBar
                    hidden={false} //是否隐藏状态栏。
                    animated={true} //是否需要动画效果
                    translucent={true} //android平台，是否有半透明效果,如果为true,状态栏会浮在下面的布局上面，
                    barStyle={'default'} //可以取值 'default', 'light-content', 'dark-content'它的默认是default,
                    />
            </View>
        );
    }
}

export default CommonStatusBar;