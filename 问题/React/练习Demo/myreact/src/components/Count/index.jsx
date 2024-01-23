import React, { Component } from 'react'
import { ADD, SUBTRACTION, SUBTRACTIONASYNC } from '../../redux/Count/constent'
import { addAction, subtrAction, subtrAsyncAction } from '../../redux/Count/action'
import store from '../../redux/store'
import './index.css'

export default class Count extends Component {
    ipt1 = React.createRef()
    ipt2 = React.createRef()
    sect = React.createRef()
    calculate = () => {
        const { ipt1: { current: { value: val1 } }, ipt2: { current: { value: val2 } }, sect: { current: { value: sectVal } } } = this
        switch (sectVal) {
            case ADD:
                store.dispatch(addAction(+val1 + +val2))
                break;
            case SUBTRACTION:
                store.dispatch(subtrAction(+val1 - +val2))
                break;
            case SUBTRACTIONASYNC:
                store.dispatch(subtrAsyncAction(+val1 - +val2))
                break;
            default:
                break;
        }


    }
    render() {
        const { ipt1, ipt2, sect, calculate } = this
        return (
            <div>
                <div>计算内容⬇⬇⬇</div>
                <div>
                    <input ref={ipt1} type="text" />
                    <select ref={sect}>
                        <option value={ADD}>+</option>
                        <option value={SUBTRACTION}>-</option>
                        <option value={SUBTRACTIONASYNC}>--</option>
                    </select>
                    <input ref={ipt2} type="text" />
                    <button onClick={calculate}>计算</button>
                </div>
                <div>计算结果{store.getState().countReducer}</div>
            </div>
        )
    }
}
