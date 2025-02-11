# 自定义指令配置

先看看自定义指令的默认配置文件吧

```yaml
# 自定义命令配置文件
# 在QQ中执行该命令时返回指定结果
# 支持掺杂 PlaceholderAPI (简称 PAPI) 所提供的变量

# 例 1
# 返回服务器的 TPS
tps:
  # 是否开启该命令
  enable: true

  # 获取命令
  # 支持 正则表达式 使用 $regex:{你的正则表达式} (可作为参数匹配使用)
  # 支持添加自定义参数, 如 ${argName}, argName可改为自定义的参数名
  # 若是可选参数, 则为 ${argName?:default} default请填写默认值, 如无默认值则请填写 ${argName?}
  # 该参数可在下面的 execute, unbind_execute, output, unbind_output 中使用 如无默认值且用户未使用参数则为空
  command:
    - "/tps"
    - "tps"
    - "/服务器tps"
    - "服务器tps"
    - "TPS"
    - "/TPS"

  # 以后台身份执行命令 (可选) 支持 PAPI
  # 若不需要执行命令, 请将其设置为空
  # 命令不需要以/开头，会自动补全
  execute:
    - ""

  # 未绑定账号的用户以后台身份执行命令 (可选)
  # 同上
  unbind_execute:
    - ""

  # 若玩家绑定了多个账号, 要选用第几个作为 PlaceholderAPI 的变量解析玩家
  # 若玩家绑定账号小于这个个数, 则默认使用第一个
  choose_account: 1

  # 输出结果
  # 若想随机输出, 你可以在列表添加 $random 代表随机内容分隔符
  # 如: - "第一个随机选项" - "xxx" - "$random" - "第二个随机选项" - "$random" - "第三个随机选项"
  # 代表 随机输出 第一个选项(换行)xxx, 第二个选项, 第三个选项 中的其中一个
  output:
    - "服务器TPS: %spark_tps%"

  # 未绑定账号的玩家输出 (PAPI 变量将会以无身份 (null) 解析)
  # 同上支持随机输出
  unbind_output:
    - "服务器TPS: %spark_tps%"

  # 是否格式化颜色符号 (如: &7普通&a玩家 -> 普通玩家)
  format: true

# 例 2
# 返回服务器的 MSPT
mspt:
  enable: true
  command: ["/mspt", "mspt", "/服务器mspt", "服务器mspt", "MSPT", "/MSPT"]
  execute: [""]
  unbind_execute: [""]
  choose_account: 1
  output: ["服务器MSPT: %spark_tickduration%"]
  unbind_output: ["服务器MSPT: %spark_tickduration%"]
  format: true

# 例 3
# 返回服务器的CPU占用率
cpu:
  enable: true
  command: ["/cpu", "cpu", "/cpu占用", "cpu占用", "/cpu占用率", "cpu占用率", "CPU", "/CPU"]
  execute: [""]
  unbind_execute: [""]
  choose_account: 1
  output: ["服务器CPU占用率: %spark_cpu_system%"]
  unbind_output: ["服务器CPU占用率: %spark_cpu_system%"]
  format: true
```

:::warning
新版本修改了原本的例 1 (原来是获取玩家的前缀), 取而代之引入了三个例子来代替以原先在配置文件里的 TPS, MSPT, CPU 指令
:::

## 示例: 获取服务器帮助

要配置新的自定义指令, 要先在文件内添加一个新的名称, 然后设置开启该命令, 如下 (演示的是获取服务器帮助):
```yaml
# 上面的内容 ...

help:
  enable: true
```

接着, 设置在群内执行 `/help`, `help`, `帮助`, `/帮助` 能获取服务器帮助, 如下:
```yaml
# 上面的内容 ...
help:
  enable: true
  command:
    - "/help"
    - "help"
    - "帮助"
    - "/帮助"
```

然后设置执行的游戏命令, 该自定义指令不需要执行任何游戏命令, 可留空:
```yaml
# 上面的内容 ...
  command:
    - "/help"
    - "help"
    - "帮助"
    - "/帮助"
  execute: [""]
  unbind_execute: [""]
```

再然后设置选择的游戏帐户, 查看服务器帮助不需要用到 PAPI 变量, 所以用默认 (第1个) 账户即可
```yaml
# 上面的内容 ...
  execute: [""]
  unbind_execute: [""]
  choose_account: 1
```

最后设置输出的结果和是否格式化, 这里不需要进行格式化, 同时输出结果不需要因人而异, 所以: 
```yaml
# 上面的内容 ...
  choose_account: 1
  output: ["服务器帮助", "使用 IP mc.alazeprt.top 进入服务器", "支持 1.8 - 1.21.4"]
  unbind_output: ["服务器帮助", "使用 IP mc.alazeprt.top 进入服务器", "支持 1.8 - 1.21.4"]
  format: false
```

完成配置后, 保存, 执行 `/aqqbot reload`, 在群里发送 `/help` 等(上面配置的指令), 就可以看到服务器帮助了