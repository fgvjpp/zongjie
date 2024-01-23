import { ADD, SUBTRACTION } from './constent'

// 同步action
export const addAction = (data) => ({ type: ADD, data })
export const subtrAction = (data) => ({ type: SUBTRACTION, data })

// 异步action
export const subtrAsyncAction = (data) => {
    // 函数可以接受到store.dispatch传过来的dispatch方法
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addAction(data))
        }, 1000)
    }
}