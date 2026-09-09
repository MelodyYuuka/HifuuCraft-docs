import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/getting-started/": [
    {
      text: "快速开始",
      icon: "signs-post",
      link: "/getting-started/",
    },
  ],
  "/servers/": [
    {
      text: "服务器总览",
      icon: "server",
      link: "/servers/",
    },
    {
      text: "26.2 空岛服",
      icon: "cubes",
      link: "/servers/skyblock-26.2/",
      prefix: "/servers/skyblock-26.2/",
      collapsible: true,
      children: [
        "enchantment/index.md",
        "enchantment/enchantment-general.md",
      ],
    },
    {
      text: "1.12.2 生存服",
      icon: "lightbulb",
      link: "/servers/survival-1.12/",
      prefix: "/servers/survival-1.12/",
      collapsible: true,
      children: [
        {
          text: "插件与玩法",
          collapsible: true,
          children: ["plugins/mcmmo.md", "plugins/slimefun.md"],
        },
      ],
    },
    {
      text: "1.21 生存服",
      icon: "flask-vial",
      link: "/servers/survival-1.21/",
      prefix: "/servers/survival-1.21/",
      collapsible: true,
      children: ["dominion.md", "aurelium.md"],
    },
  ],
  "/plugins/": [
    {
      text: "插件与玩法",
      icon: "puzzle-piece",
      link: "/plugins/",
      children: ["skinsrestorer.md"],
    },
  ],
  "/reference/": [
    {
      text: "参考资料",
      icon: "book",
      link: "/reference/",
      children: ["commands.md", "faq.md", "glossary.md"],
    },
  ],
  "/community/": [
    {
      text: "社区与贡献",
      icon: "users",
      link: "/community/",
      children: ["sponsor.md", "contribute/index.md"],
    },
    {
      text: "贡献文档",
      icon: "code-branch",
      link: "/community/contribute/",
      children: [
        "contribute/zh_style.md",
        "contribute/md_style.md",
        "contribute/md_grammar.md",
      ],
    },
  ],
});