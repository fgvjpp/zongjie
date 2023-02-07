###  vue.config.js 配置 

```js
chainWebpack: config => {
    // 查看打包文件体积大小
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  }

```

### 在[package](https://so.csdn.net/so/search?q=package&spm=1001.2101.3001.7020).json文件中 在 build 后面加上一个 --report

```json
  "build": "vue-cli-service build --report"
```

最后直接运行