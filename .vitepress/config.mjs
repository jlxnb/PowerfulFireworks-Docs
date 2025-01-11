import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AQQBot 文档",
  description: "AQQBot 插件官方文档",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alazeprt/AQQBot' }
    ]
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: {
        sidebar: [
          { text: '简介', link: '/description' },
          {
            text: 'OneBot 11 后端安装',
            items: [
              { text: '安装', link: '/plugin-installation' },
            ]
          },
          {
            text: '插件使用',
            items: [
              { text: '安装', link: '/onebot-installation' },
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        sidebar: [
          { text: 'Description', link: '/description' },
          {
            text: 'OneBot 11 后端安装',
            items: [
            ]
          },
          {
            text: '插件使用',
            items: [
              { text: '安装', link: '/plugin-installation' },
            ]
          }
        ]
      }
    }
  }
})
