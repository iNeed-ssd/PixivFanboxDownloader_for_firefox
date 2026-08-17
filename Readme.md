<!-- TOC -->

- [简介](#简介)
- [安装](#安装)
  - [临时安装](#临时安装)
  - [从源码构建](#从源码构建)
  - [永久安装](#永久安装)
- [如何使用](#如何使用)
- [支持和捐助](#支持和捐助)

<!-- /TOC -->

[View English introduction](Readme-EN.md)

[查看繁体中文介绍](Readme-ZH-TW.md)

[日本語の紹介を見る](Readme-JA.md)

[한국어 소개 보기](Readme-KO.md)

[Discord](https://discord.gg/u4wVMy7xJM)

# 简介

这是 Pixiv Fanbox Downloader 的 Firefox 版本，用于批量下载 Pixiv Fanbox 上的文件。

支持过滤文件类型、自定义文件名，支持多种语言。

**注意：** 本程序并不能直接解锁 Fanbox 上的付费内容。如果你想要下载付费内容，必须先购买它。

![screenshot](screenshot/ui-1.png)

# 安装

需要 Firefox 142 或更高版本。

## 临时安装

1. 在 Firefox 中打开 `about:debugging#/runtime/this-firefox`。
2. 点击“临时载入附加组件”。
3. 选择本仓库中的 `dist/manifest.json`。

关闭 Firefox 后，临时安装的扩展会被移除。

## 从源码构建

需要安装 Node.js 和 npm。

```sh
npm install
npm run build
```

构建后会生成 `PixivFanboxDownloader-firefox-<version>.zip`，其根目录直接包含扩展清单。运行 `npm run start:firefox` 可以构建扩展并在临时 Firefox 配置中启动；运行 `npm run lint:firefox` 可以使用 Mozilla 的 `web-ext` 工具验证构建结果。

## 永久安装

Firefox 正式版只能永久安装经过 Mozilla 签名的扩展。请将生成的 ZIP 提交到 [Firefox Add-ons](https://addons.mozilla.org/developers/) 进行签名或发布；未签名的开发包只能临时载入（或在允许未签名扩展的 Firefox 开发版本中使用）。

# 如何使用

- 安装这个扩展程序之后，刷新 fanbox 页面，在页面右侧可以看到蓝色的下载按钮，点击这个按钮开始使用。
- 下载的文件会保存在浏览器的下载目录里。如果你想保存到其他位置，需要修改浏览器的下载目录。
- 请关闭浏览器设置中的“下载前询问每个文件的保存位置”选项，以免在下载时出现另存为窗口。
- 如果下载后的文件名异常，请禁用其他有下载功能的浏览器扩展。
- 保存投稿为 HTML 时，HTML 及其中使用的图片会覆盖下载目录中的同名文件，以保持 HTML 的本地图片路径；普通 TXT、附件和图片下载仍自动改名。
- 如有其他问题或建议，欢迎加 QQ 群 853021998 进行交流。

# 支持和捐助

如果您感觉本脚本帮到了您，您可以对我进行支持和捐助，不胜感激 (*╹▽╹*)

1. 爱发电：

[https://afdian.com/a/xuejianxianzun](https://afdian.com/a/xuejianxianzun)

2. Patreon：

[https://www.patreon.com/xuejianxianzun](https://www.patreon.com/xuejianxianzun)

3. 你可以通过微信或支付宝扫码转账：

![微信](https://xuejianxianzun.github.io/PBDWiki/zh-cn/images/weixin.png) ![支付宝](https://xuejianxianzun.github.io/PBDWiki/zh-cn/images/alipay.png)
