/**
 * reducer/users.js
 */

// Immutable Data
// 对Immutable对象的任何修改或者添加删除操作都会返回一个新的Immutable对象
import Immutable from 'immutable';
//从 action 导入需要的 action 类型
import {REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE} from '../action/users';


// 初始化状态
const initialState = Immutable.fromJS({
    newUser: null,
    error: null,
    saveSuccess: false,
});

// reducer 是一个纯函数,接收旧的 state 和 action, 返回新的 state。
export const users = (state = initialState, action = {}) => {
    switch (action.type) {
        case REGISTER_USER:
            return state.merge({
                'newUser':action.data,
                'saveSuccess': false,
                'error': null,
            });
        case REGISTER_USER_SUCCESS:
            return state.set('saveSuccess', action.data);
        case REGISTER_USER_FAILURE:
            return state.set('error', action.data);
        default:
            return state

    }
};
