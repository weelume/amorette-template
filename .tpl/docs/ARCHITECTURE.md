# 架构

采用 feature-based 结构。amorette 的品牌、双语内容、主题、组件、页面组合与路由分别维护。纯路径函数在 routing.ts，可供服务端与客户端共用；浏览器状态只在客户端读取。

Shell 接受可选宿主配置，注入品牌、Logo、外部入口与备案插槽；独立运行默认使用自身品牌。运行图片和字体位于 public/templates/amorette，展示截图位于 .tpl/assets。没有服务端业务、数据库或外部发送。
