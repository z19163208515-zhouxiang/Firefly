---
title: 核心语法-函数
published: 2026-05-22
description: Python函数
tags: [Python函数,学习]
category: Python语法
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

## 介绍

函数是组织好的、可重复使用的、用来实现特定功能的代码片段。

`input()`、`print()` 是Python的内置函数（`max()`、`min()`、`len()`、`sum()`等）。

- 是提前定义好的
- 可以重复使用
- 实现特定功能

---

## 函数定义

定义函数（参数列表和返回值可有可无，函数必须先定义后调用）：

```python
def 函数名(参数列表):
    函数体
    ......
    return 返回值

# 调用函数
函数名(参数)
```

```python
# 函数的定义
def out_line():
    print("————————————")

# 函数的调用
out_line()
```

---

## 函数的参数与返回值

函数定义时如果有多个参数，多个参数之间使用逗号(`,`)分隔。

`return`语句只有返回功能，而没有输出打印功能，如果要输出，需要结合`print()`函数来实现。

- **形参（形式参数）**：函数定义时括号里的参数，只能在函数内使用（局部变量）
- **实参（实际参数）**：函数在实际调用时传入的参数

```python
# 计算圆的面积
def circle_area(r):
    area = 3.14 * r * r
    return area

c_area = circle_area(10)
print(c_area)

# 计算长方形的面积
def rectangle_area(l, w):
    area = l * w
    return area

c_area = rectangle_area(6, 8)
print(c_area)
```

```python
# 计算圆的面积和周长
def circle_area_len(r):  # round(数字, 保留几位小数)
    return 3.14 * r * r, round(2 * 3.14 * r, 1)  # 需要返回多个值，用逗号隔开

al = circle_area_len(10)   # 多个返回值被封装进一个元组中
print(al)   # 输出(314.0, 62.8) 是一个元组

# 直接拿到返回的多个值（元组解包操作）
area, length = circle_area_len(10)
print(f"面积是{area}, 周长是{length}")
```

---

## 函数说明文档

函数说明文档（Docstring）是写在函数开头，用三个引号包裹的字符串，用于解释函数的功能、参数、返回值等信息，方便调用者清楚函数的具体作用及细节。

**查看函数说明文档：**
- 使用`help`函数，比如`help(circle_area_len)`
- 鼠标悬浮在函数上，自动展示（推荐）

```python
# 定义一个函数，根据半径计算圆的周长、面积
def circle_area_len(r):
    """
    该函数根据圆的半径，计算圆的面积和周长
    :param r: 圆的半径（描述函数的参数）
    :return: 圆的面积，圆的周长（描述函数的返回值）
    """
    return 3.14 * r * r, 2 * 3.14 * r

al = circle_area_len(10)
print(al)
```

```python
def rectangle_area(l, w):
    """
    根据长方形的长度和宽度计算长方形的面积
    :param l: 长方形的长度
    :param w: 长方形的宽度
    :return: 长方形的面积
    """
    area = l * w
    return area

c_area = rectangle_area(6, 8)
print(c_area)

# 查看函数说明文档
# help()（不常用）
help(rectangle_area)

# 鼠标悬停（常用）
```

---

## 函数的嵌套调用

嵌套调用指的是在一个函数中，又调用了另外一个函数。

函数调用遵循栈结构，最后被调用的函数最先返回（LIFO：Last In First Out，后进先出）。

- 函数被调用 → 压栈（进栈）
- 函数执行结束 → 弹栈（出栈）

栈是先进后出，最后进栈的function_c最先出栈，所以先回到调用它的function_b。**谁在栈顶，就执行谁。**

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

# 输出：
# a ... before
# b ... before
# c ...
# b ... after
# a ... after
```

**执行流程（栈）：**

栈演示`[]`，下面是栈底：

第一步：开始执行，调用function_a
```
[function_a]   # 执行function_a
```

第二步：function_a里调用function_b，暂停a，把b压到栈顶
```
[function_a]
[function_b]   # 执行function_b
```

第三步：function_b里调用function_c，暂停b，把c压到栈顶
```
[function_a]
[function_b]
[function_c]   # 现在执行function_c
```

开始出栈（函数执行完，从顶部拿走）：

函数function_c代码跑完了，出栈，把最顶上的c拿走
```
[function_a]
[function_b]
```
回到function_b，继续向下执行。

function_b剩下的代码也跑完了，再出栈，拿走b
```
[function_a]
```
回到function_a继续向下执行。

function_a也跑完，最后出栈，栈变空，程序结束。

---

## 案例

```python
# 定义一个函数，根据传入的底和高计算三角形的面积
def triangle_area(d, g):
    """
    计算三角形的面积
    :param d: 三角形的底边长
    :param g: 三角形的高
    :return: 三角形的面积
    """
    return d * g / 2
```

```python
# 定义一个函数，计算传入的字符串中元音字母的个数（元音字母 aeiou 或 AEIOU）
def count_aeiou(s):   # hello world
    """
    统计字符串中元音字母的个数
    :param s: 要统计的字符串
    :return: 元音字母的个数
    """
    count = 0
    for i in s:
        if i in "aeiouAEIOU":
            count += 1
    return count
```

```python
# 定义一个函数，根据传入的高考成绩列表，计算最高分、最低分和平均分
def calc_score(score_list):
    max_s = max(score_list)
    min_s = min(score_list)
    avg = round(sum(score_list) / len(score_list), 1)
    return max_s, min_s, avg

s_list = [112, 3213, 343, 44, 4443, 32]
max_score, min_score, avg_score = calc_score(s_list)
print(f"最高分{max_score}, 最低分{min_score}, 平均分{avg_score}")
```

```python
# 定义一个函数，秒转时、分、秒
def calc_clock(s):
    # 小时
    shi = s // 3600
    # 去掉小时后剩余秒数（把已经凑成整小时的秒数全部去掉，只留下剩下的零头秒数，专门用来算分钟和秒）
    rest = s % 3600
    # 分钟
    fen = rest // 60
    # 秒
    miao = rest % 60
    return shi, fen, miao

# 测试200秒
clock = calc_clock(200)
print(clock)
```

```python
# 定义一个函数，判断三角形类型
def jug_three(a, b, c):
    # 先判断能不能构成三角形
    if a + b > c and b + c > a and c + a > b:
        # 等边：三边都相等
        if a == b == c:
            return "等边三角形"
        # 等腰：任意两边相等
        elif a == b or b == c or a == c:
            return "等腰三角形"
        # 都不相等
        else:
            return "普通三角形"
    # 不能构成三角形
    return "无法构成三角形"

d = jug_three(4, 4, 3)
print(d)

# 先判断等腰写法（注意写法差别）
def jug_three(a, b, c):
    # 第一步：先判断能不能构成三角形
    if a + b > c and b + c > a and c + a > b:

        # 先判等腰，但排除等边
        if (a == b or b == c or a == c) and not (a == b == c):
            return "等腰三角形"

        # 再判等边
        elif a == b == c:
            return "等边三角形"

        # 剩下普通三角形
        else:
            return "普通三角形"
    else:
        return "无法构成三角形"
```

---

## 变量作用域

变量的作用域指的是变量的作用范围（标识这个变量在哪里可以用，在哪里不可以用）。

- **全局变量**：在函数之外定义的变量，称之为全局变量，在整个文件中（包括函数内）都可以使用（通常定义在文件的头部）
- **局部变量**：在函数内部定义的变量，称之为局部变量，只能在该函数内部使用，外部无法访问（函数执行完毕后，会自动销毁其内部局部变量）

```python
# 全局变量
num = 100

def circle_area(r):
    # 局部变量，只能在函数内部使用
    pi = 3.14159
    area = pi * r * r
    # 局部变量 num，与上面的num不同
    num = 10000
    print(num)
    return area

c_area = circle_area(10)
print(c_area)
print(num)
```

**`global`关键字**用于明确的告诉Python解释器，在函数中要使用全局变量，使得可以在函数内部修改全局变量的值。

> 尽量避免在函数中使用全局变量，因为会使代码难以维护和调试。考虑使用函数参数和返回值来传递数据，而不是依赖全局变量。`global`主要用在程序的状态、配置和计数器等场景中。

```python
# 全局变量
num1 = 1

def fun1():
    # 先声明，再使用
    global num1
    num1 = 100
    print(num1)

fun1()
print(num1)
```

```python
# 调试开关
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

## 传参方式

传参方式指的是在调用函数时，传递实参的方式。

### 位置参数

调用函数时根据函数定义时的位置来传递参数（调用函数时参数顺序与定义函数时参数顺序完全一致）。

```python
# 定义函数
def reg_stu(name, age, gender, city):
    print(f"注册成功,姓名{name},年龄{age},性别{gender},城市{city}")
    return {"name": name, "age": age, "gender": gender, "city": city}

stu = reg_stu("ZX", 19, "男", "山东")   # 位置传参
print(stu)
```

### 关键字参数

调用函数时以函数定义时形参名称作为关键字，以"键 = 值"的形式来传递参数（不要求顺序）。

```python
# 定义函数
def reg_stu(name, age, gender, city):
    print(f"注册成功,姓名{name},年龄{age},性别{gender},城市{city}")
    return {"name": name, "age": age, "gender": gender, "city": city}

stu = reg_stu(name="ZX", age="19", gender="男", city="山东")   # 关键字传参
print(stu)
```

```python
# 定义函数
def reg_stu(name, age, gender, city):
    print(f"注册成功,姓名{name},年龄{age},性别{gender},城市{city}")
    return {"name": name, "age": age, "gender": gender, "city": city}

"""
如果位置参数和关键字参数混用，关键字参数必须在位置参数之后
关键字参数之间没有顺序要求
"""
stu = reg_stu("ZX", 19, gender="男", city="山东")
print(stu)
```

| 参数类型 | 优点 | 缺点 | 应用场景 |
|----------|------|------|----------|
| 位置参数 | 简洁 | 可读性差，易出错，难维护 | 参数少（不超过三个），顺序自然 |
| 关键字参数 | 可读性强，易维护和扩展 | 代码繁琐 | 参数较多，易混淆的场景 |

---

## 默认参数

默认参数也称缺省参数，用于定义函数时，为参数提供默认值。调用函数时，可以不传递有默认值的参数。

> 默认参数必须放在没有默认值的参数列表后面。一个函数在定义时是可以设置多个默认参数的。

函数调用时，为默认参数传递值，则会修改默认的参数值；如果没有传递该参数，则直接使用默认值。

```python
# 定义函数                       默认值
def reg_stu(name, age, gender, city="北京"):
    print(f"姓名{name},年龄{age},性别{gender},城市{city}")
    return {"name": name, "age": age, "gender": gender, "city": city}

stu = reg_stu("ZX", 18, "男")

# 函数调用时，为默认参数传递值，则会修改默认的参数值
stu1 = reg_stu("ZX", 19, "男", "深圳")
```

```python
def res_stu(name, age, gender="未知", city="山东"):
    return {"name": name, "age": age, "gender": gender, "city": city}

info = res_stu("ZX", 19, city="北京")
print(info)
```

---

## 不定长参数

不定长参数也叫可变参数，用于函数定义及调用时参数个数不确定（0个或多个）的场景。

### 不定长参数 — 位置传递（*args）

传递的所有匹配的位置参数都会被`args`变量收集，这些参数会合并并封装为一个**元组**。`args`是元组类型（注意并不会封装关键字参数）。

> `args`只是约定俗成的变量名，并不是关键字，这里可以使用任何合法的变量名（如`*data`）。

```python
def calc_num(*args):
    min_num = min(args)
    max_num = max(args)
    avg_num = sum(args) / len(args)
    return min_num, max_num, avg_num

# 调用函数
min_num, max_num, avg_num = calc_num(1, 2, 3, 4)
print(f"最大值{max_num},最小值{min_num},平均值{avg_num}")
```

### 不定长参数 — 关键字传递（**kwargs）

参数是以"键 = 值"形式传递的关键字参数，这些"键 = 值"参数都会被`kwargs`接受，并封装为一个**字典**类型。

> `kwargs`只是约定俗成的变量名，并不是关键字，这里可以使用任何合法的变量名（如`**option`）。

```python
def calc_date(*args, **kwargs):
    """
    根据传入的数据，计算最大值、最小值和平均值
    :param args: 不定长位置参数，需要计算的数据
    :param kwargs: 不定长关键字参数
        round: 保留的小数位个数
        print: 是否打印输出
    :return: 最小值、最大值、平均值
    """
    min_date = min(args)
    max_date = max(args)
    avg_date = sum(args) / len(args)

    # 如果round值不为空，保留小数位数
    if kwargs.get('round') is not None:
        avg_date = round(avg_date, kwargs.get('round'))

    # print=False不打印，print=True打印
    if kwargs.get('print'):
        print(f"最小值{min_date},最大值{max_date},平均值{avg_date}")

    return min_date, max_date, round(avg_date, kwargs.get('round'))

# 调用函数          不定长位置参数         不定长关键字参数
print(calc_date(2, 7, 9, 10, 45, 1, 2, round=2, print=True))
```

- **不定长位置参数**适用于处理数量不确定的数据
- **不定长关键字参数**处理数量不确定的选项（函数的配置参数，用来定制函数的行为）
- 不定长位置参数和不定长关键字参数同时存在时，**先定义不定长位置参数**

```python
# 核心数据（你要什么）
点奶茶("珍珠奶茶")

# 选项（你要什么样的）
点奶茶("珍珠奶茶", 甜度="少糖", 冰度="去冰", 加料=["布丁", "珍珠"], 大小="大杯")
```

---

## 参数类型（函数作为参数）

- **普通参数**：数字、布尔、字符串、列表、元组、集合、字典等
- **特殊参数**：函数

```python
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    return x / y

# oper是函数类型的参数
def calc(x, y, oper):
    return oper(x, y)

# 实际的计算数据
print(calc(2, 3, add))   # 传递的是函数中封装的逻辑
```

**执行流程：**
1. 代码走到`print(calc(2, 3, add))`开始执行
2. 把2传给x，把3传给y
3. 把add整个函数传给oper
4. 此时oper就是add，等于执行add(2, 3)
5. 跳进add函数，x=2，y=3 → return 5
6. 把5返回到calc，calc变为return 5
7. 打印5

> 谁调用我，我就把值返回给谁。是calc调用了add，所以add的return值只能还给calc。

```python
def double(n):
    return n * 2

def square(n):
    return n * n

def calc(n, oper):
    res = oper(n)
    return res

a = calc(3, square)
print(a)
```

---

## 匿名函数（lambda表达式）

匿名函数指的是没有名称的函数，需要通过`lambda`表达式来声明函数，可以简化简单函数的编写（单行表达式）。

- 函数逻辑比较简单（单行表达式）且只在一个地方使用时，可以考虑匿名函数，简化书写（通常作为高阶函数的参数使用）
- 匿名函数中可以返回结果，也可以不返回结果。返回结果时，不需要写`return`，表达式的运行结果就是返回结果

```python
# 打印分割线
out_line = lambda: print("--------")
out_line()

# 计算两个数的和
sum_date = lambda x, y: x + y
print(sum_date(100, 200))
```

```python
# 完成如下列表的排序，按照每一个元素的字符个数，从小到大排序（匿名函数应用场景）

# 方法1
date_list = ["C++", "C", "Python", "jack", "PHP", "Java", "Go", "JavaScript", "Rust"]

date_list.sort(key=lambda item: len(item), reverse=True)
print(date_list)

# 代码解析（sort()）
# sort()会自动遍历列表每一个元素
# 每遍历一个，就自动把元素当作参数传给 key 对应的函数
# item 就是用来接住传进来的那个列表元素的
# key: 排序依据（传一个函数名）
# reverse=False 从小到大
# reverse=True 从大到小
# key=lambda item: len(item) → 按单词长度排序
# reverse=True → 从长到短
# reverse=False / 不写 → 从短到长

# 方法2
date_list = ["C++", "C", "Python", "jack", "PHP", "Java", "Go", "JavaScript", "Rust"]
date_list.sort(key=len)   # 按长度从小到大排序
print(date_list)

# 代码解析
# sort自己循环：
#     拿元素 → 丢给 len() → 得到长度 → 按长度排序
# 不能写key=len()的原因：
#     len函数本身（只是把工具交出去，不干活）
#     len()立刻调用函数（马上要执行、必须给参数）
```

**建议使用匿名函数的情况：** 函数逻辑简单，只在一个地方调用（常作为高阶函数的参数）

**建议使用命名函数的情况：** 函数逻辑复杂，需要多步操作，需要多个地方重复使用或需要加文档说明的场景

> 代码的可读性和可维护性比简洁性更重要。

---

## 递归案例

```python
# 定义一个函数，根据传入的数字，计算该数字阶乘的结果
# 计算n的阶乘，n的阶乘公式 f(n) = n * f(n - 1)
# 递归调用：在函数中自己调用自己的情况，一定要有终结点

def fac(n):
    if n == 1:
        return 1
    else:
        return n * fac(n - 1)

"""
代码执行过程（栈）
栈特点：后进先出

开始调用，一层一层进栈：
栈底：fac(5) → 要算 5 * fac(4)
入栈：fac(4) → 要算 4 * fac(3)
入栈：fac(3) → 要算 3 * fac(2)
入栈：fac(2) → 要算 2 * fac(1)
入栈：fac(1) → 满足 n==1，触发终止条件，return 1

此时的栈结构：
fac(1)   ← 栈顶（只执行栈顶代码）当n=1时return 1，所以fac(1)=1
fac(2)   （栈顶=最内层、被别人调用的小弟）
fac(3)   （fac(2)调fac(1)，fac(2)=2*fac(1)=2）
fac(4)   （fac(3)调fac(2)，fac(3)=3*fac(2)=6）
fac(5)   ← 栈底

fac(1)、fac(2)、fac(3)、fac(4)都有返回值
只是它们只返回给上一层函数（谁调用我，谁就是我的上一层）自己用，不往外给你打印，你看不到
最终只有最外面的fac(5)把最终结果交给print
"""
print(fac(5))
```

```python
"""
计算1+2+3+4+5+...n的累加和
n = 1 -> 1
n = 2 -> 2 + sum(n - 1)
n = 3 -> 3 + sum(n - 1)
n = 4 -> 4 + sum(n - 1)
......
n = n -> n + sum(n - 1)
"""
def sum_num(n):
    if n == 1:   # 终结点
        return 1
    else:
        return n + sum_num(n - 1)

print(sum_num(3))
print(sum_num(4))
print(sum_num(5))

"""
栈顶 → sum_num(1)
sum_num(2)
sum_num(3)
sum_num(4)
栈底 → sum_num(5)
"""
```

---

## 综合案例：订单金额计算

```python
"""
定义一个函数，用于根据传入的一批商品信息（商品名、价格、数量）、优惠（优惠券、积分抵扣）、
运费信息计算订单的总金额。

具体规则如下：
1. 优惠券需要商品满5000元才可以使用，且优惠券金额不能超过商品总价
2. 积分抵扣需要商品总金额满5000元才可以使用，100积分抵1元（且抵扣金额不能超过商品总价，
   积分只能整百抵扣）
"""

def calc_order_cost(*args, coupon=0.0, score=0.0, express=0.0):  # 设置默认值，防止未传参数报错
    """
    定义一个函数，用于根据传入的一批商品信息（商品名、价格、数量）、优惠（优惠券、积分抵扣）
    :param args: 商品信息（商品名、价格、数量）-> 传递多个元组()或列表[]，args也是一个元组，也就是元组里封装多个元组
    :param coupon: 优惠券
    :param score: 积分
    :param express: 运费
    :return: 订单的总金额
    """
    # 订单总金额 = 商品总金额 - 优惠券 - 积分抵扣 + 运费

    # 1. 计算商品总金额
    # 把args大元组里的每个商品小元组中的价格与数量相乘封装进一个列表（列表表达式）
    total_price = [goods[1] * goods[2] for goods in args]
    # 用sum()计算总金额
    total_cost = sum(total_price)

    # 优惠券抵扣
    if total_cost >= 5000 and coupon <= total_cost:
        total_cost -= coupon

    # 积分抵扣
    if total_cost >= 5000 and score // 100 <= total_cost:  # //整除
        total_cost -= score // 100

    # 添加运费
    total_cost += express

    return total_cost

# 测试函数
total1 = calc_order_cost(("鼠标", 188, 2), ("键盘", 388, 1), ("手机", 3999, 1), coupon=10, score=4000, express=9.9)
print(total1)

total2 = calc_order_cost(("鼠标", 188, 2), ("键盘", 388, 1), ("手机", 6999, 1), coupon=10, score=4000, express=9.9)
print(total2)
```