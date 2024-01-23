import styled from 'styled-components';

// 样式组件上可以传参然后通过props获取
export default styled.div`
    .homeSvgIcon {
        color: ${props => props.theme.primaryColor};
    }
`