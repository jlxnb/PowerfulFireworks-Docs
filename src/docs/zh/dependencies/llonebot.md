# 后端 LLoneBot 安装

:::tip
一切以官方为准!
你可点击 [这里](https://llonebot.github.io/zh-CN/) 进入 LLOneBot 的官方文档进行参考
:::

## 安装 LLoneBot (LiteLoaderQQNT 前置方式)

:::warning
你需要先安装 LiteLoaderQQNT
:::

先打开 [Github Releases](https://github.com/LLOneBot/LLOneBot/releases), 点击以 `.zip` 为结尾的文件下载

接着打开 QQ 本体的设置, 点击 `LiteLoaderQQNT`, 找到 `安装新插件`, 点击右侧的 `选择文件` 按钮, 选择下载好的 `.zip` 文件, 然后重启 QQ 本体即可在设置中看到安装好的 LLoneBot 插件

![安装好的 LLoneBot 插件](/../assets/img/llonebot.png "安装好的 LLoneBot 插件")

## 安装 LLoneBot (无脑形式)

当然, 其实你可以直接使用 LLOneBot 提供的一键脚本进行安装, 打开 [Github Releases](https://github.com/super1207/install_llob/releases) 选择 `.exe` 后缀的下载打开即可进行安装了

## 配置

接着, 在QQ设置里点击 LLOneBot, 下滑, 找到 `启用正向 WebSocket 服务`, 若未打开则将其打开, 同时记住正向 WebSocket 服务端口, 在插件配置时会用到

当然, 如果你的MC服务器和你运行的 LLOneBot 是在 **同一台机器** 上的, 可以开启 `HTTP、正向 WebSocket 服务仅监听 127.0.0.1`, 这样他人就无法从外网访问机器

为了增强安全性, 你也可以设置 `Access token` (访问密钥, 类似于看你QQ之前要输入的密码), 建议设置为 32位 随机字符 (确保复杂性), 你也要记住这个 Access token (如果你设置了), 在后面插件配置要用

![配置参考图](/../assets/img/llonebot-config.png "配置参考图")