```js
// 当前vue3语法顶层使用await会报错是因为setup只是个语法糖  本身是个setup()函数 没有async所以导致报错
<script setup>
  const textures = await PIXI.Assets.load('../../public/1.png');
</script>
```

