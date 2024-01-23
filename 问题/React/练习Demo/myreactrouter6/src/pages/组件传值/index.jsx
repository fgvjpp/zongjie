import React, { Fragment } from 'react'
import Test from './components/Test'
import Test2 from './components/Test2'

export default function Index() {
    // 将组件通过参数传递进子组件当中进行渲染   插槽渲染方式
    return (
        <Fragment>
            组件传值页
            <Test Test2={<Test2 />}>
                Liucsa
            </Test>
        </Fragment>
    )
}
