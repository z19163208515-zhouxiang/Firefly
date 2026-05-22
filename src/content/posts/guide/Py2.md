---
title: 核心语法-流程控制语句
published: 2026-05-22
description: Python流程控制语句
tags: [Python流程控制语句]
category: Python
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

# Python 流程控制与循环笔记

> 程序真正开始“像人一样思考”，往往从 `if` 开始。
> 它终于学会了判断。虽然很多时候判断得还不如人类清醒。

---

# 一、if 条件语句

## 基本语法

```python
if 条件:
    条件成立时执行的代码
else:
    条件不成立时执行的代码
```

注意：

* `if` 后面必须加 `:`
* 属于 `if` 的代码必须缩进
* Python 默认缩进 4 个空格

---

## 示例

```python
score = 695

if score > 680:
    print("你被录取了")
    print("清华大学")
```

---

# 二、if-elif-else 多分支判断

## 语法

```python
if 条件1:
    代码1
elif 条件2:
    代码2
elif 条件3:
    代码3
else:
    其他情况执行
```

特点：

* `elif` 可以有多个
* `else` 可有可无
* `else` 必须放最后

---

# 三、账号密码判断案例

```python
password1 = "202591880239"
account1 = "z1111"

# 用户输入
password2 = input("请输入密码：")
account2 = input("请输入账号：")

# 判断
if password2 == password1 and account2 == account1:
    print("登录成功")
    print("进入首页")
else:
    print("登录失败")
    print("账号或密码错误")
```

---

# 四、判断闰年

## 闰年规则

满足以下条件之一：

* 能被 4 整除，但不能被 100 整除
* 能被 400 整除

---

## 示例

```python
year = int(input("请输入年份："))

if (year % 100 != 0 and year % 4 == 0) or (year % 400 == 0):
    print(f"{year} 年是闰年")
else:
    print(f"{year} 年不是闰年")
```

人类为了修正地球公转误差，发明了闰年。
程序员为了修正人类写的代码，又发明了更多判断。

---

# 五、判断正数、负数、零

```python
num = int(input("请输入一个数字："))

if num > 0:
    print(f"{num} 是正数")
elif num < 0:
    print(f"{num} 是负数")
else:
    print(f"{num} 是零")
```

---

# 六、多账号登录案例

```python
username = input("请输入用户名：")
password = input("请输入密码：")

if username == "admin" and password == "666888":
    print("登录成功")

elif username == "root" and password == "547527":
    print("登录成功")

elif username == "zhangsan" and password == "123456":
    print("登录成功")

else:
    print("登录失败")
```

---

# 七、多行注释

```python
"""
这是多行注释
可以写很多内容
"""
```

一般用于：

* 代码说明
* 文档注释
* 临时屏蔽代码

---

# 八、pass 空语句

## 什么是 pass

`pass` 表示：

> 什么都不做

常用于：

* 占位置
* 后续再补代码

---

## 示例

```python
if a + b > c and a + c > b and b + c > a:
    pass
```

---

# 九、嵌套 if 语句

## 判断三角形类型

```python
a = int(input("边1："))
b = int(input("边2："))
c = int(input("边3："))

# 判断能否构成三角形
if a + b > c and a + c > b and b + c > a:

    # 等边三角形
    if a == b and b == c:
        print("等边三角形")

    # 等腰三角形
    elif a == b or b == c or a == c:
        print("等腰三角形")

    # 普通三角形
    else:
        print("普通三角形")

else:
    print("无法构成三角形")
```

---

# 十、match 模式匹配

Python 3.10 新特性。

类似其它语言里的 `switch`。

---

## 基本语法

```python
match 变量:
    case 值1:
        执行代码

    case 值2:
        执行代码

    case _:
        默认情况
```

---

## 星期判断案例

```python
day = input("请输入星期（1-7）：")

match day:

    case "1":
        print("周一")

    case "2":
        print("周二")

    case "3":
        print("周三")

    case "4":
        print("周四")

    case "5" | "6" | "7":
        print("放假喽")

    case _:
        print("输入错误")
```

`|` 表示“或”。

---

# 十一、简易计算器

```python
oper = input("请输入运算符：")

a = int(input("数字1："))
b = int(input("数字2："))

match oper:

    case "+":
        print(f"{a} + {b} = {a + b}")

    case "-":
        print(f"{a} - {b} = {a - b}")

    case "*":
        print(f"{a} * {b} = {a * b}")

    case "/" if b != 0:
        print(f"{a} / {b} = {a / b}")

    case _:
        print("输入错误")
```

`case "/" if b != 0`

表示：

只有 `b != 0` 时才允许除法。

毕竟数学允许很多东西，但不允许拿 0 当除数胡来。

---

# 十二、while 循环

## 基本语法

```python
while 条件:
    循环体
```

---

## 示例

```python
i = 0

while i < 10:
    print("MiNASA")
    i += 1
```

---

## while + else

```python
i = 0

while i < 3:
    print(i)
    i += 1
else:
    print("循环正常结束")
```

注意：

如果循环被 `break` 强行结束：

```python
else
```

不会执行。

---

# 十三、while 累加案例

## 计算 1~100 偶数和

```python
total = 0
i = 1

while i <= 100:

    if i % 2 == 0:
        total += i

    i += 1

print(total)
```

---

# 十四、for 循环

## 基本语法

```python
for 元素 in 数据集:
    循环体
```

---

# 十五、range() 语句

## 用法1：range(end)

```python
range(5)
```

结果：

```python
0 1 2 3 4
```

不包含 5。

---

## 用法2：range(start, end)

```python
range(2, 8)
```

结果：

```python
2 3 4 5 6 7
```

---

## 用法3：range(start, end, step)

```python
range(0, 10, 2)
```

结果：

```python
0 2 4 6 8
```

`step` 表示步长。

---

# 十六、遍历字符串

```python
msg = input("请输入字符串：")

for i in msg:
    print(i)

else:
    print("循环结束")
```

字符串本质上是字符序列。

所以可以一个字符一个字符遍历。

---

# 十七、案例：计算奇数和

## 方法1

```python
total = 0

for i in range(1, 101):

    if i % 2 == 1:
        total += i

print(total)
```

---

## 方法2（更高效）

```python
total = 0

for i in range(1, 101, 2):
    total += i

print(total)
```

---

# 十八、案例：3 的倍数之和

## 计算 100~500 所有 3 的倍数之和

### 方法1

```python
total = 0

for i in range(100, 501):

    if i % 3 == 0:
        total += i

print(total)
```

---

### 方法2（推荐）

```python
total = 0

for i in range(102, 501, 3):
    total += i

print(total)
```

---

# 十九、循环嵌套

## 基本语法

```python
for i in 数据1:

    for j in 数据2:
        执行代码
```

常用于：

* 图形打印
* 表格
* 二维结构

---

# 二十、print() 的 end 参数

默认：

```python
print("*")
```

会自动换行。

---

## 不换行

```python
print("*", end="")
```

---

## 修改结束符

```python
print("*", end=" ")
```

输出后以空格结尾。

---

# 二十一、打印长方形

```python
m = int(input("请输入长："))
n = int(input("请输入宽："))

for i in range(n):

    for j in range(m):
        print("*", end="")

    print()
```

---

# 二十二、九九乘法表

```python
for i in range(1, 10):

    for j in range(1, i + 1):
        print(f"{j} * {i} = {i * j}", end="\t")

    print()
```

`\t` 是制表符。

用于对齐。

---

# 二十三、打印直角三角形

```python
n = int(input("请输入边长："))

for i in range(1, n + 1):

    for j in range(i):
        print("*", end=" ")

    print()
```

---

## 简洁写法

```python
n = int(input("请输入边长："))

for i in range(1, n + 1):
    print("* " * i)
```

Python 在字符串处理上，经常优雅得不像现实世界的产物。

---

# 二十四、打印数字金字塔

```python
n = int(input("请输入数字："))

for i in range(1, n + 1):

    for j in range(1, i + 1):
        print(j, end=" ")

    print()
```

---

# 二十五、打印国际象棋棋盘

## 方法1

```python
for i in range(8):

    for j in range(8):

        if (i + j) % 2 == 0:
            print("■", end=" ")

        else:
            print("□", end=" ")

    print()
```

---

## 原理

国际象棋棋盘是：

```text
8 × 8
```

黑白交替。

利用：

```python
(i + j) % 2
```

判断颜色：

* 结果为 0 → 黑格
* 结果为 1 → 白格

---

# 二十六、break 与 continue

| 关键字      | 作用     |
| -------- | ------ |
| break    | 结束整个循环 |
| continue | 跳过本次循环 |

---

# 二十七、登录系统案例

```python
while True:

    username = input("输入用户名：")
    password = input("输入密码：")

    # 判空
    if username == "" or password == "":
        print("用户名或密码不能为空")
        continue

    # 登录成功
    if username == "admin" and password == "666888":
        print("登录成功")
        break

    elif username == "zhouxiang" and password == "070227":
        print("登录成功")
        break

    else:
        print("用户名或密码错误")
```

---

# 二十八、限制五次登录机会

```python
count = 5

for i in range(5):

    username = input("输入账号：")
    password = input("输入密码：")

    if username == "" or password == "":
        print("账号和密码不能为空")

        count -= 1

        print(f"你还有 {count} 次机会")
        continue

    if username == "zhouxiang" and password == "070227":
        print("登录成功")
        break

    else:
        print("输入错误")

        count -= 1

        if count > 0:
            print(f"你还有 {count} 次机会")

if count <= 0:
    print("你已经输入错误五次，请 30 秒后再试")
```

---

# 二十九、猜数字小游戏

## 生成随机数

```python
import random

random_number = random.randint(1, 100)
```

---

## 游戏代码

```python
import random

random_number = random.randint(1, 100)

while True:

    num = int(input("请输入数字："))

    if num > random_number:
        print("输入的数字太大了")

    elif num < random_number:
        print("输入的数字太小了")

    else:
        print("恭喜你猜对了")
        break
```

---

# 三十、统计字符个数

```python
msg = "Pneumonoultramicroscopicsilicovolcanoconiosis"

o_count = 0
n_count = 0

for i in msg:

    if i == "o":
        o_count += 1

    elif i == "n":
        n_count += 1

print(f"o 的个数是 {o_count}")
print(f"n 的个数是 {n_count}")
```

顺便一提：

```text
Pneumonoultramicroscopicsilicovolcanoconiosis
```

是英语里著名的超长单词之一。

人类真的很喜欢发明让学生痛苦的东西。

---

# 三十一、计算 1~1000 能被 5 整除的数之和

```python
total = 0

for i in range(1, 1001):

    if i % 5 == 0:
        total += i

print(total)
```

---

# 三十二、总结

流程控制核心：

| 类型       | 作用     |
| -------- | ------ |
| if       | 条件判断   |
| while    | 条件循环   |
| for      | 遍历循环   |
| break    | 结束循环   |
| continue | 跳过本次循环 |

真正的程序，不是简单“执行代码”。

而是：

* 判断
* 选择
* 重复
* 控制流程

像河流分叉。
像城市红绿灯。
像人类每天做决定。
只是程序通常比人少一点犹豫。
