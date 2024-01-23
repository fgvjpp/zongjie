import React, { memo } from 'react'

// 引入创建好的style组件
import IndexWrapper from './style/index.js'

const index = memo(() => {
    // IndexWrapper组件下可以直接使用组件内部样式
    return (
        <IndexWrapper>
            <h4 className='title font20'>css-in-js样式组件测试页</h4>
        </IndexWrapper>
    )
})

export default index