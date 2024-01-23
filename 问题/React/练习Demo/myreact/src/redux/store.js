import { configureStore, combineReducers } from '@reduxjs/toolkit' // 安装reduxjs/toolkit包用于创建配置Store仓库
import thunk from 'redux-thunk' // 安装redux-thunk包用于支持异步action  不加这个包也行
import countReducer from './Count/reducer'

const reducer = combineReducers({ countReducer }) // 合并所有Reducer处理模块
export default configureStore({
    reducer,
    middleware: [thunk]
})