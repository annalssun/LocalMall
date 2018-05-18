import * as types from '../common/ActionTypes';

import  NetComponent, { } from '../common/NetComponent'
import TestDataRequest, { } from '../common/Test_Data_Request'

export function LoadNewsDataAction(btype,page){
    return ((dispatch)=> {
        dispatch(LoadingDataAction());
        TestDataRequest.getData(page,btype,(jsonData)=>{
            dispatch(ReceiveDataAction(jsonData));
        });
    });  
}


function LoadingDataAction(){
    return{
        type:types.LOADING_DATA_ACTION,
    }; 
}

function ReceiveDataAction(result){
    return {       
        type : types.RECEIVE_DATA_ACTION,
        data : result,
       
    };
}