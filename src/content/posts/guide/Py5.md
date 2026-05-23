---
title: 核心语法-模块
published: 2026-05-22
description: Python模块
tags: [Python模块,学习]
category: Python
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

# Python 模块与包完整笔记

## 介绍

Python模块(module)：一个`.py`文件就是一个模块。模块是Python程序的基本组成单位，在模块中可以定义变量、函数、类以及可执行的代码。

- 提高代码复用性
- 降低开发门槛

---

## 导入模块

在使用模块中提供的功能之前，必须得先导入，再使用。

导入模块的语句，一般放在Python文件开头。

| 导入形式 | 代码样例 | 调用方式 | 实际调用演示 |
|----------|----------|----------|--------------|
| `import 模块名` | `import random, os` | `模块名.功能名` | `random.randint(10,100)` |
| `import 模块名 as 别名` | `import random as rd` | `别名.功能名` | `rd.randint(10,100)` |
| `from 模块名 import 功能名` | `from random import randint, choice` | `功能名` | `randint(10,100)` |
| `from 模块名 import 功能名 as 别名` | `from random import randint as rint` | `别名` | `rint(10,100)` |
| `from 模块名 import *` | `from random import *` | `功能名` | `randint(10,100)` |

```python
# 导入整个模块 -> 调用方式: 模块名.功能名 / 别名.功能名
import random
for i in range(100):
    print(random.randint(1, 10))

import random as rd
for i in range(5):
    print(rd.randint(1, 100))

# 导入模块的功能 from... import... -> 调用方式: 功能名 / 别名
from random import randint
for i in range(12):
    print(randint(1, 1000))

from random import randint as r
for i in range(12):
    print(r(1, 10000))

# 导入模块中的所有功能 -> 调用方式: 功能名
from random import *
for i in range(12):
    print(randint(1, 1000))
```

---

## 自定义模块

当开发一些复杂的项目，为了让项目结构更加清晰、更便于项目的维护管理及代码的复用，可能会把一个项目拆分为若干个模块。

每一个python文件都可以作为一个模块，模块的名字就是文件的名字（建议使用python标识符定义，规范命名）。

### my_fun.py文件（要被main.py导入的模块）

```python
"""
__all__是一个模块级别的特殊变量，用于指定 from 模块名 import * 时会导入哪些功能（*适配了哪些功能）
__all__控制的是 from...import * 时，要导入的功能
并不会影响直接导入具体的功能（如 from...import 功能）
"""
__all__ = ["log1", "log3", "PI"]

# 常量（不会发生变化的量，常量的名称为全部大写）
PI = 3.14
NAME = "周翔"

# 函数
def log1():
    print("-" * 30)   # - 重复输出30次

def log2():
    print("-" * 30)

def log3():
    print("*" * 30)

def log4():
    print("/" * 30)

"""
测试函数
在main.py导入模块后，相当于把my_fun的代码复制到了main.py前面，会执行log1()

解决方法（内置变量__name__）
__name__: Python中的内置变量（无需定义，直接使用）
表示当前模块的名字

1. 直接运行当前模块，__name__的值为 __main__
2. 当该模块被导入时，__name__的值就是模块的名称（my_fun）

# 在my_fun.py运行值为 __main__
# 当把my_fun模块导入main.py文件中，运行后，值为 my_fun（模块名称）
# print(__name__)
"""

# 执行当前文件，则会执行如下代码；如果当前模块被导入，如下代码不执行
if __name__ == "__main__":
    log1()
```

### main.py文件（和my_fun同属一个文件夹内）

```python
# 导入自定义模块
# import my_fun

# 使用模块的功能
"""
print(my_fun.PI)
print(my_fun.NAME)

my_fun.log1()
my_fun.log2()
my_fun.log3()
my_fun.log4()
"""

# 导入模块中的功能
# from my_fun import log1, log3, PI, NAME

# 使用模块中的功能
# print(PI)
# print(NAME)
# log1()
# log3()

# 导入my_fun.py模块中的所有功能
from my_fun import *   # my_fun.py中的__all__ = []指定了导入的功能
print(PI)
log1()
log3()
```

---

## 包(package)

**包**：本质就是一个文件夹，该文件夹中可以包含若干个python模块（.py文件），文件夹下还包含了一个`__init__.py`文件。

**作用**：模块文件较多时，用来管理多个模块（包本质也是一个模块）。

- 在文件夹下创建`__init__.py`文件创建包
- 或直接在创建文件夹时创建包

### 在`__init__.py`文件中可以描述包信息

```python
# 包版本
__version__ = "1.0.0"
# 包作者
__author__ = "周翔"
```

---

## 包的导入方式

前三种导入模块，后两种导入模块中的功能。

假设包名是`utils`，模块名是`my_fun`，功能名是`log`。

| 导入形式 | 代码样例 | 调用方式 | 调用示例 |
|----------|----------|----------|----------|
| `import 包名.模块名` | `import utils.my_fun` | `包名.模块名.功能名` | `utils.my_fun.log` |
| `from 包名 import 模块名` | `from utils import my_fun` | `模块名.功能名` | `my_fun.log` |
| `from 包名 import *` | `from utils import *` | `模块名.功能名` | `my_fun.log` |
| `from 包名.模块名 import 功能名` | `from utils.my_fun import log` | `功能名` | `log` |
| `from 包名.模块名 import *` | `from utils.my_fun import *` | `功能名` | `log` |

### 目录结构示例

大文件夹中包含`utils`包文件（`__init__.py`、`my_fun.py`、`my_var.py`）和一个需要导入模块或功能的文件。

### 需要导入模块或功能的文件的代码如下

```python
# 导入模块
# import utils.my_fun
# utils.my_fun.log1()
# utils.my_fun.log2()

# from utils import my_fun
# my_fun.log1()
# my_fun.log2()

# 如果通过 from utils import * 导入包下的所有模块
# 需要__init__文件中添加 __all__ = ["my_fun", "my_var"]（包中的两个模块，写几个导入就几个模块）
# from utils import *
# my_fun.log1()
# my_fun.log2()
# my_fun.log3()
# print(my_var.NAME)
# print(my_var.PI)

# 导入模块中的功能
# from utils.my_fun import log1, log3
# log1()
# log3()

# 相对路径（从当前目录查找）
# from utils.my_fun import log

# 绝对路径（从项目的根目录查找）
from 第二章.utils.my_fun import *
log1()
log2()
log3()
```

---

## 关键点总结

### `__name__`内置变量

- 直接运行当前模块时，`__name__`的值为`__main__`
- 当该模块被导入时，`__name__`的值就是模块的名称（如`my_fun`）

### `__all__`模块变量

- 是一个模块级别的特殊变量
- 用于指定`from 模块名 import *`时会导入哪些功能
- 只控制`from...import *`时的导入行为，不影响直接导入具体功能

### `__init__.py`文件

- 标识一个文件夹是一个Python包
- 可以包含包的信息（版本、作者等）
- 可以通过`__all__`控制`from 包名 import *`时导入的模块