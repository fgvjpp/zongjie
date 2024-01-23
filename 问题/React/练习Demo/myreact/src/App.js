import './App.css';
import Test from './pages/Test'
import React, { Component, lazy, Suspense } from 'react'
import PubSub from 'pubsub-js'
import Test2 from './pages/Test2';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom'
import store from './redux/store';



// containers组件
import Count2 from './containers/Count2';
import createRanDomData from './containers/createRanDomData'; // store标签属性可以不传 可以通过调用connect的时候自动传入状态进去

// 函数组件
import FnCompn from './components/FnCompn';

// 路由懒加载components组件方法
// 需要配合Suspense组件才能实现懒加载 该组件上的fallback属性传入一个组件或者虚拟DOM用来显示加载中状态 因为懒加载在网速比较慢的时候会有延迟
const Count = lazy(() => import('./components/Count'))

export default class App extends Component {
  state = {
    text: '',
    arr: [
      { id: 1, text: '1' },
      { id: 2, text: '2' },
      { id: 3, text: '3' }
    ],
    loginKey: ''
  }
  componentDidMount() {
    PubSub.subscribe('AppText', (msg, data) => {
      this.setState({ text: data })
    })
  }
  cc = () => {
    this.setState({ loginKey: window.location.hash })
  }
  render(a) {
    const { text, loginKey } = this.state
    return (
      <div className="App">
        函数组件
        <FnCompn />
        app...
        <div>内容显示如下</div>
        <span>{text}</span>
        <NavLink to='/count' children='点击进入计算器' />
        {
          this.state.arr.map(item => <NavLink onClick={this.cc} key={item.id} activeClassName='ccc' to={`/login/?id=${item.id}&name=haha`} replace>点击login{item.text}</NavLink>)
        }
        <div>-------------------------------------</div>
        <Count2 store={store} />
        <div className='views'>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route path="/login" key={loginKey} component={Test2}></Route>
              <Route path='/test' component={Test}></Route>
              <Route path='/count' component={Count}></Route>
              <Route path='/create' component={createRanDomData}></Route>
              <Redirect to="/test" />
            </Switch>
          </Suspense>
        </div>
      </div>
    )
  }
}
