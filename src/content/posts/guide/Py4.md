---
title: 核心语法-函数
published: 2026-05-22
description: Python函数
tags: [Python函数]
category: Python
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

# Python 函数笔记

函数像一台已经组装好的机器。
你给它输入，它帮你完成某件事，再把结果还给你。人类发明函数，本质上就是懒。因为没人愿意把同样的代码复制八百遍。文明能发展，全靠大家不想重复劳动。

---

# 一、什么是函数

函数是：

* 组织好的
* 可重复使用的
* 用来实现特定功能的代码片段

比如：

```python
print()
input()
max()
min()
len()
sum()
```

这些都是 Python 内置函数。

特点：

* 提前定义好
* 可以重复使用
* 实现特定功能

---

# 二、函数定义

函数必须：

* 先定义
* 后调用

基本格式：

```python
def 函数名(参数列表):
    函数体
    return 返回值
```

调用函数：

```python
函数名(参数)
```

---

## 示例：定义一个函数

```python
def out_line():
    print("————————————")
```

调用：

```python
out_line()
```

---

# 三、函数的参数与返回值

## 1. 参数

多个参数之间使用逗号隔开：

```python
def test(a, b, c):
    pass
```

---

## 2. return 的作用

`return` 只有“返回”功能。

它不会自动打印。

如果想看到结果：

```python
print(函数返回值)
```

---

## 3. 形参和实参

### 形参（形式参数）

函数定义时写的参数：

```python
def add(x, y):
```

这里 `x`、`y` 就是形参。

特点：

* 只能在函数内部使用
* 属于局部变量

---

### 实参（实际参数）

调用函数时真正传进去的数据：

```python
add(2, 3)
```

这里 `2`、`3` 就是实参。

---

# 四、函数案例

---

## 1. 计算圆面积

```python
def circle_area(r):
    area = 3.14 * r * r
    return area

c_area = circle_area(10)

print(c_area)
```

---

## 2. 计算长方形面积

```python
def rectangle_area(l, w):
    area = l * w
    return area

c_area = rectangle_area(6, 8)

print(c_area)
```

---

# 五、返回多个值

函数可以同时返回多个值。

多个值会自动封装成元组。

---

## 示例

```python
def circle_area_len(r):
    return 3.14 * r * r, round(2 * 3.14 * r, 1)

al = circle_area_len(10)

print(al)
```

输出：

```python
(314.0, 62.8)
```

本质：

```python
(面积, 周长)
```

这是一个元组。

---

## 元组解包

可以直接拆开接收：

```python
area, length = circle_area_len(10)

print(f"面积是{area}, 周长是{length}")
```

---

# 六、函数说明文档（Docstring）

函数说明文档：

* 写在函数开头
* 使用三个引号
* 用来解释函数功能、参数、返回值

这样别人调用函数时能知道它是干什么的。

程序员最怕读没有注释的代码。那感觉像在考古。挖半天不知道古人想干嘛。

---

## 示例

```python
def circle_area_len(r):
    """
    该函数根据圆的半径计算圆的面积和周长

    :param r: 圆的半径
    :return: 圆的面积、圆的周长
    """

    return 3.14 * r * r, 2 * 3.14 * r
```

---

## 查看函数说明文档

### 方法1：help()

```python
help(circle_area_len)
```

---

### 方法2：鼠标悬停（推荐）

直接把鼠标放到函数名上。

---

# 七、函数嵌套调用

函数里调用函数。

这就叫嵌套调用。

---

## 示例

```python
def function_a():
    print("a ... before")
    function_b()
    print("a ... after")


def function_b():
    print("b ... before")
    function_c()
    print("b ... after")


def function_c():
    print("c ...")


function_a()
```

输出：

```python
a ... before
b ... before
c ...
b ... after
a ... after
```

---

# 八、函数调用栈（重点）

函数调用遵循：

# LIFO（后进先出）

像叠盘子。

最后放上去的，最先拿下来。

---

## 执行流程

### 第一步

调用：

```python
function_a()
```

栈：

```python
[function_a]
```

---

### 第二步

`a` 调用 `b`

```python
[
function_a
function_b
]
```

---

### 第三步

`b` 调用 `c`

```python
[
function_a
function_b
function_c
]
```

现在栈顶是 `function_c`。

谁在栈顶，谁执行。

---

## 开始出栈

### c 执行完

```python
[
function_a
function_b
]
```

回到 `function_b`

---

### b 执行完

```python
[function_a]
```

回到 `function_a`

---

### a 执行完

```python
[]
```

程序结束。

---

# 九、案例练习

---

## 1. 计算三角形面积

```python
def triangle_area(d, g):
    """
    计算三角形面积

    :param d: 底边
    :param g: 高
    :return: 面积
    """

    return d * g / 2
```

---

## 2. 统计元音字母个数

```python
def count_aeiou(s):
    """
    统计字符串中元音字母的个数

    :param s: 要统计的字符串
    :return: 元音字母个数
    """

    count = 0

    for i in s:
        if i in "aeiouAEIOU":
            count += 1

    return count
```

---

## 3. 计算成绩

```python
def calc_score(score_list):

    max_s = max(score_list)
    min_s = min(score_list)

    avg = round(sum(score_list) / len(score_list), 1)

    return max_s, min_s, avg


s_list = [112, 3213, 343, 44, 4443, 32]

max_score, min_score, avg_score = calc_score(s_list)

print(f"最高分{max_score}, 最低分{min_score}, 平均分{avg_score}")
```

---

## 4. 秒转时分秒

```python
def calc_clock(s):

    # 小时
    shi = s // 3600

    # 剩余秒数
    rest = s % 3600

    # 分钟
    fen = rest // 60

    # 秒
    miao = rest % 60

    return shi, fen, miao


clock = calc_clock(200)

print(clock)
```

---

# 十、判断三角形类型

```python
def jug_three(a, b, c):

    # 判断是否能构成三角形
    if a + b > c and b + c > a and c + a > b:

        # 等边三角形
        if a == b == c:
            return "等边三角形"

        # 等腰三角形
        elif a == b or b == c or a == c:
            return "等腰三角形"

        # 普通三角形
        else:
            return "普通三角形"

    return "无法构成三角形"


d = jug_three(4, 4, 3)

print(d)
```

---

## 另一种写法（先判断等腰）

```python
def jug_three(a, b, c):

    if a + b > c and b + c > a and c + a > b:

        # 等腰但不是等边
        if (a == b or b == c or a == c) and not (a == b ==c):
            return "等腰三角形"

        # 等边
        elif a == b == c:
            return "等边三角形"

        # 普通
        else:
            return "普通三角形"

    else:
        return "无法构成三角形"
```

---

# 十一、变量作用域

变量能在哪使用。

这就是作用域。

---

# 1. 全局变量

函数外定义。

整个文件都能使用。

通常写在文件顶部。

---

## 示例

```python
num = 100

def circle_area(r):

    pi = 3.14159

    area = pi * r * r

    num = 10000

    print(num)

    return area


c_area = circle_area(10)

print(c_area)

print(num)
```

输出：

```python
10000
314.159
100
```

注意：

函数里的 `num` 和外面的 `num` 不是同一个变量。

---

# 2. 局部变量

函数内部定义。

只能函数内部使用。

函数结束后自动销毁。

---

# 十二、global 关键字

用于：

在函数内部修改全局变量。

---

## 示例

```python
num1 = 1

def fun1():

    global num1

    num1 = 100

    print(num1)


fun1()

print(num1)
```

输出：

```python
100
100
```

---

## 调试模式案例

```python
debug_mode = False


def enable_debug_mode():

    global debug_mode

    debug_mode = True

    print("调试模式已开启")


def disable_debug_mode():

    global debug_mode

    debug_mode = False

    print("调试模式已关闭")
```

---

## 注意

尽量少用全局变量。

因为：

* 难维护
* 难调试
* 容易互相污染

更推荐：

* 参数传递
* return 返回值

---

# 十三、传参方式

---

# 1. 位置参数

按顺序传。

顺序必须一致。

---

## 示例

```python
def reg_stu(name, age, gender, city):

    print(f"注册成功, 姓名{name}, 年龄{age}, 性别{gender}, 城市{city}")

    return {
        "name": name,
        "age": age,
        "gender": gender,
        "city": city
    }


stu = reg_stu("周翔", 19, "男", "山东")

print(stu)
```

---

# 2. 关键字参数

通过：

```python
参数名 = 值
```

传递。

不需要顺序一致。

---

## 示例

```python
stu = reg_stu(
    name="周翔",
    age=19,
    gender="男",
    city="山东"
)
```

---

# 3. 混合使用

规则：

关键字参数必须在位置参数后面。

---

## 示例

```python
stu = reg_stu(
    "周翔",
    19,
    gender="男",
    city="山东"
)
```

---

# 十四、默认参数

默认参数也叫缺省参数。

调用时可以不传。

---

## 规则

默认参数必须放后面。

---

## 示例

```python
def reg_stu(name, age, gender, city="北京"):

    print(f"姓名{name}, 年龄{age}, 性别{gender}, 城市{city}")

    return {
        "name": name,
        "age": age,
        "gender": gender,
        "city": city
    }


stu = reg_stu("周翔", 18, "男")

stu1 = reg_stu("周翔", 19, "男", "深圳")
```

---

# 十五、不定长参数

参数数量不确定时使用。

---

# 1. *args（位置不定长参数）

会把多个位置参数：

封装成元组。

---

## 示例

```python
def calc_num(*args):

    min_num = min(args)
    max_num = max(args)
    avg_num = sum(args) / len(args)

    return min_num, max_num, avg_num


min_num, max_num, avg_num = calc_num(1, 2, 3, 4)

print(f"最大值{max_num}, 最小值{min_num}, 平均值{avg_num}")
```

---

# 2. **kwargs（关键字不定长参数）

会把：

```python
键 = 值
```

封装成字典。

---

## 示例

```python
def calc_data(*args, **kwargs):

    min_data = min(args)
    max_data = max(args)

    avg_data = sum(args) / len(args)

    if kwargs.get("round") is not None:
        avg_data = round(avg_data, kwargs.get("round"))

    if kwargs.get("print"):
        print(f"最小值{min_data}, 最大值{max_data}, 平均值{avg_data}")

    return min_data, max_data, avg_data


print(
    calc_data(
        2, 7, 9, 10, 45, 1, 2,
        round=2,
        print=True
    )
)
```

---

## 奶茶例子理解

核心参数：

```python
点奶茶("珍珠奶茶")
```

附加选项：

```python
点奶茶(
    "珍珠奶茶",
    甜度="少糖",
    冰度="去冰",
    加料=["布丁", "珍珠"],
    大小="大杯"
)
```

---

# 十六、函数作为参数

函数也能传进函数里。

这叫：

高阶函数。

人类终于把“把工具当工具使用”发展到极致。连函数都能当参数传。代码世界逐渐魔法化。

---

## 示例

```python
def add(x, y):
    return x + y


def subtract(x, y):
    return x - y


def multiply(x, y):
    return x * y


def divide(x, y):
    return x / y


def calc(x, y, oper):

    return oper(x, y)


print(calc(2, 3, add))
```

执行：

```python
add(2, 3)
```

结果：

```python
5
```

---

# 十七、匿名函数 lambda

没有名字的函数。

适合：

* 逻辑简单
* 只用一次

---

## 基本格式

```python
lambda 参数: 表达式
```

---

## 示例

### 分割线

```python
out_line = lambda: print("--------")

out_line()
```

---

### 两数求和

```python
sum_data = lambda x, y: x + y

print(sum_data(100, 200))
```

---

# 十八、lambda 排序案例

```python
data_list = [
    "C++",
    "C",
    "Python",
    "jack",
    "PHP",
    "Java",
    "Go",
    "JavaScript",
    "Rust"
]

data_list.sort(
    key=lambda item: len(item),
    reverse=True
)

print(data_list)
```

---

## sort() 原理

sort 会：

* 自动遍历列表
* 把每个元素传给 key 对应函数
* 根据返回值排序

---

## key=len

```python
data_list.sort(key=len)
```

意思：

按长度排序。

---

## 为什么不能写 len()

因为：

```python
len
```

是把函数交出去。

而：

```python
len()
```

是立刻执行函数。

但你没给参数。

所以会报错。

---

# 十九、递归函数

函数自己调用自己。

必须有：

# 终止条件

否则无限递归。

程序直接炸。

电脑风扇开始像直升机起飞。人类再一次成功把硅片逼疯。

---

# 1. 阶乘

```python
def fac(n):

    if n == 1:
        return 1

    else:
        return n * fac(n - 1)


print(fac(5))
```

---

## 执行过程（栈）

```python
fac(5)
↓
5 * fac(4)

fac(4)
↓
4 * fac(3)

fac(3)
↓
3 * fac(2)

fac(2)
↓
2 * fac(1)

fac(1)
↓
return 1
```

然后开始返回：

```python
fac(2) = 2 * 1 = 2
fac(3) = 3 * 2 = 6
fac(4) = 4 * 6 = 24
fac(5) = 5 * 24 = 120
```

---

# 2. 累加和

```python
def sum_num(n):

    if n == 1:
        return 1

    else:
        return n + sum_num(n - 1)


print(sum_num(3))
print(sum_num(4))
print(sum_num(5))
```

---

# 二十、综合案例：订单结算

需求：

根据：

* 商品信息
* 优惠券
* 积分
* 运费

计算订单总金额。

---

## 规则

### 优惠券

* 满 5000 才能使用
* 不能超过商品总金额

---

### 积分

* 满 5000 才能使用
* 100 积分抵 1 元
* 只能整百抵扣
* 不能超过商品总金额

---

# 代码实现

```python
def calc_order_cost(
    *args,
    coupon=0.0,
    score=0.0,
    express=0.0
):
    """
    计算订单总金额

    :param args:
        商品信息
        (商品名, 价格, 数量)

    :param coupon:
        优惠券金额

    :param score:
        积分

    :param express:
        运费

    :return:
        订单总金额
    """

    # 计算商品总金额
    total_price = [
        goods[1] * goods[2]
        for goods in args
    ]

    total_cost = sum(total_price)

    # 优惠券抵扣
    if total_cost >= 5000 and coupon <= total_cost:
        total_cost -= coupon

    # 积分抵扣
    if total_cost >= 5000 and score // 100 <= total_cost:
        total_cost -= score // 100

    # 加运费
    total_cost += express

    return total_cost
```

---

## 测试

```python
total1 = calc_order_cost(
    ("鼠标", 188, 2),
    ("键盘", 388, 1),
    ("手机", 3999, 1),
    coupon=10,
    score=4000,
    express=9.9
)

print(total1)


total2 = calc_order_cost(
    ("鼠标", 188, 2),
    ("键盘", 388, 1),
    ("手机", 6999, 1),
    coupon=10,
    score=4000,
    express=9.9
)

print(total2)
```

---

# 二十一、什么时候用 lambda，什么时候用 def

---

## 用 lambda

适合：

* 一行逻辑
* 只用一次
* 当参数传递

---

## 用 def

适合：

* 多行逻辑
* 多次复用
* 需要文档说明
* 逻辑复杂

---

# 最后的核心总结

函数的本质：

```text
输入数据
   ↓
函数处理
   ↓
返回结果
```

重点掌握：

* 函数定义
* 参数
* return
* 作用域
* 位置参数
* 关键字参数
* 默认参数
* *args
* **kwargs
* lambda
* 递归
* 调用栈

这些东西刚学时会觉得乱。

因为函数其实是“代码抽象”的开始。

从这里开始，你写的代码不再只是“一行一行执行”。

而是在慢慢学会：

“把逻辑封装起来”。

这一步很关键。

很多人 Python 学不会，不是语法不会，而是脑子里没有“封装”和“调用”的感觉。代码像一团散沙。函数就是第一次把沙子烧成砖。

