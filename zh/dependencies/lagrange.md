# 后端 Lagrange 安装

:::tip
一切以官方为准!
你可点击 [这里](https://lagrangedev.github.io/Lagrange.Doc/Lagrange.OneBot/) 进入 Lagrange (OneBot) 的官方文档进行参考
:::

先打开 [Github Releases](https://github.com/LagrangeDev/Lagrange.Core/releases), 找到对应你系统和架构的包, 下载并解压

接着如果你是 Windows 用户则直接打开 `Lagrange.OneBot.exe` 运行, 如果你是 Linux 或 macOS 用户可以执行以下命令启动:
```bash
chmod +x ./Lagrange.OneBot
./Lagrange.OneBot
```

初次打开启动, 应用程序会要求你配置文件

![初次打开Lagrange.OneBot](/assets/img/first-launch-lagrange.png "初次打开Lagrange.OneBot")

你可以先不管命令行窗口, 打开目录下的 `appsettings.json` 文件:

```json
{
    "$schema": "https://raw.githubusercontent.com/LagrangeDev/Lagrange.Core/master/Lagrange.OneBot/Resources/appsettings_schema.json",
    "Logging": {
        "LogLevel": {
            "Default": "Information",
            "Microsoft": "Warning",
            "Microsoft.Hosting.Lifetime": "Information"
        }
    },
    "SignServerUrl": "",
    "SignProxyUrl": "",
    "MusicSignServerUrl": "",
    "Account": {
        "Uin": 0,
        "Protocol": "Linux",
        "AutoReconnect": true,
        "GetOptimumServer": true
    },
    "Message": {
        "IgnoreSelf": true,
        "StringPost": false
    },
    "QrCode": {
        "ConsoleCompatibilityMode": false
    },
    "Implementations": [
        {
            "Type": "ReverseWebSocket",
            "Host": "127.0.0.1",
            "Port": 8080,
            "Suffix": "/onebot/v11/ws",
            "ReconnectInterval": 5000,
            "HeartBeatInterval": 5000,
            "AccessToken": ""
        }
    ]
}
```

其中比较重要的:
- `Uin`: 修改为你的 QQ 号
- `Implementations`: 代表 OneBot 协议实现, 这里我们只需要一个 `ForwardWebSocket` 实现, 你可以将默认配置文件 (上面的也是默认的) 中 `ReverseWebSocket` 部分删除, 并替换为正向 WebSocket 的, 修改后 `Implementations` 部分如下:

```jsonc
{
    // ... 上面的其它配置项
    "Implementations": [
        {
            "Type": "ForwardWebSocket",
            "Host": "127.0.0.1", // 如果你的 Minecraft 服务器和你当前使用 Lagrange 不在同一个机器, 请使用 0.0.0.0
            "Port": 3001, // 记住这个端口, 后面插件配置要用
            "HeartBeatInterval": 5000,
            "HeartBeatEnable": true,
            "AccessToken": "" // 如果 Host 使用 0.0.0.0, 推荐改为 32位随机字符 以保证安全性
        }
    ]
}
```

所以最终的配置文件如下 (你仍**必需**修改这里的 `Uin` 即 QQ号): 

```json
{
    "$schema": "https://raw.githubusercontent.com/LagrangeDev/Lagrange.Core/master/Lagrange.OneBot/Resources/appsettings_schema.json",
    "Logging": {
        "LogLevel": {
            "Default": "Information",
            "Microsoft": "Warning",
            "Microsoft.Hosting.Lifetime": "Information"
        }
    },
    "SignServerUrl": "",
    "SignProxyUrl": "",
    "MusicSignServerUrl": "",
    "Account": {
        "Uin": 114514,
        "Protocol": "Linux",
        "AutoReconnect": true,
        "GetOptimumServer": true
    },
    "Message": {
        "IgnoreSelf": true,
        "StringPost": false
    },
    "QrCode": {
        "ConsoleCompatibilityMode": false
    },
    "Implementations": [
        {
            "Type": "ForwardWebSocket",
            "Host": "127.0.0.1",
            "Port": 3001,
            "HeartBeatInterval": 5000,
            "HeartBeatEnable": true,
            "AccessToken": ""
        }
    ]
}
```

修改完后, 保存配置文件, 回到窗口, 按任意键, 程序就会启动, 接着就会要求你扫码登录, 目录下也保存了以 `qr-` 为开头的二维码图片, 你可以直接打开目录下的二维码扫码登录, 若登录后没有出现报错信息, 则代表登录成功了

![Lagrange.OneBot 登录](/assets/img/lagrange-login.png "Lagrange.OneBot 登录")