import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Muse",

  description:
    "A modern WYSIWYG Markdown editor built with Electron, featuring real-time preview, code highlighting, math formulas, and Mermaid diagrams.",

  lang: "zh-CN",

  base: "/muse.github.io/",

  lastUpdated: false,

  appearance: true,

  head: [
    ["meta", { property: "og:image", content: "/og-image.png" }],

    [
      "meta",
      {
        property: "og:title",
        content: "Muse — A Modern Markdown Editor",
      },
    ],

    [
      "meta",
      {
        property: "og:description",
        content:
          "A modern WYSIWYG Markdown editor with real-time preview, code highlighting, math formulas, and Mermaid diagrams.",
      },
    ],

    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    ],

    [
      "meta",
      {
        name: "theme-color",
        content: "#0a0a0f",
        media: "(prefers-color-scheme: dark)",
      },
    ],

    [
      "meta",
      {
        name: "theme-color",
        content: "#ffffff",
        media: "(prefers-color-scheme: light)",
      },
    ],

    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],

    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "",
      },
    ],

    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
      },
    ],

    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
  ],

  themeConfig: {
    logo: false,

    siteTitle: "Muse",

    nav: [
      {
        text: "首页",
        link: "/",
      },

      {
        text: "功能",
        link: "/guide/features",
      },

      {
        text: "文档",
        link: "/guide/",
      },

      {
        text: "下载",
        link: "/download",
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "指南",

          items: [
            {
              text: "介绍",
              link: "/guide/",
            },

            {
              text: "快速开始",
              link: "/guide/getting-started",
            },

            {
              text: "功能指南",
              link: "/guide/features",
            },

            {
              text: "快捷键",
              link: "/guide/shortcuts",
            },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/muse-editor/muse",
      },
    ],

    footer: {
      message: "Built with Electron, React, and TipTap",

      copyright: "Copyright © 2026 Muse Editor",
    },

    darkModeSwitchLabel: "主题",

    lightModeSwitchTitle: "切换到浅色模式",

    darkModeSwitchTitle: "切换到深色模式",
  },
})
