# 后端 Napcat 安装

:::tip
一切以官方为准!
你可点击 [这里](https://napneko.pages.dev/) 进入 NapCat 的官方文档进行参考
:::

## 有头形式安装

### LiteLoaderQQNT 前置安装方式
:::warning
不能在无桌面环境的系统中安装有头形式的 Napcat!

你需要先安装 LiteLoaderQQNT!
:::

先打开 [Github Releases](https://github.com/NapNeko/NapCatQQ/releases) 找到名称为 `NapCat.Framework.zip` 的点击下载

接着打开 QQ 本体的设置, 点击 `LiteLoaderQQNT`, 找到 `安装新插件`, 点击右侧的 `选择文件` 按钮, 选择下载好的 `.zip` 文件, 然后重启 QQ 本体即可在设置中看到安装好的 Napcat 插件

### 一键安装方式

:::warning
不能在无桌面环境的系统中安装有头形式的 Napcat!
仅限于 Windows 系统!
:::

先打开 [Github Releases](https://github.com/NapNeko/NapCatQQ/releases) 找到名称为 `NapCat.Framework.Windows.Once.zip` 的点击下载, 接着把他解压到一个 **没有中文和空格** 的路径中, 打开文件夹里的 `.exe` 后缀的文件, 即可自动安装

## 无头形式安装

### Windows

先打开 [Github Releases](https://github.com/NapNeko/NapCatQQ/releases) 找到名称为 `NapCat.Shell.zip` 的点击下载并解压, 接着双击 `launcher.bat` 即可启动

### Linux (无需 QQ 本体)

执行以下命令即可一键安装:

```bash
curl -o napcat.sh https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh && sudo bash napcat.sh
```

