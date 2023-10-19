### Pinia自定义插件(Pinia.use)--------实现数据持久化存储示例

##### test.js

```js
defineStore创建的仓库有多少个 该函数就调用多少次

export default (app) => {
    
    const storeID = app.store.$id // 每次调用时获取到的仓库都是独立的实例
    
    const GET_DATA = JSON.parse(sessionStorage.getItem(storeID)) || {}
    app.store.$patch(GET_DATA) // $patch方法可以给当前仓库实例覆盖state数据
    
    app.store.$subscribe((store, state) => { // $subscribe用来监听仓库状态数据变化
        console.log(state);
        sessionStorage.setItem(storeID, JSON.stringify(state))
    })

    // app.options可以获取当前仓库对象defineStore中的自定义属性
    if (app.options.myTest) {
        console.log(app.options.myTest());
    }
}
```



##### mian.js

```js
import test from './stores/plugins/test.js'

const pinia = createPinia()
pinia.use(test)
```

