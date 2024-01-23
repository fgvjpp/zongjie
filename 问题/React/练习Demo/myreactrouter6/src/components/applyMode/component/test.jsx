import useWatch from '@/hooks/useWatch';
import React, { memo, useMemo, useState } from 'react';


// 3. memo可防止父组件更新导致子组件重新渲染  原理是根据子组件中props参数是否发生改变
export default memo(function Test(props) {

    const { countList, handleClick } = props;
    const [num, setNum] = useState(0)
    console.log('applyMode的子组件渲染了');

    // 计算countList总数
    // 使用useMemo这个函数会在组件渲染时执行一次  然后将结果缓存起来  只有当countList发生改变时才会重新执行
    const sum = useMemo(() => {
        console.log('执行了一次');
        return countList.reduce((preData, item) => preData + item, 0);
    }, [countList]);

    const addNum = () => {
        setNum(num + 1)
    }

    // 自定义hook组件
    useWatch(num, (newVal) => {
        handleClick(newVal)
    })

    return (
        <div style={{ background: 'red' }}>
            <p>我是applyMode的子组件</p>
            <button onClick={addNum}>点击执行父组件中的函数</button>
            <div>
                <p>{'总数:' + sum}</p>
                <p>{'Num数' + num}</p>
            </div>
        </div>
    )
})



/*
    useMemo和useCallback的区别
    useMemo用于将结果缓存起来
    useCallback用于记忆传入子组件props的函数，来减少子组件的重复渲染 需要配合子组件使用React.memo包装

    参考https://www.cnblogs.com/mengff/p/17138160.html
*/
