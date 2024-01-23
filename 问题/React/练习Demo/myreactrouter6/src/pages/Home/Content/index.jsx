import React from 'react'
import { useLocation, useNavigate, useNavigationType, useParams, useResolvedPath, useSearchParams } from 'react-router-dom'

export default function Content(props) {
    console.log(props);
    // useResolvedPath可以解析一个url上中的params query hash参数
    const getUrlParams = useResolvedPath('http://localhost:3000/#/home/content/15?name=hahahah&title=%E5%93%88%E5%93%88')
    console.log('useResolvedPath测试---------', getUrlParams);

    // useNavigationType获取用户是通过哪种方式跳转到当前页面的  返回值是POP PUSH Replace
    const target = useNavigationType()
    console.log("useNavigationType测试----------", target);

    // 编程式路由hook
    const navigate = useNavigate()

    // useParams获取params参数
    const { id } = useParams()
    const [search, setSearch] = useSearchParams()
    // useSearchParams获取浏览器上的query参数
    // 第一个参数可以通过get获取到对应的某个值
    // 第二个参数可以修改query参数

    const searchId = search.get('id')
    const searchTitle = search.get('title')

    // useLocation中可以获取路由传过来的state参数
    const { state } = useLocation()
    console.log('路由state参数----------', state);

    function back() {
        navigate(-1)
    }
    return (
        <div>
            <p>content内容</p>
            <p>params传参{id}</p>
            <p>search传参{searchId},{searchTitle}</p>
            <button onClick={() => setSearch('name=hahahah&title=哈哈')}>点击修改search上所有参数</button>
            <button onClick={back}>点击返回back</button>
        </div>
    )
}
