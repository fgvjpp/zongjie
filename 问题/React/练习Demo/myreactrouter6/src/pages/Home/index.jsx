import React, { useState } from 'react'
import { Outlet, NavLink, useNavigate, useOutlet } from "react-router-dom";

export default function Home() {
    // useOutlet获取当前子路由信息 如果子路由已经渲染出来了就可以获取到子路由信息  否则为null
    const getOutletInfo = useOutlet()
    console.log(getOutletInfo);
    const [count, setCount] = useState(0)
    // 编程式路由hook
    const navigate = useNavigate()
    function link({ id, title }) {
        // 第二个对象中只能传state参数   param参数和query参数只能通过在第一个参数中进行拼接
        navigate(`./content?id=${id}&title=${title}`, {
            replace: true,
            state: {
                id: `我是state中的id${id}`,
                title: `我是state中的title${title}`
            }
        })
    }
    return (
        <div>
            <div>
            <button onClick={() => navigate('/imgLoad')}>点击前往图片懒加载页</button>
                <button onClick={() => navigate('/svgicon')}>点击前往SVG组件页</button>
                <button onClick={() => navigate('/cssinjs')}>点击前往css-in-js页</button>
                <button onClick={() => navigate('/about')}>点击前往about页</button>
                <button onClick={() => navigate('/commentsParameters')}>点击前往commentsParameters页</button>
            </div>
            home页
            {/* 设置NavLink是否选中类名 如果不设置默认是active */}
            <div>
                <NavLink className={({ isActive }) => isActive ? 'homeActive' : 'abc'} to="./content/15" children={'点击跳转content子路由页'} />
            </div>
            {/* 使用Outlet组件显示子路由 */}
            <div>
                <Outlet />
            </div>
            <button onClick={() => link({ id: 11, title: '我是标题' })}>编程式路由点击</button>
            <div>
                <p>useState方法测试⬇️⬇️⬇️</p>
                <div>{count}</div>
                <button onClick={() => setCount(count + 1)}>点击++</button>
            </div>
        </div>
    )
}
