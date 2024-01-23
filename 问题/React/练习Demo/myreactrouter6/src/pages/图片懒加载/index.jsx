import React, { memo } from 'react'

import IndexStyle from './style/index'

const index = memo(() => {
    function handleImgLoaded() {
        console.log('img加载完毕');
    }
  return (
    <IndexStyle>
        <p>图片懒加载页</p>
        <img data-src={require("@/assets/image/1056130.jpg")} onLoad={handleImgLoaded} className="lazyload imgTest" alt='' />
    </IndexStyle>
  )
})

export default index