# fishcat 的博客

记录学习、技术实践与日常思考的个人博客。

**在线阅读：[fishcat37-blog.pages.dev](https://fishcat37-blog.pages.dev/)**

## 技术栈

- [Hugo](https://gohugo.io/)：静态网站生成器
- [PaperMod](https://github.com/adityatelange/hugo-PaperMod)：博客主题
- [Cloudflare Pages](https://pages.cloudflare.com/)：网站托管与自动部署

## 仓库结构

- `content/posts/`：文章内容
- `archetypes/`：新文章模板
- `hugo.toml`：网站配置
- `themes/PaperMod/`：主题，以 Git 子模块管理

文章以 Markdown 编写。网站由 Cloudflare Pages 构建，推送到 `main` 后自动更新。
