# 常见问题 

- Cannot read properties of undefined (reading 'component') @fix

```
要保证 mpa.config.js 能匹配到组件
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1656197096843-6856yzy3ak7E-image.png)

- @umijs/runtime“ does not exist in container @fix 
    - https://blog.csdn.net/qq_40593656/article/details/120083448

```
删除src/.umi
```

- 打包路径publicPath的问题 @fix
    - https://blog.csdn.net/qq_34273888/article/details/110621995

```
publicPath: './',
// publicPath: process.env.NODE_ENV === 'production' ? 
//     'https://ui-javascript.github.io/tpl-mpa-umi3-react17/' 
//     : '/',
mpa: {},
// exportStatic: {},
```
