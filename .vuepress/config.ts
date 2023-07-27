import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";

export default defineUserConfig({
  base: "tjyDocs",
  plugins: [sitemapPlugin({
    hostname: 'https://cscec-g05.top/tjyDocs/'
  })],
  title: "投建营一体化平台开发帮助文档",
  description: "Just playing around",
  theme: recoTheme({
    colorMode: 'dark',
    style: "@vuepress-reco/style-default",
    // password: '14e1b600b1fd579f47433b88e8d85291',
    logo: "/logo.svg",
    author: "ccwme",
    authorAvatar: "/head.png",
    // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "Home", link: "/" },
      { text: "Categories", link: "/categories/reco/1/" },
      { text: "Tags", link: "/tags/tag1/1/" },
      {
        text: "Docs",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        ],
      },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "QQ 群",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>QQ群1：1037296104</li>
            <li>QQ群2：1061561395</li>
            <li>QQ群3：962687802</li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "GitHub",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
    algolia: {
      appId: 'J4399XSOTW',
      apiKey: 'e32bb24fb662a239ef50f2b564af478a',
      indexName: 'cscec-g05',
      inputSelector: '### REPLACE ME ####',
      algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
      debug: false // Set debug to true if you want to inspect the dropdown
    },
    commentConfig: {
      type: 'valie',
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        // appId: 'xxx',
        // appKey: 'xxx',
        // placeholder: '填写邮箱可以收到回复提醒哦！',
        // verify: true, // 验证码服务
        // notify: true,
        // recordIP: true,
        // hideComments: true // 隐藏评论
      },
    },
  }),
  // debug: true,
});
