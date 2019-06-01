###版本环境
```html
node 6.0+(v8.11.2)
npm 3.0+(v5.6.10)
jQuery 3.0+(v3.4.1)
Vue 3.0+(v2.5.1)
Layui-layer 3.0+(v3.0.1)
vue-awesome-swiper 3.0+(v3.1.3)
```

### 项目结构
```html
|--build   webpack配置
|--config  全局配置
|--dist    打包文件夹
|--src     源文件
  |--assets         静态资源
  |--components     组件
  |--router         路由配置
  |--store          store相关都在
  |--themes         主题(全局覆盖CSS: themes/ways-theme.less。导入为变量和minix: themes/index.less )
  |--utils          工具
  |--views          容器视图局入口(主要是header)
  |--main.js        全局入口js
|--static  静态文件价(打包会copy)
|--.babelrc
|--.editorconfig
|--.eslintignore
|--.eslintrc.js
|--.gitignore
|--.postcssrc.js
|--index.html
|--package.json
|--README.md
```
### 安装工具
* Run 'npm install'

### 安装依赖
* Run 'npm install'

### 开发环境
* Run 'npm run dev'

### 生产环境
* Run 'npm run build'

### 默认样式
* 1rem = 16px

