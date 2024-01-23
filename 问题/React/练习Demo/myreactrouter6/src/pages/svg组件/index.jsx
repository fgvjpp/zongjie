import React, { memo } from 'react'

// SVG
import SVGIcon from '@/components/SvgIcon' // 1.引入组件
import home from '@/assets/svg/home.svg'  // 2.引入svg文件

// 样式模块
import IndexWrapper from './style/index'

const index = memo(() => {
    return (
        <IndexWrapper>
            <h4>SVG组件测试页</h4>
            {/* 3.将svg文件传入src中 */}
            <SVGIcon className="homeSvgIcon" src={home} />
        </IndexWrapper>
    )
})

export default index