---
title: 核心语法-面向对象基础
published: 2026-05-22
description: Python面向对象基础
tags: [Python面向对象基础]
category: Python
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

# Python 面向对象编程（OOP）笔记

## 概述

### 面向过程编程

核心思想：

把一个需求分解成一系列要执行的步骤，然后按照步骤依次执行这些任务。

重点关注：

* 先做什么
* 后做什么
* 最后做什么

本质：

关注的是“流程”和“步骤”。

适用场景：

适合简单、线性的任务。

比如：

* 计算器
* 简单数据统计
* 小脚本

人类很喜欢这种写法，因为“从上往下抄步骤”特别符合大脑偷懒机制。程序一大，代码就会像一锅泡了三天的方便面。🙂

---

### 面向对象编程（OOP）

对象：

可以理解为现实中具体的人/物在程序中的数字化身。

万物皆对象。

它把：

* 特征 → 属性
* 功能 → 方法

打包到一起。

面向对象的核心思想：

> 谁来帮我做这件事

而不是：

> 这件事一步一步怎么做

---

### 举例

比如：

挖掘机

属性：

* 颜色
* 油耗
* 马力

方法：

* 推平
* 挖掘

---

# 类与对象

## 类（class）

类：

描述的是一组具有相同属性和方法的模板。

类就像“模具”。

例如：

月饼模具。

属性：

* 颜色
* 形状
* 大小
* 厚度

功能：

* 提供能量
* 文化传承

---

## 对象（object）

对象：

是类创建出来的实例。

对象就是：

真正造出来的东西。

例如：

用月饼模具制作出的各种月饼。

---

## 类与对象关系

* 类 = 模板
* 对象 = 根据模板造出来的实例

一个类：

可以创建无数个对象。

创建对象：

也叫实例化。

---

# 类的定义

## 命名规范

类名：

遵循大驼峰命名法。

每个单词首字母大写。

例如：

```python
UserInfo
UserAccount
```

---

## 定义类

```python
class 类名:
    pass
```

---

## 创建对象

```python
对象名 = 类名()

对象名.属性名 = 属性值
```

---

## 示例

```python
# 定义类
class Car:
    pass

# 创建对象
c1 = Car()

c1.brand = "BMW"
c1.name = "X5"
c1.price = 99999

#__dict__是Python中用户自定义类实例的一个特殊属性
#用于以字典形式存储对象的属性
print(c1.__dict__)
```

输出：

```python
{'brand': 'BMW', 'name': 'X5', 'price': 99999}
```

---

## 对象本质

```python
print(c1)
```

输出：

```python
<__main__.Car object at 0x0000023942887CB0>
```

这一串东西表示：

* c1 是 Car 类创建出来的对象
* 后面是对象在内存中的地址

程序员每天盯着这种十六进制地址。人类说浪漫是星空，Python说浪漫是 `0x0000023942887CB0`。

---

# `__dict__`

## 作用

`__dict__`

用于查看对象所有属性。

```python
print(c1.__dict__)
```

输出：

```python
{
    'brand': 'BMW',
    'name': 'X5',
    'price': 99999
}
```

---

# 方法（method）

定义在类外：

叫函数。

定义在类内：

叫方法。

---

# `__init__` 初始化方法

## 作用

对象创建后自动执行。

主要用于：

初始化对象属性。

---

## 语法

```python
class 类名:

    def __init__(self, 参数列表):
        self.属性名 = 参数值
```

---

## self

`self`

表示当前实例对象。

谁调用方法：

self 就是谁。

---

# 初始化对象示例

```python
class Car:

    # 初始化方法
    def __init__(self, c_color, c_brand, c_name, c_price):

        self.color = c_color
        self.brand = c_brand
        self.name = c_name
        self.price = c_price

        print("Car 类型的对象初始化完毕")

# 创建对象
c1 = Car("blue", "BMW", "X7", 99999)

print(c1.__dict__)
```

---

# 实例方法

## 定义

```python
class 类名:

    def 方法名(self):
        pass
```

---

## 调用

```python
对象.方法名()
```

---

# 示例

```python
class Car:

    def __init__(self, c_color, c_brand, c_name, c_price):

        self.color = c_color
        self.brand = c_brand
        self.name = c_name
        self.price = c_price

    # 实例方法
    def running(self):
        print(f"{self.brand}{self.name}正在高速行驶")

    def total_cost(self, discount, rate=0.1):

        total_cost = self.price * discount + rate * self.price

        return total_cost

# 测试
c1 = Car("红色", "BMW", "X7", 99999)

c1.running()

total1 = c1.total_cost(discount=0.9, rate=0.1)

print(total1)
```

---

# 易混淆的点

## 1. c1 和 Car 的关系

```python
c1 = Car()
```

* Car 是类
* c1 是对象

类负责“造”。

对象负责“用”。

---

## 2. 三个 def 的区别

### `__init__`

对象出生自动执行。

负责装属性。

---

### 普通实例方法

例如：

```python
running()
```

需要手动调用。

负责执行动作。

---

### 带返回值的方法

例如：

```python
total_cost()
```

负责计算并返回结果。

---

## 3. 调用方法

属性：

```python
对象.属性
```

方法：

```python
对象.方法()
```

区别：

* 属性不加括号
* 方法必须加括号

---

## 4. 类中的方法本质还是函数

类里的方法：

本质就是函数。

所以：

* 参数
* 返回值
* 默认值
* 关键字传参

规则完全一样。

---

## 5. 哪些方法必须写 self

必须写：

* `__init__`
* 实例方法
* 魔法方法

例如：

```python
__str__
__eq__
__lt__
```

---

# 魔法方法

## 概念

魔法方法：

是 Python 提供的特殊方法。

特点：

* 双下划线开头
* 双下划线结尾

例如：

```python
__init__
```

---

## 特点

不需要手动调用。

Python 会自动调用。

---

# 常见魔法方法

| 魔法方法       | 作用       |
| ---------- | -------- |
| `__init__` | 初始化对象    |
| `__str__`  | 自定义打印对象  |
| `__eq__`   | 比较对象是否相等 |
| `__lt__`   | 小于比较     |
| `__gt__`   | 大于比较     |

---

# `__str__`

## 默认情况

```python
print(c1)
```

默认输出：

```python
<__main__.Car object at ...>
```

没人想看这玩意。除了调试器。调试器没有感情。

---

## 自定义输出

```python
def __str__(self):
    return f"{self.brand}{self.name}{self.price}"
```

---

# `__eq__`

## 默认比较

默认比较：

对象内存地址。

```python
print(c1 == c2)
```

通常是：

```python
False
```

---

## 自定义比较

```python
def __eq__(self, other):

    return self.price == other.price \
           and self.brand == other.brand \
           and self.name == other.name
```

---

# `__lt__`

## 自定义大小比较

```python
def __lt__(self, other):

    return self.price < other.price
```

---

# 魔法方法完整案例

```python
class Car:

    def __init__(self, brand, name, price):

        self.brand = brand
        self.name = name
        self.price = price

    def running(self):

        print(f"{self.brand},{self.name}正在高速行驶...")

    def __str__(self):

        return f"{self.brand}{self.name}{self.price}"

    def __eq__(self, other):

        return self.price == other.price and \
               self.brand == other.brand and \
               self.name == other.name

    def __lt__(self, other):

        return self.price < other.price

c1 = Car("BMW", "X5", 500000)

print(c1)

c2 = Car("BMW", "X5", 500000)

print(c2)

print(c1 == c2)

print(c1 < c2)
```

---

# 实例属性与类属性

## 实例属性

属于对象自己的属性。

每个对象独立。

例如：

```python
self.name
self.price
```

---

## 类属性

属于类本身。

所有对象共享。

例如：

```python
class Car:

    wheel = 4
```

---

# 属性查找规则

对象查找属性：

优先查找实例属性。

实例属性不存在：

再找类属性。

---

# 类属性案例

```python
class Car:

    # 类属性
    wheel = 4
    tax_rate = 0.1

    def __init__(self, c_color, c_brand, c_name, c_price):

        # 实例属性
        self.color = c_color
        self.brand = c_brand
        self.name = c_name
        self.price = c_price

        # 给对象单独添加实例属性
        self.wheel = 2

    def running(self):

        print(f"{self.brand},{self.name}正在高速运行")

# 创建对象
c1 = Car("黑色", "BYD", "汉", 180000)

print(c1.brand)

# 优先找实例属性
print(c1.wheel)

# 直接找类属性
print(Car.wheel)

print(Car.tax_rate)
```

---

# 学生管理系统案例

## Student 类

```python
class Student:

    def __init__(self, name, chinese, math, english):

        self.name = name
        self.chinese = chinese
        self.math = math
        self.english = english

    def __str__(self):

        return f"姓名{self.name},语文{self.chinese},数学{self.math},英语{self.english},总分{self.chinese + self.math + self.english}"

    # 修改成绩
    def update_score(self, chinese=None, math=None, english=None):

        if chinese is not None:
            self.chinese = chinese

        if math is not None:
            self.math = math

        if english is not None:
            self.english = english
```

---

# 教务系统类

```python
class EduManagement:

    # 类属性
    system_version = "1.1.0"

    system_name = "奶龙教务管理系统"

    def __init__(self):

        # 保存学生对象
        self.student_list = []

    # 添加学生
    def add_student(self):

        name = input("输入学生姓名")

        for s in self.student_list:

            if s.name == name:

                print("该学生已经存在")
                return

        chinese = int(input("输入语文成绩"))
        math = int(input("输入数学成绩"))
        english = int(input("输入英语成绩"))

        if 0 <= chinese <= 100 and \
           0 <= math <= 100 and \
           0 <= english <= 100:

            stu = Student(name, chinese, math, english)

            self.student_list.append(stu)

        else:

            print("成绩必须在0到100之间")
```

---

## 修改学生

```python
def update_student(self):

    name = input("输入要修改学生姓名")

    for s in self.student_list:

        if s.name == name:

            print(f"当前成绩{s}")

            chinese = int(input("输入修改后的语文成绩"))
            math = int(input("输入修改后的数学成绩"))
            english = int(input("输入修改后的英语成绩"))

            if 0 <= chinese <= 100 and \
               0 <= math <= 100 and \
               0 <= english <= 100:

                s.update_score(chinese, math, english)

                print(f"修改后的成绩{s}")

                return

            else:

                print("成绩必须在0到100之间")
                return

    print("未找到该学生")
```

---

# 购物车系统案例

## 商品类

```python
class Goods:

    def __init__(self, name, price, num):

        self.name = name
        self.price = price
        self.num = num

    # 修改商品信息
    def update_info(self, new_price, new_num):

        self.price = new_price
        self.num = new_num

    def __str__(self):

        return f"商品名称{self.name},价格{self.price},数量{self.num}"
```

---

## 购物车类

```python
class ShoppingCart:

    def __init__(self):

        self.goods_list = []

    # 添加商品
    def add_goods(self):

        name = input("输入商品名称：")

        for s in self.goods_list:

            if s.name == name:

                print("商品已存在")
                return

        price = float(input("输入商品价格："))

        num = int(input("输入商品数量："))

        self.goods_list.append(Goods(name, price, num))

        print("商品添加成功")
```

---

## 修改商品

```python
def update_goods(self):

    name = input("输入要修改的商品名称：")

    for s in self.goods_list:

        if s.name == name:

            price = float(input("输入修改后的价格："))

            num = int(input("输入修改后的数量："))

            s.update_info(price, num)

            print("修改后的商品信息", s)

            return

    print("未找到该商品")
```

---

## 删除商品

```python
def delete_goods(self):

    name = input("输入要删除的商品名称：")

    for s in self.goods_list:

        if s.name == name:

            self.goods_list.remove(s)

            print("删除成功")

            return

    print("未找到该商品")
```

---

## 查看商品

```python
def look_goods(self):

    if len(self.goods_list) == 0:

        print("购物车没有商品")
        return

    for s in self.goods_list:

        print("购物车商品信息", s)
```

---

# 主菜单系统

```python
def run(self):

    while True:

        print("""
        1添加购物车
        2修改购物车
        3删除购物车
        4查询购物车
        5退出购物车
        """)

        choice = input("输入要执行的操作：")

        try:

            match choice:

                case "1":
                    self.add_goods()

                case "2":
                    self.update_goods()

                case "3":
                    self.delete_goods()

                case "4":
                    self.look_goods()

                case "5":
                    print("退出购物车成功")
                    break

                case _:
                    print("操作不合法")

        except ValueError:

            print("输入错误")

        except Exception as e:

            print(f"程序异常：{e}")
```

---

# 程序入口

```python
if __name__ == "__main__":

    cart = ShoppingCart()

    cart.run()
```

---

# 面向对象核心思想总结

## 面向过程

重点：

```text
步骤
```

你亲自干活。

---

## 面向对象

重点：

```text
对象
```

让对象自己干活。

---

# 一句话理解 OOP

面向对象其实就是：

> 把“数据”和“操作数据的方法”绑定到一起。

谁的数据：

谁负责处理。

这也是为什么大型项目最后几乎都会走向 OOP。

因为当代码超过几千行后，人类大脑的 RAM 就开始冒烟了。程序不会崩，你先崩。
