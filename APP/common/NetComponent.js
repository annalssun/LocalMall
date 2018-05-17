
'use strict'

import React, { Component } from 'react';

import MyConsole from '../utils/MyConsole';
import { toastShort } from '../utils/TostUtil';

class NetComponent extends Component {
    constructor(props) {
        super(props);
    }

    /**
    * 普通的get请求 
    * @param {*} url 地址
    * @param {*} params  参数
    * @param {*} callback  成功后的回调
    */

    static async get(url, params, callback) {
        //采用ES7async await方式
        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: params
            });
            let responseJson = await response.json();
            callback(responseJson);
        } catch (error) {
            MyConsole.printError(error);
        }
    }
    /**
         * post key-value 形式 hader为'Content-Type': 'application/x-www-form-urlencoded'
         * @param {*} url 
         * @param {*} params 
         * @param {*} callback 
         */

    static async post(url, params, callback) {
        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: params
            });
            let responseJson = await response.json();
            callback(responseJson);
        } catch (error) {
            MyConsole.printError(error);
        }
    }

    /**
     * post json形式  header为'Content-Type': 'application/json'
     * @param {*} url 
     * @param {*} service 
     * @param {*} jsonObj 
     * @param {*} callback 
     */
    static async postJson(url, jsonObj, callback) {
        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonObj)
            });
            let responseJson = await response.json();
            callback(responseJson);
        } catch (error) {
            MyConsole.printError(error);
        }

    }



}

export default NetComponent;