# 方法一

```
npm install @types/XXX 

xxx表示包名
```

# 方法二

 在src根目录新建一个 shime-vue.d.ts 的文件

文件里面写上

```js
declare module 'js-cookie'  // 写上对应包名即可
```

注意！！！必须是根目录 不然没效果