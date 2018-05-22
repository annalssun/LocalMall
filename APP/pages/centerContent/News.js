'use strict'

import React, { Component } from 'react';
import TestDataRequest, { }  from '../../common/Test_Data_Request';
import { connect } from 'react-redux';

import  { LoadNewsDataAction } from '../../action/LoadNewsListAction'
import {
    View,
    ListView,
    Text,
    Image,
    StyleSheet
} from 'react-native';

class NewsPage extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     data: new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2 }).cloneWithRows(this.props.data),
        //   };

        this._renderRow = this._renderRow.bind(this);
    }

     /*****************************************************************************************/
     static navigationOptions = ({ navigation }) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle: '新闻页',
        headerStyle: {
            backgroundColor: '#000'
        },
        //导航栏的title的style
        headerTitleStyle: {
            color: 'white',
            //居中显示
            alignSelf: 'center',
        },
        headerBackTitle: null,
        headerLeft: null,
    });
    /*****************************************************************************************/

    componentWillMount(){
        this.props.dispatch(LoadNewsDataAction(1,1));
        // TestDataRequest.getData(1,1,(jsonData)=>{
        //     this.setState({
        //         data: new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2 }).cloneWithRows(jsonData.data),
        //     });
        // });
    }

    render(){
      if (!this.props.data){
          return(
              <Text>Loading......</Text>
          );
      }else{
          return(
            <ListView
                dataSource = {new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2 }).cloneWithRows(this.props.data.data)}
                renderRow={(rowData) => this._renderRow(rowData)}
            >
            </ListView>
        );   
      }
    }


    _renderRow(rowData){
        if(rowData.profile_image){
            return(
                <View style={styles.lvRow}>
                    <Image style={styles.img} source={{uri:rowData.profile_image}}></Image>
                    <View style={styles.textView}>
                        <Text style={styles.textTitle}>{rowData.text}</Text>
                    </View>
                </View>
            );
        }else{
            return(
                <View style={styles.lvRow}>
                    <View style={styles.textView}>
                        <Text style={styles.textTitle}></Text>
                    </View>
                </View>
            );
        }
      
    }
}

const styles = StyleSheet.create({
    lvRow: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
    },
    textView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
  
    textTitle: {
      flex: 1,
      textAlign: 'center',
      color: '#f00',
    },
  
    textContent: {
      flex: 1,
      fontSize: 11,
      color: '#000',
      textAlign: 'center',
    },
  
    img: {
      height: 55,
      width: 100,
    }
  });


  function mapStateToProps(state) {
    const { nav } = state;
    return {
        nav,
        data:state.GetNewsData.data,
        status:state.GetNewsData.loading
        
    }
}






export default connect(mapStateToProps)(NewsPage);
