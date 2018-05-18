import * as types from '../common/ActionTypes'

const initialState = {
    loading: false,
    data: null
}

export default function GetNewsData(state = initialState, action) {
    switch (action.type) {
        case types.LOADING_DATA_ACTION:
            return Object.assign({}, state, {
                loading: true
            });
            break;
        case types.RECEIVE_DATA_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: action.data
            });
            break;
    }
    return state;
}