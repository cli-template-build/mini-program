# 小程序

基于tina的小程序框架， 类 vue 写法， 兼容官方所有的语法。 完美的组件化、优雅的复用机制、方便的模块引用。              
略微提升小程序开发体验、、、、、、、、

- [x] 支持TS
- [x] es6/7/8
- [x] polyfill
- [x] 放心使用async/await
- [x] wx api提示
- [x] 添加less
- [x] 外部组件加载
- [ ] 添加eslint
- [ ] 添加commitlint
- [x] 添加lodash并做tree shaking
- [x] 状态管理redux
- [ ] 小程序请求封装
- [ ] 全局loading组件统一
- [ ] 国际化
- [ ] mock
- [ ] 服务端链接



说明、可以完美支持ts, 但是支持TS 是小事儿， 大事儿是 小程序TS 定义文件确实难搞。
目前为止， mina 文件， 和 TS 文件方式都支持， 自取所需。

### 说明
如果运行的时候报错， 那么请点开微信开发者工具里面的 [详情] 
-> 关掉（把勾去掉） [ES6转ES5], 因为用了babel, 这个玩意儿再转会报错
-> 关掉（把勾去掉） [编译增强] 

### 运行
- 直接 clone 本项目
- 使用 [le-cli](https://github.com/yanlele/le-cli) 客户端初始化构建（已经集成完毕， 建议使用）
 
