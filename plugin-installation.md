# 安装插件

:::warning 警告
使用插件过程中需要保持 OneBot 11 后端始终正在运行
:::

:::tip 提示
该插件支持所有Spigot系的服务端 (如Paper, Purpur, Leaf, Leaves等)
:::

1. 从 [MineBBS](https://www.minebbs.com/resources/aqqbot.9921/), [Modrinth](https://modrinth.com/plugin/aqqbot) 或 [GitHub Actions](https://github.com/alazeprt/AQQBot/actions) 下载插件
:::warning 警告
GitHub Actions 中的插件不是正式版, 不宜用于生产环境!
:::
2. 将插件移动到服务端的 `plugins` 目录下
3. 重启服务器, 执行 `/plugins` 命令, 若看到插件 `AQQBot` 则说明加载成功
4. 打开 `plugins/AQQBot` 目录, 编辑 `bot.yml`: 
```yaml
# 正向Websocket配置
ws:
  # 主机地址
  host: "localhost"

  # 端口
  port: 3001

# 启用插件的群号
groups:
  - "114514"
```
- 将此处的 `ws.host` 改为你运行OneBot后端的主机地址 (若在同一机器上运行则不需要修改)
- 将此处的 `ws.port` 改为你OneBot后端正向Websocket配置的端口
- 将这里的 `groups` 中的 `114514` 改为你启用该插件功能的群号

5. 再次重启服务器, 若没有出现报错且执行 `/plugins` 命令看到插件 `AQQBot`, 则说明安装成功