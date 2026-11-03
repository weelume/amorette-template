# Amorette · 婚礼邀请

参考：https://amorette.framer.website/

## 能力与边界

纸张纹理与手绘人物构成的婚礼邀请网站，包含飘落花瓣、故事、仪式、日程、问答与本地 RSVP 演示。
默认中文，英文路径以 /en 开始；站内使用客户端路由。表单仅做本地校验，不发送、保存或创建真实预约。没有账号、支付、邮件服务或数据库。附加的机制说明、手记与政策页用于补全模板，不能描述成参考站原有页面。

## 环境与运行

Node 24.16.0，pnpm 9.15.4。沿用 React 19、Next 15 和现有 Framer Motion。
在本机 WSL Linux 文件系统内执行 pnpm install --frozen-lockfile、pnpm typecheck、pnpm lint、pnpm build、pnpm test。测试会启动临时生产服务，检查全部双语页面和 404，然后关闭该服务。
启动预览：PORT=43723 HOSTNAME=127.0.0.1 pnpm dev；生产预览改为 pnpm start。地址 http://localhost:43723 。停止本次服务使用 Ctrl+C，不关闭其他工程的进程。

## 修改入口

品牌：src/features/amorette/config/brand.ts；文案与数据：content/；主题：theme.css；公共交互：components/；页面组合：pages/；路由选择：SitePage.tsx；页面登记：content/pages.ts。修改时同时维护中英文。

## 验证与交付

三端 CSS 视口为 1440×1000、834×1180、390×844，并补查 320px 英文布局。截图真实位图尺寸另记在 template.json，不拉伸。完整检查记录在 .tpl/reports/verification.json，动效与验证边界见 .tpl/docs/MOTION.md。
提交源码、锁与 .tpl 资料，不提交依赖、构建产物、日志或私密配置。独立共享运行包由 pnpm bundle 在已提交的干净 WSL 克隆中生成。阅读此说明不会自动执行安装、启动、上传或发布。

## 权利

公开参考设计不代表拥有商业再分发权。请先阅读 .tpl/docs/LICENSE.md、docs/ASSETS.md 与字体随附许可；上线前替换示例信息与演示政策并审核素材授权。
