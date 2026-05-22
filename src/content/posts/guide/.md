---
title: Python 模块
published: 2026-05-22
description: Python 模块、导入、自定义模块、包学习笔记
tags: [Python]
category: Python笔记
draft: false
toc: true
mathjax: false
comments: true
---

# 介绍
Python模块(module)：一个.py文件就是一个模块。
模块是Python程序的基本组成单位，在模块中可以定义变量、函数、类以及可执行的代码。

作用：提高代码复用性，降低开发门槛。

# 导入模块
在使用模块中提供的功能之前，必须先导入再使用。
导入模块的语句一般放在Python文件开头。

| 导入形式                      | 代码样例                                 | 调用方式    | 实际调用演示                   |
| ----------------------------- | ---------------------------------------- | ----------- | ------------------------------ |
| import 模块名                  | `import random, os`                      | 模块名.功能名 | `random.randint(10,100)`       |
| import 模块名 as 别名          | `import random as rd`                    | 别名.功能名  | `rd.randint(10,100)`           |
| from 模块名 import 功能名       | `from random import randint, choice`     | 功能名      | `randint(10,100)`              |
| from 模块名 import 功能名 as 别名 | `from random import randint as rint`    | 别名        | `rint(10,100)`                 |
| from 模块名 import *           | `from random import *`                   | 功能名      | `randint(10,100)`              |

# 自定义模块
当开发复杂项目时，为了结构清晰、便于维护、代码复用，会把项目拆分为多个模块。

每一个Python文件都可以作为一个模块，模块名就是文件名。

# 包(package)
包本质就是一个文件夹，里面包含若干个模块，并且必须有 `__init__.py` 文件。

作用：管理多个模块，包本身也是一个模块。

### 包的导入方式
| 导入形式                   | 代码样例                     | 调用方式       |
| -------------------------- | ---------------------------- | -------------- |
| import 包名.模块名          | `import utils.my_fun`        | 包名.模块名.功能名 |
| from 包名 import 模块名     | `from utils import my_fun`   | 模块名.功能名    |
| from 包名 import *         | `from utils import *`        | 模块名.功能名    |
| from 包名.模块名 import 功能名 | `from utils.my_fun import log` | 功能名        |