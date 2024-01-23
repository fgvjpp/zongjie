import React, { Component } from 'react'
import { connect } from "react-redux"; // react-redux是react库里的状态管理插件
import { addAction } from "../../redux/Count/action";

// 该组件为react-redux容器所包裹 可以通过store更新状态
class Count2UI extends Component {
    render() {
        console.log(this.props);
        const { countReducer, btnClick } = this.props;
        return (
            <div>
                <p>当前为count2页</p>
                <div>{countReducer}</div>
                <button onClick={() => btnClick(22)}>Count2点击+</button>
            </div>
        )
    }
}


const mapStateToProps = state => ({ countReducer: state.countReducer })  // state是reducer中返回的状态  相当于store.getState()是总状态对象 然后从里面拿取该组件所需要的reducer处理模块


const mapDispatchToProps = dispatch => ({   // dispatch发送action方法通知reducer处理
    btnClick: data => dispatch(addAction(data))
})


// connect调用时返回新的组件(container) 通过新的组件渲染到页面上  新组件标签属性需传入store={store}仓库
// connect第一个调用括号中接收2个函数 mapStateToProps该函数中能接收到state状态 mapDispatchToProps该函数中能接收到dispatch  传递到数据必须是函数且函数中返回的是对象形式  
// Count2UI组件中通过props接收参数  接收到的是对象中的key value形式的数据  如n: 580, k: 9999
export default connect(mapStateToProps, mapDispatchToProps)(Count2UI)