---
title: 核心语法-流程控制语句
published: 2026-06-02
description: Python流程控制语句
tags: [Python流程控制语句]
category: Python
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

# Python 流程控制完整笔记

## if 语句

### 基本语法

```python
if 要判断的条件:                   # 判断语句必须是布尔类型 True 或 False
    条件成立时,执行对应的操作1      # 归属if代码块的语句，需要在前方缩进四个空格
else:
    条件不成立时,执行的操作2

if 要判断的条件1:
    条件成立时,执行对应的操作1
elif 要判断的条件2:
    条件成立时,执行对应的操作2    # elif 可以出现多个
else:
    条件不成立时,执行的操作3      # else 可有可无，必须放在最后
```

```python
score = 695
if score > 680:
    print("你被入取")
    print("清华大学")
```

### 判断密码

```python
# 正确密码
password1 = "202591880239"
account1 = "z1111"

# 用户输入
password2 = input("Please enter your password: ")
account2 = input("Please enter your account: ")

# 判断正误
if password2 == password1 and account2 == account1:
    print("登入成功")
    print("进入首页")
else:
    print("登入失败")
    print("账号或密码错误")
```

### 判断闰年

```python
year = int(input("输入年份"))

if (year % 100 != 0 and year % 4 == 0) or (year % 400 == 0):
    print("%s年是闰年" % year)
else:
    print(f"{year}不是闰年")
```

### 判断正负

```python
num = int(input("请输入一个数字"))

if num > 0:
    print(f"{num}是一个正数")
elif num < 0:
    print(f"{num}是一个负数")
else:
    print(f"{num}是零")
```

### 多条件登录判断

```python
username = input("请输入用户名")
password = input("请输入密码")

if username == "admin" and password == "666888":
    print("登入成功")
elif username == "root" and password == "547527":
    print("登入成功")
elif username == "zhangsan" and password == "123456":
    print("登入成功")
else:
    print("登入失败")
```

---

## 多行注释

```python
"""
注释内容
"""
```

---

## 空语句

```python
if a + b > c and a + c > b and b + c > a:
    pass    # 表示什么都不做
```

---

## 判断三角形类型（嵌套语句）

```python
a = int(input("边1"))
b = int(input("边2"))
c = int(input("边3"))

if a + b > c and a + c > b and b + c > a:
    if a == b and b == c:
        print("等边三角形")
    elif a == b or b == c or a == c:
        print("等腰三角形")
    else:
        print("普通三角形")
else:
    print("无法构成三角形")
```

---

## match 模式匹配

```python
day = input("请输入星期几(1-7)")

match day:
    case "1":
        print("周一")
    case "2":
        print("周二")
    case "3":
        print("周三")
    case "4":
        print("周四")
    case "5" | "6" | "7":   # | 表示或，匹配多个模式中的一个
        print("放假喽")
    case _:                  # 匹配其他情况
        print("输入错误")
```

### 简易计算器

```python
oper = input("请输入运算符")
a = int(input("数字1"))
b = int(input("数字2"))

match oper:
    case "+":
        print(f"{a} + {b} = {a+b}")
    case "-":
        print(f"{a} - {b} = {a-b}")
    case "*":
        print(f"{a} * {b} = {a*b}")
    case "/" if b != 0:      # case后可以添加条件判断，被除数不能是零
        print(f"{a} / {b} = {a/b}")
    case _:
        print("错误")
```

---

## while 循环

### 基本语法

```python
while 条件表达式:
    循环体语句1
    循环体语句2

while 条件表达式:
    循环体语句1
    循环体语句2
    ...
else:
    条件为False，循环体正常结束时执行
```

```python
i = 0

while i < 10:
    print("MiNASA")
    i += 1
else:
    print("循环结束 正常退出")
```

### 计算1到100之间偶数的和

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

## for 循环

### 基本语法

```python
for 元素 in 待处理数据集:
    循环体代码(对元素进行处理)
else:
    循环结束时,执行的代码
```

### range 语句

- **用法1**：`range(end)` — 从零开始到end（不含end），`range(5)` → 0,1,2,3,4
- **用法2**：`range(start, end)` — 从start开始（不含end），`range(2,8)` → 2,3,4,5,6,7
- **用法3**：`range(start, end, step)` — step是步长（不含end），`range(0,10,2)` → 0,2,4,6,8

### 遍历字符串

```python
msg = input("请输入需要遍历字符串")

for i in msg:
    print(i)
else:
    print("循环结束")
```

### 计算1到100之间奇数累加和

```python
# 方法1
total = 0
for i in range(1, 101):
    if i % 2 == 1:
        total += i
print(total)

# 方法2
total = 0
for i in range(1, 101, 2):
    total += i
print(total)
```

### 计算100到500之间所有3的倍数的数字之和

```python
# 方法1
total = 0
for i in range(100, 501):
    if i % 3 == 0:
        total += i
print(total)

# 方法2
total = 0
# 起始102（100后第一个3的倍数），结束501，步长3
for i in range(102, 501, 3):
    total += i
print(total)
```

---

## 循环嵌套

### 打印长方形（长为m，宽为n）

> `print("*")` 语句自带换行效果。`print("*", end="")` 中的 `end` 表示每一次输出以什么结束，默认 `\n` 表示换行。

```python
# 打印长为m，宽为n的长方形
# 键盘录入长方形的长和宽
m = int(input("输入长方形的长："))   # 横向的星号数量
n = int(input("输入长方形的宽："))   # 纵向的行数

# 外层循环：控制行数（宽n）
for i in range(n):
    # 内层循环：控制每行的星号数量（长m）
    for j in range(m):
        print("*", end="")   # end="" 表示不换行，连续打印
    print()   # 一行打印完后换行
```

### 打印九九乘法表

```python
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j} * {i} = {i * j}", end="\t")   # 制表符
    print()
```

### 打印等腰直角三角形

```python
# 获取边长
n = int(input("请输入直角边长度："))

# 外层循环：控制行数
for i in range(1, n + 1):
    # 内层循环：控制每行打印的 * 数量
    for j in range(i):
        print("*", end=" ")   # 不换行
    print()   # 一行打完换行

# 方法2：使用字符串乘法
n = int(input("请输入直角边的边长: "))
for i in range(1, n + 1):
    print("* " * i)
```

### 打印数字金字塔

```python
n = int(input("请输入数字: "))
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()
```

### 打印国际象棋棋盘

```python
# 方法1
for i in range(1, 9):
    if (i % 2 != 0):
        for j in range(1, 9):
            if (j % 2 != 0):
                print("黑", end="")
            else:
                print("白", end="")
        print()
    elif (i % 2 == 0):
        for k in range(1, 9):
            if (k % 2 == 0):
                print("黑", end="")
            else:
                print("白", end="")
        print()

# 方法2（优化）
# 国际象棋棋盘是 8×8，黑白交替。我们可以用(行号+列号) % 2来判断
# 结果为 0 打印黑块（■），结果为 1 打印白块（□）
size = 8
for i in range(size):
    for j in range(size):
        if (i + j) % 2 == 0:
            print("■", end=" ")
        else:
            print("□", end=" ")
    print()
```

---

## break 和 continue

- **break**：只能出现在循环中，表示结束或跳出循环。break跳出循环时，while后面的else代码不再执行
- **continue**：中断本次循环，直接进入下一次循环

### 登录验证（无限尝试）

```python
"""
用户输入用户名和密码执行登录操作
登录成功，程序结束；失败则继续输入
输入的账号和密码不能为空
"""
while True:
    username = input("输入用户名")
    password = input("输入密码")
    # 校验用户名或密码是否为空
    if username == "" or password == "":
        print("输入的用户名或密码不能为空")
        continue
    if username == "admin" and password == "666888":
        print("登入成功")
        break
    elif username == "zhouxiang" and password == "070227":
        print("登入成功")
        break
    else:
        print("用户名或密码输入错误")
```

### 登录验证（限制5次机会）

```python
# 只有五次机会(for循环)
count = 5

for i in range(5):
    if count <= 0:  # 提前终止循环
        break

    username = input("输入账号: ")
    password = input("输入密码: ")

    if username == "" or password == "":
        print("账号和密码不能为空")
        count -= 1
        if count > 0:
            print(f"你还有{count}次机会")
        continue

    if username == "zhouxiang" and password == "070227":
        print("登录成功")
        break
    else:
        print("输入错误")
        count -= 1
        if count > 0:
            print(f"你还有{count}次机会")
#只有五次全错才提醒
if count <= 0:
    print("你已经输入错误五次")


#只有五次机会(while循环)
count = 5

while count > 0:
    username = input("输入账号: ")
    password = input("输入密码: ")

    if username == "" or password == "":
        print("账号和密码不能为空")
        count -= 1
        if count > 0:
            print(f"你还有{count}次机会")
        continue  # 跳过后续验证，重新输入

    if username == "zhouxiang" and password == "070227":
        print("登录成功")
        break   # 正确登录，跳出循环
    else:
        print("输入错误")
        count -= 1
        if count > 0:
            print(f"你还有{count}次机会")

# 循环结束后（无论是次数用完还是break退出），判断是否因次数耗尽而锁定
if count <= 0:
    print("你已经输入错误五次")
```

---

## 猜数字小游戏

```python
"""
猜数字小游戏
生成随机数
import random
random_number = random.randint(1,100)
"""

import random
random_number = random.randint(1, 100)

while True:
    num = int(input("输入数字"))
    if num > random_number:
        print("输入的数字太大了")
    elif num < random_number:
        print("输入的数字太小了")
    else:
        print("恭喜你猜对了")
        break
```

---

## 综合案例

### 统计字符串中某种字符的个数

```python
smg = "Pneumonoultramicroscopicsilicovolcanoconiosis"
o_count = 0
n_count = 0

for i in smg:
    if i == "o":
        o_count += 1
    elif i == "n":
        n_count += 1

print(f"o的个数是{o_count},n的个数是{n_count}")
```

### 计算1到1000所有能被5整除的数之和

```python
sum = 0
for i in range(1, 1001):
    if i % 5 == 0:
        sum += i
print(sum)
```

---

### 1. 异常处理（最强刚需）
笔记中大量使用了 `int(input())`，但只要用户输入字母（如 `"abc"`），程序就会**直接崩溃**。在实际开发中，**永远不要相信用户的输入**。补充 `try-except` 结构会让代码健壮性飞跃。

```python
# 补充示例：带异常处理的猜数字
import random
random_number = random.randint(1, 100)

while True:
    user_input = input("输入数字（输入q退出）：")
    if user_input == 'q':
        print("退出游戏")
        break
    try:
        num = int(user_input)  # 尝试转换
    except ValueError:
        print("输入无效，请输入一个整数！")
        continue  # 回到循环开头，重新输入
    
    # 正常的比较逻辑...
    if num > random_number:
        print("太大了")
    elif num < random_number:
        print("太小了")
    else:
        print("恭喜猜对")
        break
```

### 2. `for-else` 与 `while-else` 的实战精髓
笔记提到了 `else`，但没有解释它的**核心用途**——它用于检测循环是否**完整执行**（没有被 `break` 打断）。这在“查找是否存在”的场景中极其好用。

```python
# 补充示例：判断一个数是否是质数
num = int(input("请输入一个数字："))

for i in range(2, int(num ** 0.5) + 1):
    if num % i == 0:
        print(f"{num} 不是质数，因为能被 {i} 整除")
        break
else:
    # 注意：只有循环没有被 break 打断时，才会执行 else！
    print(f"{num} 是质数")
```

### 3. 循环中的 `enumerate` 和 `zip`（遍历进阶）
当需要**同时获取下标和元素**，或者**同时遍历两个列表**时，基础 `for` 循环写起来会很别扭。补充这两个内置函数，能显著提升代码的 Pythonic 程度。

```python
# 补充示例：enumerate（带索引遍历）
msg = "Hello"
for index, char in enumerate(msg):
    print(f"索引 {index} 对应的字符是 {char}")

# 补充示例：zip（并行遍历）
names = ["小明", "小红"]
scores = [95, 100]
for name, score in zip(names, scores):
    print(f"{name} 考了 {score} 分")
```

### 4. 死循环（`while True`）的避险策略
笔记中用了 `while True`，但在真实项目中，如果忘记写 `break` 或者条件永远不满足，CPU 会直接拉满卡死。建议补充**退出机制**和**限次重试**的规范写法。

```python
# 补充示例：带有最大重试次数和退出指令的登录
MAX_RETRIES = 3
current_attempt = 0

while current_attempt < MAX_RETRIES:
    username = input("输入用户名（输入 exit 退出）：")
    if username == "exit":
        print("用户主动退出")
        break
        
    # ... 验证逻辑
    current_attempt += 1
else:
    # 循环正常结束（没break）意味着次数用完了
    print("尝试次数过多，账号已锁定")
```

---
