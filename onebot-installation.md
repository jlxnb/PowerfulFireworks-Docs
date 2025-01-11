# 安装后端

:::warning

:::

:::tip
目前有许多可供安装的QQ机器人,如 LLOneBot Lagrange.OneBot NapCat 等等~
:::
# LLOneBot
::: details 快速安装 **注意在安装之前必须关闭QQ**
1. 从 [Github Releases](https://modrinth.com/plugin/aqqbot) 或 [GitHub Actions](https://github.com/super1207/install_llob/actions) 下载LLOneBot
:::warning
GitHub Actions 中的软件不是正式版, 含有未知性
:::
2. 运行 `llob_install.exe` 可执行文件
3. 等软件运行一会ing...
4. 如无其他错误代码 Bingo~ 到这里你就安装成功了~
:::warning
修补失败报错 ```timed out``` ```connection refused```可能需要科学上网
:::

:::tip
安装程序默认会选择优良的Github镜像以供下载!
:::

5. 配置你的LLOneBot ```WebSocket``` 正向 服务端口 及 ```access token```
:::warning
如果你的服务器是公网
**必须设置Access Token!!!**
如不设置，他人将会通过你的QQ发送未知信息！！！
:::

:::tip
如果你的AQQbot和你的QQ运行在同一台电脑/服务器
可以启用
```HTTP、正向WebSocket服务仅监听127.0.0.1```
![示例](/assets/img/only-listen-self.png "仅监听127.0.0.1")
:::
6. 如上述步骤均已完成，Wonderful~ 享受你的Aqqbot欢乐时光~
# Lagrange.OneBot


Lagrange.Core 实现了 OneBot V11 的通信协议, 可以和主流 Bot 框架进行通信

1. [nightly](https://github.com/LagrangeDev/Lagrange.Core/releases/tag/nightly) 通过 Nightly Release 获取 Self-Contained .NET 8 程序包 (该版本可能不为最新版本)
2. [Docker](https://github.com/LagrangeDev/Lagrange.Core/pkgs/container/lagrange.onebot) 通过 ghcr.io 的 Docker 部署
3. [Actions](https://github.com/LagrangeDev/Lagrange.Core/actions) 通过 Docker 获取 Framework-Dependent .NET 7 / 8 程序包

::: tip 提示

Actions 内的工件为 Framework-Dependent 打包模式；

请前往 [Microsoft](https://dotnet.microsoft.com/zh-cn/download) 获取 .NET Runtime 以运行
:::

::: danger 提醒

NTQQ 的 SignServer 不可与 Android 协议混用 (如 unidbg-fetch-qsign)

本文档不主动提供 SignServer, 请前往 上网自查 或 自建
:::
