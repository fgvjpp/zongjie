import React, { useState } from 'react'

export default function FnCompn() {
    const [sum, setSum] = useState(0)
    return (
        <div>
            函数组件中的state{sum}
            <button onClick={() => setSum(sum + 1)}>点击设置sum</button>
        </div>
    )
}


