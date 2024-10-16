# Rspack

## 配置文件

rspack 会自动读取当前路径下的rspack.config.js 文件作为配置文件
rspack 支持四种配置文件类型，支持 .js .ts .msj .cjs

- .js 默认commonjs 模块，如果所在package.json中的type 为module 则会变成 esm 模块
- .ts typescript 格式 ，内部会使用ts-node 将其编译为 .js 模式
- .mjs esm 模块模式
- .cjs common 模块模式

### entry

设置rspack构建的入口

### content

设置rspack构建时所依赖的基础路径

### mode

设置rspack的构建模式，以启动对应模式下的优化策略，默认值为production

- production： 1、NODE_ENV 将替换为 production 2、optimization.minimize 的默认值为true ，将使用SWC 对代码进行压缩优化
- development ： 1、NODE_ENV 将替换为 development 2、为模块和chunks设置为合适的命名格式
- node：不会启用任何默认的优化策略

### module

配置rspack如何处理一个项目中的不同模块
