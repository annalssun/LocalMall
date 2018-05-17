


import * as types from '../common/ActionTypes'
const initialState = {
    loading: false,
    data: ''
}

export default function login(state = initialState, action) {
    switch (action.type) {
        case types.PERFORM_LOGIN_ACTION:
            return Object.assign({}, state, {
                loading: true
            });
            break;
        case types.RECEIVE_LOGIN_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: action.result
            });
            break;
    }
    return state;
}