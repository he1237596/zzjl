import * as types from "./types.js"
const mutations = {
    [types.LOGIN]: (state, data) => {
        //更改token的值
        state.token = data;
        window.sessionStorage.setItem('token', data);
    },
    [types.LOGOUT]: (state) => {
        //登出的时候要清除token
        state.token = null;
        window.sessionStorage.removeItem('token');
    },
    //这步可有可无，根据自己需求去写
    [types.USERNAME]: (state, data) => {
        //把用户名存起来
        state.username = data;
        window.sessionStorage.setItem('username', data);
    },
    [types.TABCHANGE]: (state, data) => {
        state.selected = data;
    }
};

export default mutations;