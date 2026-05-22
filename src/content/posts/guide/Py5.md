---
title: 核心语法-模块
published: 2026-05-22
description: Python模块
tags: [Python模块]
category: Python
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

# Python 模块与包（Module & Package）笔记

---

# 模块（Module）

Python 模块（module）本质上就是一个 `.py` 文件。

模块是 Python 程序的基本组成单位，在模块中可以定义：

* 变量
* 函数
* 类
* 可执行代码

作用：

* 提高代码复用性
* 降低开发门槛
* 方便项目维护

人类把几十万行代码拆成模块。否则一个文件从盘古开天写到宇宙热寂，连自己都看不懂。代码也会开始报复社会。

---

# 导入模块

在使用模块中的功能之前，必须先导入模块。

导入语句一般写在 Python 文件开头。

---

# 导入形式

| 导入形式                      | 代码样例                                 | 调用方式      | 实际调用演示                   |
| ------------------------- | ------------------------------------ | --------- | ------------------------ |
| import 模块名                | `import random`                      | `模块名.功能名` | `random.randint(10,100)` |
| import 模块名 as 别名          | `import random as rd`                | `别名.功能名`  | `rd.randint(10,100)`     |
| from 模块名 import 功能名       | `from random import randint`         | `功能名`     | `randint(10,100)`        |
| from 模块名 import 功能名 as 别名 | `from random import randint as rint` | `别名`      | `rint(10,100)`           |
| from 模块名 import *         | `from random import *`               | `功能名`     | `randint(10,100)`        |

---

# 导入整个模块

调用方式：

```python
模块名.功能名
```

示例：

```python
import random

for i in range(100):
    print(random.randint(1,10))
```

---

# 导入模块并起别名

作用：

* 简化代码
* 防止模块名太长

示例：

```python
import random as rd

for i in range(5):
    print(rd.randint(1,100))
```

---

# 导入模块中的指定功能

调用方式：

```python
功能名()
```

示例：

```python
from random import randint

for i in range(12):
    print(randint(1,1000))
```

---

# 导入功能并起别名

示例：

```python
from random import randint as r

for i in range(12):
    print(r(1,10000))
```

---

# 导入模块中的所有功能

```python
from random import *

for i in range(12):
    print(randint(1,1000))
```

注意：

```python
from xxx import *
```

虽然方便，但实际开发中不推荐大量使用。

因为：

* 不知道功能来自哪个模块
* 容易发生重名冲突
* 代码可读性差

程序员最爱制造混乱，然后再发明“代码规范”去修补混乱。文明发展史一直如此。

---

# 自定义模块

复杂项目中，会把代码拆分成多个模块。

每一个 `.py` 文件都可以作为一个模块。

模块名就是文件名。

建议：

* 使用 Python 标识符命名
* 不要使用中文、空格、特殊字符

---

# my_fun.py 文件（被导入模块）

```python
"""
__all__ 是一个模块级别的特殊变量，
用于指定 from 模块名 import * 时会导入哪些功能

__all__ 控制的是：
from ... import * 时要导入的功能

不会影响：
from ... import 功能名
"""

__all__ = ["log1", "log3", "PI"]

# 常量（不会变化的量）
PI = 3.14
NAME = "周翔"

# 函数
def log1():
    print("-" * 30)

def log2():
    print("-" * 30)

def log3():
    print("*" * 30)

def log4():
    print("/" * 30)
```

---

# `__name__` 内置变量

## 问题

如果模块中直接写测试代码：

```python
log1()
```

当别的文件导入这个模块时，也会执行。

相当于：

```python
import my_fun
```

会把 `my_fun.py` 中代码全部执行一遍。

于是莫名其妙打印东西。像深夜自动播放广告的网页。

---

# 解决方法

使用：

```python
if __name__ == "__main__":
```

---

# `__name__` 的含义

Python 内置变量，无需定义。

表示当前模块名字。

规则：

| 场景       | **name** 的值  |
| -------- | ------------ |
| 直接运行当前文件 | `"__main__"` |
| 当前文件被导入  | 模块名          |

---

# 示例

```python
if __name__ == "__main__":
    log1()
```

含义：

* 当前文件自己运行 → 执行
* 被别人导入 → 不执行

---

# main.py 文件

与 `my_fun.py` 在同一个目录。

---

# 导入整个模块

```python
import my_fun

print(my_fun.PI)
print(my_fun.NAME)

my_fun.log1()
my_fun.log2()
my_fun.log3()
my_fun.log4()
```

---

# 导入指定功能

```python
from my_fun import log1, log3, PI, NAME

print(PI)
print(NAME)

log1()
log3()
```

---

# 导入所有功能

```python
from my_fun import *

print(PI)

log1()
log3()
```

因为：

```python
__all__ = ["log1","log3","PI"]
```

所以：

* `log2`
* `log4`
* `NAME`

不会被 `*` 导入。

---

# 包（Package）

包（package）本质上是一个文件夹。

文件夹中：

* 可以包含多个模块（`.py` 文件）
* 必须包含一个 `__init__.py`

结构示例：

```text
utils/
│
├── __init__.py
├── my_fun.py
└── my_var.py
```

---

# 包的作用

当模块很多时：

* 用包统一管理模块
* 结构更清晰
* 更方便维护

包本质上也是模块。

只不过是“模块管理器”。

人类很喜欢把东西装进更大的盒子里：

* 模块装进包
* 包装进项目
* 项目装进 Git
* Git 再装进焦虑。

---

# `__init__.py`

作用：

* 标识当前目录是一个包
* 可以写包的初始化代码
* 可以描述包信息

示例：

```python
# 包版本
__version__ = "1.0.0"

# 包作者
__author__ = "周翔"
```

---

# 包的导入方式

假设：

* 包名：`utils`
* 模块名：`my_fun`
* 功能名：`log`

---

| 导入形式                   | 代码样例                           | 调用方式                 |
| ---------------------- | ------------------------------ | -------------------- |
| import 包名.模块名          | `import utils.my_fun`          | `utils.my_fun.log()` |
| from 包名 import 模块名     | `from utils import my_fun`     | `my_fun.log()`       |
| from 包名 import *       | `from utils import *`          | `my_fun.log()`       |
| from 包名.模块名 import 功能名 | `from utils.my_fun import log` | `log()`              |
| from 包名.模块名 import *   | `from utils.my_fun import *`   | `log()`              |

---

# 导入包中的模块

```python
import utils.my_fun

utils.my_fun.log1()
utils.my_fun.log2()
```

---

# 导入模块

```python
from utils import my_fun

my_fun.log1()
my_fun.log2()
```

---

# 导入包中的所有模块

如果：

```python
from utils import *
```

需要在：

```python
__init__.py
```

中添加：

```python
__all__ = ["my_fun", "my_var"]
```

表示允许导入哪些模块。

---

# 示例

```python
from utils import *

my_fun.log1()
my_fun.log2()
my_fun.log3()

print(my_var.NAME)
print(my_var.PI)
```

---

# 导入模块中的功能

```python
from utils.my_fun import log1, log3

log1()
log3()
```

---

# 相对路径与绝对路径

## 相对路径

从当前目录开始查找。

```python
from utils.my_fun import log
```

---

## 绝对路径

从项目根目录开始查找。

```python
from 第二章.utils.my_fun import *

log1()
log2()
log3()
```

---

# 总结

---

## 模块

本质：

```text
一个 .py 文件
```

作用：

* 代码复用
* 功能拆分
* 方便维护

---

## 包

本质：

```text
一个包含 __init__.py 的文件夹
```

作用：

* 管理多个模块
* 组织大型项目

---

## 常用导入方式

推荐：

```python
import 模块名
```

或者：

```python
from 模块 import 功能
```

不推荐：

```python
from xxx import *
```

因为容易污染命名空间。

所谓“命名空间污染”，本质上就是：

你写了个 `log()`。

别人也写了个 `log()`。

Python 开始沉默。

程序员开始尖叫。

