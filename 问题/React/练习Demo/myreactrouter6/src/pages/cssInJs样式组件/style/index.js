import styled from "styled-components";

// 创建style组件       styled.div表示是用div包裹在最外层的元素
const indexWrapper = styled.div`
    .title {
    color: red;
    &.font20 {
        font-size: 20px;
    }
}
`

export default indexWrapper
