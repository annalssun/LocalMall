
import React, { Component } from 'react';
import StackNavigatorComponent from './pages/StackNavigatorComponent';

import {
    View,
    StatusBar,
    BackAndroid,
    StyleSheet
} from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                 <StatusBar
                    animated={true}
                    hidden={false}
                    backgroundColor={'#00000000'}
                    translucent={true}
                    barStyle={'default'}
                    showHideTransition={'fade'}
                    />
                <StackNavigatorComponent />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFFFFFFF'
    },
});
export default App;