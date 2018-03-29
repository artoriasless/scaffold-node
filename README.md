# scaffold-node

+   nodejs 项目的一个脚手架，后端使用 koa2 ，数据库使用 mysql ，通过 sequelize 作为 DB 模型映射
+   为保证项目不会因为奇怪的问题运行异常后导致网站奔溃，使用了 forever-monitor.js 作为守护进程
+   部分前端静态资源未做整理，可按需使用模板引擎做 SSR （pug、dust），也可以使用 MVV 框架 （vue、ng、react）
+   请保证 node 环境为 7.6.0 或以上（koa2 所限）

----------

###2018-03-29更新

+   更新 pkg.json ，添加部分依赖
+   添加了相关的单例测试示例
+   添加了 eslint 的语法校验
+   开发环境添加 nodemon 依赖，实时监听项目变化
