//使用RTK构建store
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 异步reducers1-1.创建异步action
// 第一个参数是当前action名称  第二个参数是回调函数用来专门执行异步代码的
export const editUidAsync = createAsyncThunk('app/time', async (iptVal, { dispatch, getState }) => {
    console.log(getState().appSlice.userInfo); // 可以拿到当前state值
    // 异步reducers1-2.这里放异步代码
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(iptVal)
        }, 1000)
    })
})

const appSlice = createSlice({
    name: 'app',// 会自动生成action中的type
    initialState: { // 设置初始的state
        userInfo: {
            uid: 1,
            nick: 'Hiyes'
        }
    },
    reducers: {//指定state的各种操作  类似vuex中mutations
        setUsername(state, action) { // state可以直接修改
            state.userInfo.nick = action.payload;
        },
        setUid(state, { payload }) {
            state.userInfo.uid = payload;
        }
    },
    // 异步reducers1-3.extraReducers里面放异步action函数
    // 创建异步action函数方法：通过从异步action里面的fulfilled方法获取createAsyncThunk创建时定义的异步action名称从而创建action函数
    extraReducers: {
        [editUidAsync.fulfilled](state, { payload }) {
            state.userInfo.uid = payload;
        },
        // 两种写法
        // 'app/time/fulfilled': function (state, { payload }) {
        //     state.userInfo.uid = payload;
        // }
    }
})


export const { setNick, setUid } = appSlice.actions; // 从reducers里获取所有state的操作并导出
export const { reducer: appReducer } = appSlice;