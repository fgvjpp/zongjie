import { Suspense, useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import routerOptions from '@/routes/routerOptions'

import './assets/css/app.css'

function App() {
  console.log('app组件渲染了');

  // useSelector用来访问Redux中的状态数据的(相当于Vuex中的getter方法自定义快捷访问属性方式)
  // 因为useSelector返回的state状态中数据发生改变就会导致整个组件重新渲染(只要有组件中使用了useSelector方法都会重新渲染) 当使用shallowEqual方法可以去校验当前useSelector返回state数据是否发生改变然后再去渲染
  // shallowEqual属于浅比较(基址不变,数据内容变了)  深比较(基址变)
  const { username } = useSelector(state => ({ username: state.userReducer.username }), shallowEqual) 
  console.log(username, '状态被修改了');

  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('元素挂载完毕执行');
  }, [count]) // 当数组为空时整个函数体为 元素挂载完毕后执行  当数组里面存入state状态参数时当状态更新后就执行一次  这种方式相当于vue里的wacth监听

  // useRoutes路由表 跟vue一样 配置好routerOptions后传入useRoutes调用
  const routerAll = useRoutes(routerOptions)
  return (
    <div className="App">
      <div className="router">
        <Suspense fallback={<h1>Loading...</h1>}>
          {routerAll}{/* 注册路由表 */}
        </Suspense>
      </div>
      <div>
        <p>测试useEffect生命周期hook</p>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>点击++</button>
      </div>
    </div>
  )
}

export default App;
