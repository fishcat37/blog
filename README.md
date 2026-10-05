# fishcat 的博客

使用 Hugo 和 Ananke 主题的中文静态博客，计划通过 Cloudflare Pages 免费托管。

## 本地开发

使用 Hugo Extended **0.167.0**。初始化时已将该版本安装到当前目录的 `.tools/hugo`，并验证官方发布文件的 SHA-256。该二进制不提交到 Git。

```sh
# 初始化已克隆仓库的主题
git submodule update --init --recursive

# 当前电脑预览，包含草稿
.tools/hugo server -D

# 生成正式站点，输出到 public/
.tools/hugo --minify

# 新建文章，默认是草稿
.tools/hugo new content posts/my-first-post.md
```

编辑文章后，将 front matter 中的 `draft` 改为 `false` 再发布。标题、简介与网站地址在 `hugo.toml` 中修改。

在其他电脑安装同版本 Hugo 后，可以将上述命令的 `.tools/hugo` 换成 `hugo`。

## GitHub

源代码仓库默认设为私有，SSH remote 为 `git@github.com:fishcat37/blog.git`。

```sh
git clone --recurse-submodules git@github.com:fishcat37/blog.git
```

当前电脑的系统 SSH 配置有权限错误，因此本仓库单独设置了 `core.sshCommand = ssh -F /dev/null`，使用已有 SSH 密钥连接 GitHub。

## Cloudflare Pages

目标项目名称为 `fishcat37-blog`，预计免费地址为 `https://fishcat37-blog.pages.dev/`。该地址需在创建项目时确认；如果实际地址不同，更新 `hugo.toml` 的 `baseURL`。

使用 GitHub 集成连接 `fishcat37/blog`，这样推送到 `main` 后会自动部署，不需要在 GitHub 保存 Cloudflare API Token。

| 设置 | 值 |
| --- | --- |
| 项目类型 | Pages，GitHub 集成 |
| 生产分支 | `main` |
| 框架预设 | Hugo |
| 根目录 | 仓库根目录 |
| 构建命令 | `hugo --minify` |
| 构建输出目录 | `public` |
| 环境变量 | `HUGO_VERSION=0.167.0`（生产与预览环境） |

Cloudflare 登录和 GitHub App 仓库授权需要由账户持有人完成。授权时只选择 `fishcat37/blog` 即可。

参考：[Cloudflare Hugo 部署指南](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site/)、[Hugo 入门指南](https://gohugo.io/getting-started/quick-start/)。
