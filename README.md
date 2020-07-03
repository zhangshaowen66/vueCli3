# 3.0vue-cil31

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### axios用法
```

$axios('/api/sample/login', data, 'post'，'test')

   axios共四个参数依次是  
   1：接口地址  
   2：data传的参数  
   3：是get还是post 不传值默认 post 
   4：要切换的IP地址到根目录.env文件内添加
  
```

### 打包配置

```$xslt
npm run build-test
测试环境打包 在.env.test 配置相应的地址

npm run build-pro
正式环境打包 在.env.production 配置相应的地址

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
