```js
//  在main.js里写入以下代码

const messages = {
  en: {
    hello: "hello world",
  },
  ja: {
    hello: "こんにちは、世界",
  },
}

const i18n = createI18n({
  locale: "ja", // 设置语言包名称
  messages, // 设置语言包数据集合
})


app.use(i18n)
```

#### 在组件页面中使用

```vue
<template>
	<div>{{ $t("hello") }}</div>
</template>
```



