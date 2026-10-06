# LXGW WenKai Screen

本站使用霞鹜文楷屏幕阅读版，字体分片随网站部署，浏览器通过 `unicode-range` 按需加载，并通过 `font-display: swap` 先显示系统字体。

- 字体项目：https://github.com/lxgw/LxgwWenKai-Screen
- Web 字体分片项目：https://github.com/chawyehsu/lxgw-wenkai-webfont
- 来源：npm 包 `lxgw-wenkai-screen-webfont@1.7.0`
- 包内字体版本：`v1.250.2`
- 使用的字体样式：`LXGW WenKai Screen`，400 字重
- 字体许可：`OFL.txt`；Web 字体包许可：`LICENSE`

仅保留 `lxgwwenkaiscreen.css` 引用的 WOFF2 分片。其 CSS 位于 `assets/css/extended/00-wenkai-font.css`，字体 URL 已改为本站的 `/fonts/lxgw-wenkai-screen/files/` 路径。

排版规则位于 `assets/css/extended/typography.css`：正文和文章摘要使用文楷，标题使用系统黑体，代码使用系统等宽字体。
