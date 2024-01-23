import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from 'react-router-dom';
import ApplyMode from '@/components/applyMode/applyMode';
import { editUidAsync, setUid } from '@/redux/Slice/app';
import { setUsername, setId } from '@/redux/Slice/user';

// 1.引入scss模块化文件
import indexStyle from './styles/index.module.scss'


export default function About() {
    console.log('About渲染了');
    // useRef可以用来获取dom元素
    const ipt = useRef(null)
    const ipt2 = useRef(null)
    const ipt3 = useRef(null)
    const navigate = useNavigate()

    // useSelector可以读取当前Provider组件上store中的state数据
    const { username, id } = useSelector(state => state.userReducer)
    const { userInfo: { nick, uid } } = useSelector(state => state.appReducer)
    const dispatch = useDispatch()

    function editName() {
        const iptVal = ipt.current.value
        dispatch(setUsername(iptVal))
    }
    function editId() {
        const iptVal = ipt2.current.value
        dispatch(setId(iptVal))
    }
    function editUid() {
        // 异步修改方法一
        const iptVal = ipt3.current.value
        setTimeout(() => {
            dispatch(setUid(iptVal))
        }, 1000)
    }
    function editUidAsyncReducers() {
        // 异步修改方法二
        const iptVal = ipt3.current.value

        // 异步reducers1-4.通过调用editUidAsync函数即可执行extraReducers中的对应异步action函数从而修改store中的state值
        dispatch(editUidAsync(iptVal))
    }

    return (
        <div>
            <p>About页</p>
            <div>
                <button onClick={() => navigate('./UserReducer')}>点击前往useReducer页</button>
            </div>
            <div className='aboutRouter'>
                <Outlet />
            </div>
            <ApplyMode />
            <div style={{ backgroundColor: 'green' }}>
                <p>redux测试⬇️⬇️⬇️</p>
                <div>
                    <p>userReducer数据</p>
                    <p>name:{username}</p>
                    <p>Id:{id}</p>
                </div>
                <div>
                    <p>appReducer数据</p>
                    <p>nick:{nick}</p>
                    <p>uid:{uid}</p>
                </div>
                <div>
                    <div>
                        <p>设置name</p>
                        <input ref={ipt} type="text" />
                    </div>
                    <div>
                        <p>设置id</p>
                        <input ref={ipt2} type="text" />
                    </div>
                    <div>
                        <p>设置uid</p>
                        <input ref={ipt3} type="text" />
                    </div>
                    {/* 2.模块化文件使用方法 indexStyle模块名称 后面跟上当前模块内部类名(不存在的类名也能写) */}
                    <button className={`${indexStyle.aa} ${indexStyle.btn}`} onClick={editName}>点击修改name</button>
                    <button onClick={editId}>点击修改id</button>
                    <button onClick={editUid}>点击修改异步uid 方法一</button>
                    <button onClick={editUidAsyncReducers}>点击修改异步uid 方法二</button>
                </div>
            </div>
        </div >
    )
}
