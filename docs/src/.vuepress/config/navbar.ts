import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "快速开始",
    icon: "signs-post",
    link: "/getting-started/",
  },
  {
    text: "服务器",
    icon: "server",
    link: "/servers/",
  },
  {
    text: "插件与玩法",
    icon: "puzzle-piece",
    children: [
      { text: "通用插件", link: "/plugins/" },
      { text: "26.2 空岛服", link: "/servers/skyblock-26.2/" },
      { text: "1.12.2 生存服", link: "/servers/survival-1.12/" },
      { text: "1.21 生存服", link: "/servers/survival-1.21/" },
    ],
  },
  {
    text: "参考资料",
    icon: "book",
    children: [
      { text: "常用指令", link: "/reference/commands.html" },
      { text: "常见问题", link: "/reference/faq.html" },
      { text: "术语表", link: "/reference/glossary.html" },
    ],
  },
  {
    text: "社区",
    icon: "users",
    children: [
      { text: "社区与贡献", link: "/community/" },
      { text: "赞助项目", link: "/community/sponsor.html" },
      { text: "贡献文档", link: "/community/contribute/" },
    ],
  },
  {
    text: "群组",
    icon: "comments",
    children: [
      { text: "QQ 群", link: "https://qm.qq.com/q/kukOXwfbvG" },
      { text: "Kook", link: "https://kook.top/4wZDH7" },
      { text: "QQ 频道", link: "https://pd.qq.com/s/5iyaamyir" },
      { text: "Bilibili", link: "https://space.bilibili.com/330143408/dynamic" },
      { text: "QQ 小程序", link: "https://m.q.qq.com/a/s/d58a856a4d9d268aa5bc43caf1839723" },
    ],
  },
]);