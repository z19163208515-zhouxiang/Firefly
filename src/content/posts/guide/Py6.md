---
title: 核心语法-类型注解
published: 2026-05-20
description: Python类型注解
tags: [Python类型注解,学习]
category: Python语法
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

# Python 类型注解完整笔记

## 基本介绍

类型注解是Python中的一种语法特性，用于明确标识变量、函数参数和返回值的数据类型，从而使代码更清晰、更安全、更易维护。

```python
# 定义变量，指定类型注释
a: int = 695
score: float = 98.5
hobby: str = "Python"
flag: bool = True
pic: None = None

names: list[str | int] = ["A", "B", "C"]     # 列表里是字符串或整数
phones: set[str] = {"666666", "88888888"}    # 集合里都是字符串
options: dict[str, int] = {"count": 2, "total": 10}   # 字典：键是字符串，值是整数
goods: tuple[str, int, int]   # 元组：依次是 字符串、整数、整数
```

---

## 类型推断

类型推断是指Python解释器自动推断出变量、表达式或函数返回值的数据类型的能力，而无需开发者显式声明。

> 注意：在对变量进行直接赋值，或者涉及到变量的运算、容器的推导等场景时，解释器会自动推断出变量的类型。

```python
# 定义变量，未指定类型注释，类型推断
a = 596
score = 98.5
hobby = "Python"
flag = True
pic = None

names = ["A", "C", "E"]
phones = {"666888", "66688888"}
options = {"count": 2, "total": 10}
goods = {"手机", 6999, 1}

names.append("X")
names.append(1000)
```

---

## 重要说明

- 类型注解只是起到语法提示作用，**并不会影响程序运行的结果**
- Python是动态类型语言，添加的类型注解只是提示，并不是强制约束

### 类型注解的好处

1. 代码结构更清晰
2. 代码逻辑更安全、易维护
3. 更准确的代码自动提示
4. 提前发现代码潜在问题

> 对于需要团队协作开发和长期维护的项目，推荐使用类型注解。

---

## 函数的类型注解

为函数添加类型注解，其实主要就是为函数的参数和返回值添加类型注解。

```python
# 给函数参数设置默认值后可以推断数据类型

#                   参数类型       返回值类型
def circle_area_len(r: float) -> tuple[float, float]:
    return round(3.14 * r * r), round(2 * 3.14 * r)

al = circle_area_len(8.5)
print(al)
```

```python
#                       参数类型                返回值类型
def calc_date(scores: list[int]) -> tuple[int, int, float]:
    max_score = max(scores)
    min_score = min(scores)
    avg_score = sum(scores) / len(scores)
    return max_score, min_score, avg_score
```

---

## 综合案例：订单金额计算（带类型注解）

```python
"""
定义一个函数，用于根据传入的一批商品信息（商品名、价格、数量）、优惠（优惠券、积分抵扣）
运费信息计算订单的总金额。

具体规则如下：
1. 优惠券需要商品满5000元才可以使用，且优惠券金额不能超过商品总价
2. 积分抵扣需要商品总金额满5000元才可以使用，100积分抵1元（且抵扣金额不能超过商品总价，
   积分只能整百抵扣）
"""

"""
*args：接收可变位置参数，收拢成大元组
:后面是类型注解
tuple[str, float, int]的意思：
args 这个大元组里的「每一个小元组」，固定是3个位置
"""

# 参数有默认值，可以进行类型推断
def calc_order_cost(*args: tuple[str, float, int], coupon: int = 0, score: int = 0, express: float = 0.0) -> float:
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

    # 优惠券
    if total_cost >= 5000 and coupon <= total_cost:
        total_cost -= coupon

    # 积分抵扣
    if total_cost >= 5000 and score // 100 <= total_cost:   # //整除
        total_cost -= score // 100

    # 添加运费
    total_cost += express

    return total_cost

total1 = calc_order_cost(("鼠标", 99, 2), ("键盘", 388, 1), ("手机", 3999, 1), coupon=10, score=4000, express=9.9)
print(total1)
```

---

## 关键点总结

| 特性 | 说明 |
|------|------|
| 类型注解 | 语法提示工具，不影响运行结果 |
| 类型推断 | Python解释器自动推断数据类型 |
| 动态类型 | Python是动态类型语言，注解非强制 |
| 函数注解 | 参数类型 + 返回值类型（`->`） |
| 容器注解 | `list[str]`、`dict[str, int]`、`tuple[str, int, int]`等 |
| 联合类型 | `str \| int`（Python 3.10+） |
