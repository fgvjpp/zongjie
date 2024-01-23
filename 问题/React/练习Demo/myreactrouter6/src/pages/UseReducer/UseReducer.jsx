import React, { useReducer } from 'react'
import { increment, decrement } from './action'
import reducer from './reducer'

export default function UseReducer() {
    // useReducer第一个参数是reducer处理函数 第二个参数是初始值    解构出的第一个参数是状态  第二个是用来调用reducer处理函数该函数返回值是用来改变状态的
    const [count, countDispatch] = useReducer(reducer, 0)
    return (
        <div>
            <p>UseReducer Hook</p>
            <div>{count}</div>
            <button onClick={() => countDispatch(decrement())}>点击减1</button>
            <button onClick={() => countDispatch(increment())}>点击加1</button>
        </div>
    )
}
