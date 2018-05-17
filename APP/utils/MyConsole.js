


import React, { Component } from 'react';
var isShowLog = true;
var Tag = "Annalssun"


class MyConsole extends Component {
    static printi(content) {//打印正常日志
        if (isShowLog) {
            console.log(Tag, content)
        }
    }

    static printWarn(content) {  //打印提醒日志
        if (isShowLog) {
            console.warn(Tag, content)
        }
    }

    static printError(content) {  //打印错误日志
        if (isShowLog) {
            console.error(Tag, content)
        }
    }
}

export default MyConsole;


