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
          { text: '简介', link: '/zh/description' },
          {
            text: 'OneBot 11 后端安装并配置',
            items: [
              { text: '概述 & 提醒', link: '/zh/dependencies/remind'},
              { text: 'QQ 本体', link: '/zh/dependencies/qq'},
              { text: '有头后端前置 LiteLoaderQQNT', link: '/zh/dependencies/liteloaderqqnt' },
              { text: '后端 LLoneBot', link: '/zh/dependencies/llonebot' },
              { text: '后端 NapCat', link: '/zh/dependencies/napcat' },
              { text: '后端 Lagrange', link: '/zh/dependencies/lagrange' }
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
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        sidebar: [
          { text: '介绍', link: '/description' },
          {
            text: 'OneBot 11 后端安装',
            items: [
              { text: '提醒', link: '/zh/dependencies/remind'}
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
