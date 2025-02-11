# 后端 Napcat 安装

:::tip 提示
一切以官方为准!
你可点击 [这里](https://napneko.pages.dev/) 进入 NapCat 的官方文档进行参考
:::

## 有头形式安装

### LiteLoaderQQNT 前置安装方式
:::warning 警告
不能在无桌面环境的系统中安装有头形式的 Napcat!

你需要先安装 LiteLoaderQQNT!
:::

先打开 [Github Releases](https://github.com/NapNeko/NapCatQQ/releases) 找到名称为 `NapCat.Framework.zip` 的点击下载

接着打开 QQ 本体的设置, 点击 `LiteLoaderQQNT`, 找到 `安装新插件`, 点击右侧的 `选择文件` 按钮, 选择下载好的 `.zip` 文件, 然后重启 QQ 本体即可在设置中看到安装好的 Napcat 插件

安装后, 你可以在 Napcat 的设置里打开 Web 管理面板

### 一键安装方式

:::warning 警告
不能在无桌面环境的系统中安装有头形式的 Napcat!
仅限于 Windows 系统!
:::

先打开 [Github Releases](https://github.com/NapNeko/NapCatQQ/releases) 找到名称为 `NapCat.Framework.Windows.Once.zip` 的点击下载, 接着把他解压到一个 **没有中文和空格** 的路径中, 打开文件夹里的 `.exe` 后缀的文件, 即可自动安装

### 快捷打开管理面板

这两种方式安装后, 你可以在 Napcat 的设置里打开 Web 管理面板

![Napcat 设置界面](/../assets/img/napcat-open-web.png "Napcat 设置界面")

## 无头形式安装

### Windows

先打开 [Github Releases](https://github.com/NapNeko/NapCatQQ/releases) 找到名称为 `NapCat.Shell.zip` 的点击下载并解压, 接着双击 `launcher.bat` 即可启动

### Linux (无需 QQ 本体)

执行以下命令即可一键安装:

```bash
curl -o napcat.sh https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh && sudo bash napcat.sh
```

### 打开管理面板

在启动后, 你可以在启动的日志里看到一个 `http://127.0.0.1:6099/` 开头的链接, 复制这个链接即可打开管理面板, 按照指示登录即可

## 配置

:::info 说明
需要通过网页管理面板来进行配置
:::

首先打开网页管理面板, 点击 `网络配置`, 点击 `新建`, 选择 `Websocket 服务器`, 如图

![Napcat 新建 WebSocket 服务器](/../assets/img/napcat-create-ws.png "Napcat 新建 WebSocket 服务器")

然后配置 WebSocket 服务器信息, 先打开 `启用` 按钮, 随便填写一个名称, `消息格式` 为 `Array`, 如果你的 Minecraft 服务器和配置 QQ 机器人的机器是同一台, 则可以将 `Host` 改为 `127.0.0.1` (默认的 `0.0.0.0` 代表开放所有地址), `Port` (端口) 可保持不变 (要记住, 后面插件配置要用)

如果你不修改你的 `Host` (改为 `127.0.0.1` 或 `localhost` 等本地回环地址), 则推荐你设置一个 32位 随机字符的 `Token` 以保证安全性 (用于验证是否是合法的访问, 防止他人利用你的QQ), 也要记住这个 Token, 后面插件配置要用 (如果没填就不用记)

![Napcat 配置 WebSocket 服务器](/../assets/img/napcat-config-ws.png "Napcat 配置 WebSocket 服务器")

最后点击 `保存` 按钮即可

