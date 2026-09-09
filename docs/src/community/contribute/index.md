---
title: 贡献文档
icon: code-branch
---

# 贡献文档

文档可能有缺漏或不够完善之处，欢迎各位同好帮助完善。

## 写作规范

- [中文写作排版风格指南](./zh_style.md)
- [Markdown 风格指南](./md_style.md)
- [Markdown 语法指南](./md_grammar.md)

## 本地预览

```bash
# 拉取源码
git clone https://github.com/MelodyYuuka/HifuuCraft-docs
cd HifuuCraft-docs/docs

# 安装依赖
pnpm install --frozen-lockfile

# 启动开发服务器
pnpm docs:dev
```

## 提交修改

1. Fork 文档仓库并创建自己的分支。
2. 修改文档后使用 `pnpm docs:build` 检查构建是否成功。
3. 提交 Pull Request，并在描述中说明修改内容。

如果暂时不方便提交代码，也可以通过 [Issue](https://github.com/MelodyYuuka/HifuuCraft-docs/issues) 提出补充或建议。
