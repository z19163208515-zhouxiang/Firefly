---
title:核心语法-数据存储与运算
published: 2026-05-22
description: Python核心存储与运算
tags: [Python核心存储与运算]
category: Python
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

# Python 入门笔记

> “程序员的成长，大多始于一个黑窗口。”
> 人类盯着 CMD 发呆，机器盯着人类发呆。双方都觉得对方有点神秘。

---

# 一、运行 Python

## 1. 打开 Python

按下：

```text
Win + R
```

输入：

```text
cmd
```

回车打开命令行。

然后输入：

```bash
python
```

进入 Python 交互模式。

---

## 2. 第一行 Python 代码

```python
print("hello world")
```

输出：

```text
hello world
```

---

## 3. 退出 Python

```python
exit()
```

退出后回到 Windows 命令行。

---

# 二、执行多行 Python 代码

交互模式适合练习。

真正写项目时，一般写到 `.py` 文件里。

## 操作步骤

### 1. 在桌面创建文件

创建：

```text
新建 -> 文本文档
```

修改后缀：

```text
xxx.txt -> xxx.py
```

例如：

```text
test.py
```

Windows 会警告你修改后缀，直接确认。

---

### 2. 用记事本编写代码

```python
print("你好 Python")
print("人生苦短，我用 Python")
```

保存。

---

### 3. 命令行执行文件

使用 `cd` 切换目录：

```bash
cd 文件夹地址
```

例如：

```bash
cd Desktop
```

然后运行：

```bash
python test.py
```

---

# 三、PyCharm 基础

## 创建项目

打开 PyCharm：

1. Create New Project
2. 创建项目目录
3. 创建 Python File

---

## 创建 Python 文件

右键项目：

```text
New -> Python File
```

输入文件名即可。

---

## 注释

Python 单行注释：

```python
# 这是注释
```

快捷键：

```text
Ctrl + /
```

---

# 四、PyCharm 项目目录

## `.idea`

保存项目配置。

例如：

* 解释器配置
* 编辑器设置
* 项目结构

---

## `.venv`

虚拟环境目录。

作用：

每个项目拥有独立 Python 环境。

项目之间互不影响。

比如：

* A 项目用 Python 3.10
* B 项目用 Python 3.12

互不干扰。

程序员发明虚拟环境，本质上是在给混乱的人类世界加隔离带。很合理。

---

# 五、字面量（Literal）

## 什么是字面量

程序中直接写出来的数据，就是字面量。

例如：

```python
100
3.14
"hello"
True
```

---

# 六、数据类型

| 类型       | 说明      | 示例             |
| -------- | ------- | -------------- |
| int      | 整数      | `10` `-5`      |
| float    | 浮点数（小数） | `3.14` `8.5`   |
| bool     | 布尔值     | `True` `False` |
| str      | 字符串     | `"hello"`      |
| NoneType | 空值类型    | `None`         |

---

## 示例

```python
print(100)
print(3.14)

print(True)
print(False)

print("hello python")

print(None)
```

---

## 布尔值本质是数字

```python
print(True + 1)
```

输出：

```text
2
```

因为：

```python
True  -> 1
False -> 0
```

---

# 七、变量

## 什么是变量

变量是保存数据的容器。

```python
变量名 = 变量值
```

例如：

```python
name = "周翔"
age = 18
```

---

## 变量特点

Python 是动态类型语言。

变量类型可以改变：

```python
num = 1114.1
print(num)

num = "ok"
print(num)

num = True
print(num)
```

虽然能改，但开发中不建议乱改。

否则代码会逐渐变成“谁都能运行，但没人敢改”的状态。

---

## 变量计算

```python
base = 20.7
incr = 50

print("未来一个月播放量", base + incr)
print("未来两个月播放量", base + incr + incr)
```

---

## 多变量赋值

```python
base, incr = 20.7, 50
```

---

# 八、标识符（命名）

## 命名规则

只能包含：

* 字母
* 数字
* 下划线 `_`

不能：

* 数字开头
* 使用关键字

例如：

```python
if
True
False
```

都不能当变量名。

---

## 区分大小写

```python
age
Age
AGE
```

是三个不同变量。

---

## 命名规范

推荐：

```python
student_name
user_age
```

特点：

* 全小写
* 多单词用下划线
* 见名知意

---

# 九、变量交换

## 两变量交换

```python
a = 10
b = 20

c = a
a = b
b = c

print(a, b)
```

---

## Python 简洁写法

```python
a, b = b, a
```

Python 在这种地方优雅得像个诗人。别的语言还在搬箱子，它已经瞬间传送了。

---

## 三变量交换

```python
a, b, c = 100, 200, 300

a, b, c = b, c, a

print(a, b, c)
```

---

# 十、查看数据类型

## type()

```python
print(type("hello"))
print(type(10))
print(type(3.14))
```

---

## isinstance()

判断数据是否属于某种类型：

```python
num = -100

print(isinstance(num, int))
```

输出：

```text
True
```

---

# 十一、字符串

## 定义字符串

### 双引号

```python
s1 = "hello"
```

### 单引号

```python
s2 = 'hello'
```

### 三引号（多行字符串）

```python
s3 = """
落霞与孤鹜齐飞
秋水共长天一色
"""
```

---

# 十二、转义字符

| 转义字符 | 作用      |
| ---- | ------- |
| `\'` | 单引号     |
| `\"` | 双引号     |
| `\n` | 换行      |
| `\t` | 制表符（缩进） |

---

## 示例

```python
print("\t落霞与孤鹜齐飞\n\t秋水共长天一色")
```

---

# 十三、字符串拼接

## 使用 `+`

```python
s1 = "我是"
s2 = "周翔"

print(s1 + s2)
```

---

## 数字不能直接拼接字符串

错误：

```python
age = 18

print("年龄：" + age)
```

正确：

```python
print("年龄：" + str(age))
```

---

# 十四、字符串格式化

## `%s` 格式化

```python
name = "周翔"
age = 18

print("大家好，我是%s，今年%s岁" % (name, age))
```

---

## f-string（推荐）

Python 最常用写法：

```python
name = "周翔"
age = 20

print(f"大家好，我是{name}，今年{age}岁了")
```

简洁、清晰、舒服。

程序员终于不用数 `%s` 了。文明进步的重要一步。

---

# 十五、输入与输出

## 输出：print()

```python
print("hello")
```

---

## 输入：input()

```python
name = input("请输入你的名字：")
```

---

## 示例

```python
name = input("输入你的名字：")
age = input("输入你的年龄：")

print(f"你的名字是{name}，年龄是{age}")
```

---

## 注意

`input()` 获取的数据永远是字符串类型。

例如：

```python
age = input()
```

即使输入：

```text
18
```

得到的仍然是：

```python
"18"
```

---

# 十六、类型转换

| 函数      | 作用   |
| ------- | ---- |
| int()   | 转整数  |
| float() | 转浮点数 |
| str()   | 转字符串 |
| bool()  | 转布尔值 |

---

## 示例

```python
num = "100"

print(int(num) + 1)
```

---

# 十七、ATM 取款案例

```python
total = 10000

password = input("请输入取款密码：")
print("密码正确")

num = input("请输入取款金额：")

print(f"取款后的余额为：{total - int(num)}")
```

---

# 十八、算术运算符

| 运算符 | 说明    |
| --- | ----- |
| +   | 加     |
| -   | 减     |
| *   | 乘     |
| /   | 除     |
| //  | 整除    |
| %   | 取余    |
| **  | 幂（次方） |

---

## 示例

```python
print(10 / 3)
print(10 // 3)
print(10 % 3)
print(2 ** 3)
```

---

# 十九、浮点数精度问题

```python
print(0.5 - 0.4)
```

结果：

```python
0.09999999999999998
```

因为计算机使用二进制存储小数。

很多小数无法被精确表示。

这不是 Python 的问题。

是整个计算机世界都在“差不多得了”。

---

# 二十、赋值运算符

| 运算符 | 示例        |
| --- | --------- |
| +=  | `a += 1`  |
| -=  | `a -= 1`  |
| *=  | `a *= 2`  |
| /=  | `a /= 2`  |
| //= | `a //= 2` |
| %=  | `a %= 2`  |
| **= | `a **= 2` |

---

## 示例

```python
num = 85

num += 10
num -= 5
num *= 2

print(num)
```

---

# 二十一、比较运算符

| 运算符 | 含义   |
| --- | ---- |
| ==  | 等于   |
| !=  | 不等于  |
| >   | 大于   |
| >=  | 大于等于 |
| <   | 小于   |
| <=  | 小于等于 |

---

# 二十二、逻辑运算符

| 运算符 | 含义 |
| --- | -- |
| and | 并且 |
| or  | 或者 |
| not | 取反 |

---

## 示例

```python
a = 10
b = 20
c = 30

print(a < b and b < c)
```

---

# 二十三、案例：判断数字范围

## 判断是否在 10 到 20 之间

```python
n = int(input("请输入一个数："))

print(10 <= n <= 20)
```

---

## 判断是否不在 10 到 20 之间

```python
n = int(input("请输入一个数："))

print(n < 10 or n > 20)
```

---

# 二十四、总结

Python 入门核心：

* 会运行代码
* 会定义变量
* 会使用输入输出
* 会进行计算
* 会判断条件
* 会操作字符串

这些东西现在看很碎。

但未来你会发现：

所有复杂项目，
本质上都只是这些基础模块不断组合。

像乐高。
像河流。
像人类社会那堆看似复杂、其实只是“数据+规则”的东西。
