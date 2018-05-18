'use strict'

import React, { Component } from 'react';


import NetComponent, { } from './NetComponent';


import { GET_TEST_DATA_BASE } from './Request';

class TestDataRequest extends Component{

       /**
         * post key-value 形式 hader为'Content-Type': 'application/x-www-form-urlencoded'
         * @param {*} page 页数 
         * @param {*} type 类型
         * @param {*} callback  回调函数
         */
    static async getData(page,type,callback) {
        let requestUrl=GET_TEST_DATA_BASE+'type='+type+'&page='+page;
        console.log("**************************************************")
        console.log(requestUrl)
        NetComponent.get(requestUrl,"",callback);
    }
}

export default TestDataRequest;