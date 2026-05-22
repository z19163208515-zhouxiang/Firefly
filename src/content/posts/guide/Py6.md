---
title: 核心语法-类型注解
published: 2026-05-22
description: Python类型注解
tags: [Python类型注解]
category: Python
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

# Python 类型注解（Type Annotation）笔记

---

# 基本介绍

类型注解（Type Annotation）是 Python 中的一种语法特性。

作用：

* 明确标识变量的数据类型
* 明确函数参数的数据类型
* 明确函数返回值的数据类型

从而让代码：

* 更清晰
* 更安全
* 更容易维护

说白了，就是提前告诉别人：

“这个变量里应该放什么。”

否则大型项目里，变量今天是字符串，明天是列表，后天变成精神状态。最后程序员开始和报错信息互相折磨。

---

# 变量的类型注解

## 基本语法

```python
变量名: 类型 = 值
```

---

# 示例

```python
a: int = 695
score: float = 98.5
hobby: str = "Python"
flag: bool = True
pic: None = None
```

---

# 容器类型注解

## 列表 list

```python
names: list[str | int] = ["A","B","C"]
```

表示：

列表中的元素可以是：

* `str`
* `int`

---

## 集合 set

```python
phones: set[str] = {"666666","88888888"}
```

表示：

集合中的元素都是字符串。

---

## 字典 dict

```python
options: dict[str, int] = {"count":2,"total":10}
```

表示：

* 键（key）是字符串
* 值（value）是整数

---

## 元组 tuple

```python
goods: tuple[str,int,int]
```

表示：

元组中元素顺序固定：

| 位置  | 类型  |
| --- | --- |
| 第1个 | str |
| 第2个 | int |
| 第3个 | int |

---

# 类型推断（Type Inference）

类型推断：

指 Python 自动推断变量的数据类型。

不需要手动写类型。

---

# 示例

```python
# 定义变量（未指定类型注解）
a = 596
score = 98.5
hobby = "Python"
flag = True
pic = None

names = ["A","C","E"]
phones = {"666888","66688888"}
options = {"count":2,"total":10}
goods = {"手机",6999,1}

names.append("X")
names.append(1000)
```

---

# 类型推断的特点

Python 在以下场景会自动推断类型：

* 变量直接赋值
* 表达式运算
* 容器推导
* 函数返回值

---

# 注意

类型注解：

```python
只是语法提示
```

不会影响程序运行。

Python 不会因为你写了：

```python
a: int = "hello"
```

就阻止程序运行。

因为 Python 是：

```text
动态类型语言
```

类型注解只是“建议”。

不是强制约束。

像老师对作业的要求。

理论上人人都该遵守。

现实里总有人写出：

```python
name = 666
```

然后整个项目开始燃烧。

---

# 类型注解的好处

## 1. 代码结构更清晰

看到代码就知道变量是什么类型。

---

## 2. 更安全

可以提前发现潜在问题。

---

## 3. 更方便维护

团队协作时更容易理解代码。

---

## 4. 更准确的代码提示

IDE（PyCharm、VSCode）会有更智能的自动补全。

---

# 函数的类型注解

函数类型注解：

主要用于：

* 参数
* 返回值

---

# 基本语法

```python
def 函数名(参数: 类型) -> 返回值类型:
```

---

# 示例：圆的面积与周长

```python
# 参数类型        返回值类型
def circle_area_len(r: float) -> tuple[float, float]:
    return round(3.14 * r * r), round(2 * 3.14 * r)

al = circle_area_len(8.5)

print(al)
```

---

# 代码解析

```python
r: float
```

表示：

参数 `r` 必须是浮点数。

---

```python
-> tuple[float,float]
```

表示：

函数返回：

```python
(浮点数, 浮点数)
```

---

# 示例：成绩统计

```python
# 参数类型                返回值类型
def calc_data(scores: list[int]) -> tuple[int, int, float]:
    max_score = max(scores)
    min_score = min(scores)
    avg_score = sum(scores) / len(scores)

    return max_score, min_score, avg_score
```

---

# 代码解析

```python
scores: list[int]
```

表示：

`scores` 是：

```python
整数列表
```

例如：

```python
[90, 88, 100]
```

---

返回值：

```python
tuple[int, int, float]
```

表示返回：

```python
(整数, 整数, 浮点数)
```

即：

```python
(最高分, 最低分, 平均分)
```

---

# 类型注解 + 不定长参数

---

# 需求

定义一个函数：

根据：

* 商品信息
* 优惠券
* 积分
* 运费

计算订单总金额。

---

# 规则

## 1. 优惠券

* 商品总金额满 5000 才能使用
* 优惠券金额不能超过商品总价

---

## 2. 积分抵扣

* 商品总金额满 5000 才能使用
* 100 积分抵 1 元
* 抵扣金额不能超过商品总价
* 积分只能整百抵扣

---

# 完整代码

```python
"""
*args：接收可变位置参数，收拢成大元组

: 后面是类型注解

tuple[str, float, int] 的意思：

args 这个大元组里的“每一个小元组”，固定是3个位置
"""

# 参数有默认值，可以进行类型推断
def calc_order_cost(
    *args: tuple[str, float, int],
    coupon: int = 0,
    score: int = 0,
    express: float = 0.0
) -> float:
    """
    定义一个函数，用于根据传入的一批商品信息
    （商品名、价格、数量）
    优惠（优惠券、积分抵扣）
    运费信息计算订单的总金额

    :param args:
        商品信息（商品名、价格、数量）

        传递多个元组()或列表[]

        args 也是一个元组，
        即元组里封装多个元组

    :param coupon: 优惠券
    :param score: 积分
    :param express: 运费

    :return: 订单总金额
    """

    # 订单总金额 = 商品总金额 - 优惠券 - 积分抵扣 + 运费

    # 1. 计算商品总金额

    # 把 args 大元组里的每个商品小元组中的：
    # 价格 × 数量
    # 封装进列表（列表推导式）

    total_price = [
        goods[1] * goods[2]
        for goods in args
    ]

    # 用 sum() 计算总金额
    total_cost = sum(total_price)

    # 优惠券
    if total_cost >= 5000 and coupon <= total_cost:
        total_cost -= coupon

    # 积分抵扣
    if total_cost >= 5000 and score // 100 <= total_cost:
        # // 整除
        total_cost -= score // 100

    # 添加运费
    total_cost += express

    return total_cost


total1 = calc_order_cost(
    ("鼠标",99,2),
    ("键盘",388,1),
    ("手机",3999,1),
    coupon=10,
    score=4000,
    express=9.9
)

print(total1)
```

---

# 重点解析

---

## `*args`

```python
*args
```

作用：

接收：

```python
多个位置参数
```

并封装成：

```python
元组
```

---

# 类型注解解析

```python
*args: tuple[str,float,int]
```

表示：

`args` 中的每一个商品信息都必须是：

```python
(商品名, 价格, 数量)
```

对应：

| 位置  | 类型    |
| --- | ----- |
| 商品名 | str   |
| 价格  | float |
| 数量  | int   |

---

# 默认值类型推断

```python
coupon: int = 0
```

表示：

* `coupon` 是整数
* 默认值是 `0`

---

# 返回值类型

```python
-> float
```

表示：

函数最终返回：

```python
浮点数
```

即：

```python
订单总金额
```

---

# 总结

---

# 类型注解核心作用

| 作用    | 说明         |
| ----- | ---------- |
| 提高可读性 | 一眼知道变量类型   |
| 提高维护性 | 更适合团队开发    |
| 提高安全性 | 提前发现潜在问题   |
| 更智能提示 | IDE 自动补全更强 |

---

# Python 类型特点

Python：

```text
动态类型语言
```

所以：

```python
类型注解 ≠ 强制类型检查
```

它只是：

```text
“友情提示”
```

不是：

```text
“法律制裁”
```

Python 主打一个：

“我提醒过你了，至于你非要往 list 里塞飞机发动机，那是你的自由。”


