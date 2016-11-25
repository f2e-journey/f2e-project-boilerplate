# 前端工程模版(简单版)项目

这是一个前端工程项目的模版, 可以写一些项目的说明, 例如项目的初衷, 目录说明, 线上地址, 配置说明等等

* [前端工程模版(简单版)](https://github.com/f2e-journey/f2e-project-boilerplate)
  * 通过 [coolie](https://coolie.ydr.me/introduction/advantage/) 合并 CSS/JS, 并对静态资源进行版本管理
* [前端工程模版(模块化版)](https://github.com/f2e-journey/f2e-project-boilerplate/tree/module-coolie)
  * 通过 [coolie](https://coolie.ydr.me/guide/build-chunk-module/) 进行模块化开发

## 准备环境

* 安装 [Node.js](https://nodejs.org/)
* 执行 `npm install` 来安装项目依赖

## 通用规范

* [网站项目目录结构规范](https://github.com/appbone/mobile-spa-boilerplate/blob/master/directory.md)
* [前端工作流程](https://github.com/f2e-journey/treasure/blob/master/workflow.md)
* [前后端接口规范](https://github.com/f2e-journey/treasure/blob/master/api.md)
* [如何写出一个好的 Web 页面](https://github.com/f2e-journey/xueqianban/issues/11)

## 常用命令

在 `src` 目录下可以执行以下命令

* `npm start` 启动静态服务器(需要先安装 [Puer](https://github.com/leeluolee/puer))
* `npm run build` 构建项目, 输出到 `dist` 目录

## 项目规范

与这个项目紧密相关的一些规范, 例如统一项目的命名前缀

## 公共组件

这里列举项目的公共组件, 方便别人直接使用或者扩展, 避免重复发明轮子造成资源的浪费

* component1
* component2

## 注意事项

* 所有的后端接口必须使用 [backend-api.js](https://github.com/ufologist/backend-api) 来调用
* 所有的 APP 接口必须使用 [ponto.js](https://github.com/Wikia/ponto) 来调用