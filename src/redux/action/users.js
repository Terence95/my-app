/**
 * user.js
 * 2017.8.6
 **/

/*
 * action 类型
 */
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';


/*
 * action 创建函数
 */
export const registerAction = (newUser) => {
    return {
        type: REGISTER_USER,
        data: newUser,
    }
};


export const loginAction = (user) => {
    return {
        type: LOGIN_USER,
        data: user,
    }
};

export const loginSuccessAction = (token) => {
    return {
        type: LOGIN_USER_SUCCESS,
        data: token,
    }
};

export const loginFailureAction = (error) => {
    return {
        type: LOGIN_USER_FAILURE,
        data: error,
    }
};

export const registerSuccessAction = (saveSuccess) => {
    return {
        type: REGISTER_USER_SUCCESS,
        data: saveSuccess,
    }
};

export const registerFailureAction = (error) => {
    return {
        type: REGISTER_USER_FAILURE,
        data: error,
    }
};

