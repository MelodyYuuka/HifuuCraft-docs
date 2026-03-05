# Skinsrestorer

本条目主要介绍了 Skinsrestorer 插件（即 `/skin` ）的相关信息及使用方式

下文的指令都将以 \<required> 表示必选参数，而以 \(optional\) 表示可选参数。

## 玩家指令

此部分是所有玩家都有权限使用的指令

指令 | 描述
--- | ---
/skin set <皮肤名> | 更改你的皮肤
/skin url <链接> (变体) | 从外部网站链接更改皮肤
/skin update | 更新你的皮肤
/skin search <文本> | 搜索皮肤
/skin clear | 清除你的皮肤
/skin random | 随机皮肤
/skin undo | 回滚到你的上一个皮肤
/skin history | 查看你的皮肤更改历史
/skin favorite | 收藏当前皮肤（对已收藏皮肤使用即为取消收藏）
/skin favorites | 查看收藏皮肤列表
/skin edit | 在浏览器中打开皮肤编辑器
/skin upload | 查看皮肤的上传信息
/skin help | 查询指令帮助
/skins | 打开皮肤列表

## 管理员指令

此部分是仅限个别权限组或管理员才可以执行的指令

指令 | 描述 | 权限
--- | --- | ---
/skin set <皮肤名> (目标) (变体) | 更改目标玩家皮肤，默认为玩家自己 | player.skinsrestorer.command.set.other
/skin update (目标) | 更新目标玩家的皮肤，默认为玩家自己 | skinsrestorer.command.update.other
/skin clear (目标) | 清除目标玩家的皮肤，默认为玩家自己 | skinsrestorer.command.clear.other
/sr | SkinsRestorer提供的管理员指令 | skinsrestorer.admincommand
/sr createcustom <皮肤名> <皮肤输入> (变体) | 在服务端创建一个自定义皮肤 | skinsrestorer.admincommand.createcustom
/sr setskinall <皮肤名> (变体) | 将所有玩家的皮肤更改为指定皮肤 | skinsrestorer.admincommand.setskinall
/sr info <玩家名/皮肤名> <输入> | 展示与指定玩家或皮肤有关的信息 | skinsrestorer.admincommand.info
/sr props <玩家名/皮肤名> <输入> | 同 /sr info | skinsrestorer.admincommand.info
/sr lookup <玩家名/皮肤名> <输入> | 同 /sr info | skinsrestorer.admincommand.info
/sr drop <玩家名/皮肤名> <目标> | 从数据库中移除与指定玩家或皮肤有关的数据 | skinsrestorer.admincommand.drop
/sr remove <玩家名/皮肤名> <目标> | 同 /sr drop | skinsrestorer.admincommand.drop
/sr purgeolddata <天数> | 移除x天前的皮肤数据 | skinsrestorer.admincommand.purgeolddata
/sr applyskin <目标> | 重新为目标玩家应用皮肤 | skinsrestorer.admincommand.applyskin
/sr dump | 上传诊断数据到 bytebin.lucko.me | skinsrestorer.admincommand.dump
/sr applyskinall | 重新为所有玩家应用皮肤 | skinsrestorer.admincommand.applyskinall
/sr status | 检查插件所需的API服务 | skinsrestorer.admincommand.status
/sr reload | 重载配置文件 | skinsrestorer.admincommand.reload

## 参考资料

1.<https://skinsrestorer.net/docs/configuration/commands-permissions>（英文）
