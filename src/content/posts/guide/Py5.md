---
title: 核心语法-模块
published: 2026-06-05
description: Python模块
tags: [Python模块]
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
# 注意：这里故意只列出 PI 而不列出 NAME，用以演示 __all__ 的筛选作用
__all__ = ["log1", "log3", "PI"]

# 常量（不会发生变化的量，常量的名称为全部大写）
PI = 3.14
NAME = "ZX"

# 函数
def log1():
    print("-" * 30)   # - 重复输出30次

def log2():
    print("=" * 30)

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
from my_fun import *   # my_fun.py中的__all__ = ["log1", "log3", "PI"] 限制了 * 导入的内容
print(PI)   # 可以访问，因为 PI 在 __all__ 中
# print(NAME)   # 若取消注释会报错，因为 NAME 不在 __all__ 中
log1()
log3()
```

---

## 包(package)

**包**：本质就是一个文件夹，该文件夹中可以包含若干个python模块（.py文件），文件夹下还包含了一个`__init__.py`文件。

**作用**：模块文件较多时，用来管理多个模块（包本质也是一个模块）。

- 在文件夹下创建`__init__.py`文件创建包
- 或直接在创建文件夹时创建包

### `__init__.py`文件的作用

除了标识一个文件夹是包以外，`__init__.py` 还可以：

- 描述包信息（版本、作者等）
- **控制包的导入行为**：通过定义 `__all__` 列表，指定 `from 包名 import *` 时导入哪些子模块；或直接使用 `from . import 子模块` 将子模块提前导入到包命名空间，方便用户使用。

#### 示例：`utils/__init__.py`

```python
# 包版本
__version__ = "1.0.0"
# 包作者
__author__ = "ZX"

# 方式一：通过 __all__ 控制 from utils import * 的行为
__all__ = ["my_fun", "my_var"]

# 方式二（可选）：提前将子模块导入到包命名空间，使得可以直接 from utils import my_fun
# from . import my_fun
# from . import my_var
```

---

## 包的导入方式

前三种导入模块，后两种导入模块中的功能。

假设包名是`utils`，模块名是`my_fun`，功能名是`log`。

| 导入形式 | 代码样例 | 调用方式 | 调用示例 |
|----------|----------|----------|----------|
| `import 包名.模块名` | `import utils.my_fun` | `包名.模块名.功能名` | `utils.my_fun.log` |
| `from 包名 import 模块名` | `from utils import my_fun` | `模块名.功能名` | `my_fun.log` |
| `from 包名 import *` （*需要包内`__init__.py`配置了`__all__`或显式导入子模块*） | `from utils import *` | `模块名.功能名` | `my_fun.log` |
| `from 包名.模块名 import 功能名` | `from utils.my_fun import log` | `功能名` | `log` |
| `from 包名.模块名 import *` | `from utils.my_fun import *` | `功能名` | `log` |

**注意**：表格中第三种方式 `from 包名 import *` 只有在包内的 `__init__.py` 中设置了 `__all__ = ["my_fun", ...]` 或执行了 `from . import my_fun` 等操作后，才能用 `my_fun.log` 方式调用。否则，该语句不会自动将子模块引入命名空间。

### 目录结构示例

```
project/                    # 项目根目录
│
├── main.py                 # 入口文件（要导入包/模块的文件）
│
└── utils/                  # 包（Package）
    ├── __init__.py         # 包标识文件，可控制导入行为
    ├── my_fun.py           # 功能模块
    └── my_var.py           # 变量模块
```

### 需要导入模块或功能的文件（`main.py`）代码如下

```python
# 导入模块
# import utils.my_fun
# utils.my_fun.log1()
# utils.my_fun.log2()

# from utils import my_fun
# my_fun.log1()
# my_fun.log2()

# 如果通过 from utils import * 导入包下的所有模块
# 需要 __init__.py 文件中添加 __all__ = ["my_fun", "my_var"]（包中的两个模块）
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

# 导入模块中的全部功能（受 my_fun.py 自身的 __all__ 影响）
from utils.my_fun import *
log1()
log2()   # log2 是否可用取决于 my_fun.py 的 __all__ 是否包含它
log3()

# 绝对路径导入（需要确保 second 目录在 sys.path 中）
# 此处仅作示意，实际项目中若 second 为项目根目录下的一个包，且 utils 为其子包，则可使用
# from second.utils.my_fun import *
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
- 也可以直接 `from . import 子模块` 将子模块导入到包命名空间，使用户更方便地调用

### 关于导入路径

- **相对路径**：在包内部模块间相互导入时，可以使用相对导入，如 `from . import my_var`。
- **绝对路径**：从项目的根目录开始导入，需要确保根目录在 `sys.path` 中（例如通过 `PYTHONPATH` 环境变量，或手动 `sys.path.append("项目根目录")`）。否则会引发 `ModuleNotFoundError`。
- 本示例中，`main.py` 和 `utils` 在同一级目录下，直接 `import utils` 即可工作，无需额外设置。
```
用**示意图（文本结构图）** + **对应的代码表示**，把这三句话彻底给你拆解明白。

---

## 先看统一的项目结构（假设）

```
my_project/                     # 项目根目录
│
├── main.py                     #  入口文件（启动程序）
│
└── utils/                      #  这是一个包（Package）
    ├── __init__.py
    ├── my_fun.py               #  模块1
    └── my_var.py               #  模块2（里面定义了 PI = 3.14）
```

---

## 场景一：同级目录下，直接 `import utils`（无需设置）

### 示意图

```text
【Python 的搜索路径（sys.path）】
默认包含：运行 main.py 时所在的文件夹 → my_project/

┌─────────────────────────────────────┐
│          my_project/                │  ← Python 默认在这里找
│          │                          │
│    ┌─────┴─────┐                    │
│    │           │                    │
│  main.py    utils/                  │  ← main.py 和 utils 是“邻居”
│              │                      │
│          my_fun.py                  │
│          my_var.py                  │
└─────────────────────────────────────┘

因为 Python 在 my_project/ 里找到了 utils 文件夹，所以直接导入成功！
```

### 对应代码（main.py）

```python
# 这是 main.py 的代码
import utils          #  直接写包名，Python 在当前目录搜到了 utils 文件夹
from utils import my_fun   #  也可以这样精确导入

my_fun.log1()          # 调用成功
```

---

## 场景二：包内部模块间互导，使用 `from . import my_var`（相对路径）

### 示意图

```text
【放大 utils 包的内部】
在 my_fun.py 里面写代码时，“.” 代表“当前所在的包（即 utils 文件夹）”

┌─────────────────────────────────────┐
│          utils/   (包)              │
│          │                          │
│    ┌─────┴─────┐                    │
│    │           │                    │
│ __init__.py  my_fun.py  ← 我在这里 │
│              (写代码)   │           │
│              │          │           │
│              └──────────┼───────────┘
│                         │
│                    my_var.py  ← 我想找这个兄弟
│
└─────────────────────────────────────┘

from . import my_var
      ↑
      └── 这个点（.）指的就是 utils 这个文件夹
          意思：去 utils 文件夹里找 my_var.py
```

### 对应代码（my_fun.py）

```python
# 这是 utils/my_fun.py 的代码

from . import my_var      # . 代表当前 utils 包，精准定位到同目录的 my_var.py

def show_pi():
    print(my_var.PI)      # 输出 3.14
```

**如果去掉点（错误示范）：**
```python
# 这是 utils/my_fun.py 的代码（错误写法）
import my_var             #  删掉了 .，Python 会去整个项目/系统里乱找，容易找错文件
```

---

## 场景三：不同级目录（复杂项目），必须用绝对路径 + 手动设置 `sys.path`

### 示意图

```text
【把 main.py 挪到子文件夹里，情况就变了】

my_project/                     # 项目根目录
│
├── src/                        #  新建了 src 文件夹
│   └── main.py                 #  入口文件藏在这里面了
│
└── utils/                      #  utils 和 src 是平级的“兄弟”
    ├── __init__.py
    ├── my_fun.py
    └── my_var.py

【问题】当运行 python src/main.py 时，Python 默认只搜索 src/ 文件夹。
        它在 src/ 里找不到 utils 文件夹，所以报错！

【解决方法】手动把 my_project/ 加入搜索列表
```

### 对应代码（src/main.py）

```python
# 这是 src/main.py 的代码（必须写在最顶部）

import sys
import os

# 1. 获取当前文件（main.py）所在的绝对路径
# 比如：D:/my_project/src/main.py
current_dir = os.path.dirname(os.path.abspath(__file__))

# 2. 获取项目根目录（往上一级，从 src/ 到 my_project/）
# 比如：D:/my_project
project_root = os.path.dirname(current_dir)

# 3. 手动把项目根目录添加到 Python 的搜索清单
if project_root not in sys.path:
    sys.path.append(project_root)

# 4. 现在可以正常导入了（因为 Python 会去 my_project/ 下面找 utils）
from utils.my_fun import log1   # 成功！

log1()
```

---
