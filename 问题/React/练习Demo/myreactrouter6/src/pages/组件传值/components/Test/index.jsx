import React, { Fragment } from 'react'

export default function Test(props) {
    console.log(props);
    const { children, Test2 } = props
    return (
        <Fragment>
            <div>组件传值的子组件数据⬇️⬇️⬇️</div>
            {children}
            {Test2}
        </Fragment>
    )
}
