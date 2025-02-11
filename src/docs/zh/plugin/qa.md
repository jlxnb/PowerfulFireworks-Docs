# Q&A 常见问题解答

## 交流群

在看完这里没有头绪的情况下欢迎加群交流: 
[插件交流群 (QQ群): 669737143](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=iNRMB5xcrCjHIhph1O3SLvjzvdbqWi4l&authKey=zo29OVGBNyGQ1JicDR79UmssVL8kAu2ubW8PVT%2FSqfC97UNaDVo1Dac%2F7e8M9WAP&noverify=0&group_code=669737143)

## 面板服可以使用吗?

面板服要用的前提是能安装 OneBot 后端

如果你使用的面板可以创建 **命令行** 形式的新实例, 就可以使用 (Lagrange.OneBot 无头后端)

如果你使用的面板可以使用一些 **其它(外部)** 的 **Docker 镜像** 而不局限于 Java 的镜像, 也可以使用 (Napcat 的 Docker 镜像)

当然, 如果你还有其它的公网机器 (不一定要公网, 只要面板能访问到你的机器), 那当然可以

常见例子:

### simpfun.cn (简幻欢)

一般情况下不行, 因为面板不能新建实例, 也没有提供其它的 Docker 镜像

### 使用 RDP 连接的 Windows VPS (云服务器) / 使用 SSH 连接的 Linux VPS (云服务器)

可以使用

## 出现错误怎么办

按情况处理:

### java.net.ConnectException

类似于:

```log
[14:27:18 ERROR]: java.net.ConnectException: Connection refused: connect
[14:27:18 ERROR]:       at java.base/sun.nio.ch.Net.connect0(Native Method)
[14:27:18 ERROR]:       at java.base/sun.nio.ch.Net.connect(Net.java:589)
[14:27:18 ERROR]:       at java.base/sun.nio.ch.Net.connect(Net.java:578)
[14:27:18 ERROR]:       at java.base/sun.nio.ch.NioSocketImpl.connect(NioSocketImpl.java:583)
[14:27:18 ERROR]:       at java.base/java.net.Socket.connect(Socket.java:751)
[14:27:18 ERROR]:       at org.java_websocket.client.WebSocketClient.run(WebSocketClient.java:491)
[14:27:18 ERROR]:       at java.base/java.lang.Thread.run(Thread.java:1583)
```

无法与 OneBot 后端建立连接, 请检查 OneBot 后端是否正常运行, WebSocket 端口配置是否正确, 如果是连接到另外一台机器请检查防火墙

### SLF4J: No SLF4J providers were found.

类似于:

```log
[14:27:18 ERROR]: SLF4J: No SLF4J providers were found.
[14:27:18 ERROR]: SLF4J: Defaulting to no-operation (NOP) logger implementation
[14:27:18 ERROR]: SLF4J: See https://www.slf4j.org/codes.html#noProviders for further details.
```

不影响使用

### 其它错误

先 `/aqqbot reload` 重载插件观察是否恢复, 若未恢复则重启服务器, 若重启后仍未恢复, 则可能是因为你的 OneBot 后端配置了访问密钥 (Token, access_token) 而你在插件中没有配置

若还是不行, 请加入交流群反馈或提交 issue

## 连接上了但没有反应怎么办

如果有报错参考上面 出现错误怎么办

如果没有报错, 先 `/aqqbot reload` 重载插件观察是否恢复, 若未恢复则重启服务器, 若重启后仍未恢复, 则可能是因为你的 OneBot 后端配置了访问密钥 (Token, access_token) 而你在插件中没有配置

若还是不行, 请加入交流群反馈或提交 issue

## 其它问题

请加入交流群提问