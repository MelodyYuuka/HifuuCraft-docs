---
title: SkinsRestorer
icon: shirt
---

# SkinsRestorer

SkinsRestorer 是服务器使用的皮肤管理插件，玩家可以通过 `/skin` 系列指令设置、更新或清除自己的游戏皮肤。

下表中的 `<必填参数>` 必须填写，`[可选参数]` 可以省略。

## 玩家指令

| 指令 | 说明 |
| --- | --- |
| `/skin set <皮肤名>` | 使用指定玩家名对应的皮肤 |
| `/skin url <链接> [变体]` | 从外部图片链接设置皮肤 |
| `/skin update` | 更新当前皮肤 |
| `/skin search <文本>` | 搜索皮肤 |
| `/skin clear` | 清除当前皮肤 |
| `/skin random` | 使用随机皮肤 |
| `/skin undo` | 回滚到上一个皮肤 |
| `/skin history` | 查看皮肤更改历史 |
| `/skin favorite` | 收藏当前皮肤；再次使用可取消收藏 |
| `/skin favorites` | 查看已收藏的皮肤 |
| `/skin edit` | 在浏览器中打开皮肤编辑器 |
| `/skin upload` | 查看皮肤上传信息 |
| `/skin help` | 查看指令帮助 |
| `/skins` | 打开皮肤列表 |

:::tip 皮肤没有刷新
可以先尝试 `/skin update`。如果仍然无效，再使用 `/skin clear` 清除设置，然后重新设置皮肤。
:::

## 参考资料

- [SkinsRestorer 指令与权限文档](https://skinsrestorer.net/docs/configuration/commands-permissions)（英文）