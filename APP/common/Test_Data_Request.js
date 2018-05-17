'use strict'

import React, { Component } from 'react';

import {GET_TEST_DATA_BASE} from './Request';
import NetComponent, { } from './NetComponent';


class TestDataRequest extends Component{

       /**
         * post key-value 形式 hader为'Content-Type': 'application/x-www-form-urlencoded'
         * @param {*} page 页数 
         * @param {*} type 类型
         * @param {*} callback  回调函数
         */
    static async getData(page,type,callback) {
        requestUrl=GET_TEST_DATA_BASE+'type='+type+'&page='+page;
        NetComponent.get(requestUrl,"",callback);
    }
}