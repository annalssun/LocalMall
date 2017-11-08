
import * as types from '../common/ActionTypes';
import {HOST,LOGIN_ACTION} from  '../common/Request';

export function performLoginAction(username,pws){
    return (dispatch) =>{
        dispatch(perfromLogin());
    }
}


function perfromLogin(){
    return {
        type:types.PERFORM_LOGIN_ACTION,
    }
}

function receiveLoginResult(result){
    return {
        type:types.RECEIVE_LOGIN_ACTION,
        data:result
    }
}