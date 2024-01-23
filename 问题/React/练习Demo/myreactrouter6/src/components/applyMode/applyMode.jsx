import React, { memo, useCallback, useRef, useState } from 'react'
import Test from './component/test';

export default memo(function ApplyMode() {
    // 1.原因当父组件更新时会导致所有子组件重新渲染
    // 2.所以为了防止子组件重新渲染 可以给每个子组件里添加React.memo
    console.log('ApplyMode组件渲染了');
    const [count, setCount] = useState(0)
    const [countList, setcountList] = useState([1, 5])


    const countRef = useRef(null) // useRef只在组件中存在一次 当组件重新渲染时也不会重新创建  所以在括号内传入count是不具有响应式的
    countRef.current = count  // 组件每次重新渲染时进行重新赋值也能实现 代码层响应式数据 

    // 通过使用useCallback，我们可以避免在每次渲染时重新创建函数，从而提高组件的性能。
    // useCallback的第一个参数是一个回调函数，第二个参数是一个依赖项数组。如果依赖项数组为空，那么useCallback返回的函数永远不会改变。如果依赖项数组不为空，那么只有在依赖项发生变化时，useCallback才会返回一个新函数。
    const handleClick = useCallback((params) => {
        // 4.重新渲染会导致 函数都会被重新创建   这样会导致传入给子组件中的handleClick原始基址发生改变 然后React.memo判断此时props发生改变就会更新子组件
        console.log('重新渲染会导致 函数都会被重新创建');

        console.log(params); // 通过形参传入的数据是动态的
        console.log(count); // 2-1.因为useCallback记忆函数时当前函数体中数据状态只保留第一次记忆时的状态 所以一直获取是0   可以将count添加到第二个参数的数组中当该count发生改变时就返回一次新函数  但这样会导致子组件重新渲染 因为该函数基址发生改变了
        console.log(countRef.current); // 2-2.可以通过useRef将数据转换成 代码层响应式数据 
    }, [])



    return (
        <div>
            <p>applyMode组件渲染方式测试</p>
            <div>{count}</div>
            <button onClick={() => setCount((preState) => preState + 1)}>点击++</button>

            {/* countList因为存在state里也是具有缓存效果的 所以不会改变原始基址  子组件不会进行重新渲染 */}
            <Test handleClick={handleClick} countList={countList} />
        </div>
    )
})
