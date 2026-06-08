---
title: 核心语法-面向对象基础
published: 2026-05-22
description: Python面向对象基础
tags: [Python面向对象基础,学习]
category: Python语法
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---


## 概述

### 面向过程编程

**核心思想**：把一个需求分解成一系列要执行的步骤，然后按照步骤依次执行这些任务（关注的是流程、步骤）

**适用场景**：面向过程编程非常直接，适合简单、线性的任务

### 面向对象编程

对象可以理解为现实中具体的人/物在程序中的数字化身（**万物皆对象**）

它把一个人/物的特征（特征称之为**属性**）和功能（功能称之为**方法**）打包到一起，是面向对象编程的基本单元（关注的是**谁来帮我做这件事**）

比如，挖掘机：
- 属性：颜色、油耗、马力
- 方法：推平、挖掘

---

## 类与对象

**类**：描述的是一组具有相同属性（特征）和方法（功能/行为）的模板

> 比如一个月饼的模具（类）：属性：颜色、形状、大小、厚度；功能：提供能量、文化传承

**对象**：对象是类的实例，是基于类创建出来的（实例对象）

对象是由类创建出来的，创建对象的过程，也称为对象的实例化。一个类可以创建无数个对象。

> 比如用月饼模具可以制作出来多种多样的月饼

### 类与对象基本语法

> 说明：类名的命名规范，遵循**大驼峰命名法**，每个单词的首字母都是大写，单词之间没有分隔符，比如 `UserInfo`、`UserAccount`

```python
# 定义类
class 类名:
    pass

# 创建对象
对象名 = 类名()
对象名.属性名1 = 属性值1
对象名.属性名2 = 属性值2
```

```python
# 定义类
class Car:
    pass

# 创建对象
c1 = Car()

c1.brand = "BMW"
c1.name = "X5"
c1.price = 99999

# __dict__是Python中用户自定义类实例的一个特殊属性，用于以字典形式存储对象的属性
print(c1.__dict__)
```

```python
# 定义类
class Car:
    pass

# 创建对象（由类创建）
c1 = Car()
# 动态的为对象添加属性
# 对象.属性名 = 属性值
c1.brand = "BMW"
c1.name = "X5"
c1.price = 99999

# 这一串东西，告诉你 c1 是个 Car 对象，在内存的哪个位置
print(c1)   # 输出 <__main__.Car object at 0x0000023942887CB0>
print(c1.brand)

# __dict__是Python中用户自定义类实例的一个特殊属性，用于以字典形式存储对象的属性
print(c1.__dict__)   # 将对象中的所有属性以字典的形式输出出来
```

> 定义在类的外面的称之为**函数**，定义在类中的函数称之为**方法**

---

## `__init__` 初始化方法

```python
# 定义类
"""
__init__：初始化方法，对象创建后自动调用，主要用于设置对象的初始状态（设置对象属性）
self：方法的第一个参数，表示当前创建的实例对象
"""
class 类名:
    def __init__(self, 参数列表):
        self.属性名 = 参数值
        self.属性名 = 参数值

# 创建对象
对象名 = 类名(参数列表)
```

```python
# 定义类
class Car:
    # __init__方法是初始化的方法，会在创建对象时自动调用，主要用于设置对象的初始状态（设置对象的属性）
    # self是类中定义的方法的第一个参数，表示当前所创建出来的实例对象
    def __init__(self, c_color, c_brand, c_name, c_price):
        self.color = c_color
        self.brand = c_brand
        self.name = c_name
        self.price = c_price
        print("Car 类型的对象初始化完毕，对象属性已经添加完毕")

# 创建对象
c1 = Car("blue", "BMW", "X7", 99999)
print(c1.__dict__)

c2 = Car("blue", "BMW", "X7", 99999)
print(c2.__dict__)
```

---

## 实例方法

```python
# 定义类
class 类名:
    def __init__(self, 形参列表):
        self.属性名 = 参数值
        self.属性名 = 参数值

    def 方法名(self, 形参列表):
        ...
    def 方法名(self, 形参列表):
        ...

# 创建对象
对象名 = 类名(参数列表)
对象名.方法名(实参)
```

```python
class Car:
    def __init__(self, c_color, c_brand, c_name, c_price):
        self.color = c_color
        self.brand = c_brand
        self.name = c_name
        self.price = c_price
        print("Car 类型的对象初始化完毕，对象属性已经添加完毕")

    # 定义实例方法
    def running(self):
        print(f"{self.brand}{self.name}品牌的车正在高速行驶")

    def total_cost(self, discount, rate=0.1):
        """
        计算汽车的总费用（车的价格、税费）
        :param discount: 折扣
        :param rate: 税率
        :return: 汽车的总费用
        """
        total_cost = self.price * discount + rate * self.price
        return total_cost

# 测试
c1 = Car("红色", "BMW", "X7", 99999)

c1.running()
total1 = c1.total_cost(discount=0.9, rate=0.1)
print(total1)
total2 = c1.total_cost(0.8)   # self表示当前实例对象，方法调用时无需传递
print(total2)
```

### 易混淆的点

1. **c1和Car的关系**
   - c1 就是 Car 类创建出来的一个具体对象
   - 有了 c1 才能用，访问属性，调用方法

2. **三个def的区别**
   - `__init__`：出生自动跑，负责装属性
   - `running`：自己手动喊它跑，只做动作
   - `total_cost`：手动喊它干活，要传参、能算值、能返回

3. **调用方法的不同**
   - 调用（对象.名字）都是用小数点 `.`
   - 属性不加括号，方法加括号 `()`

4. **与之前函数的关系**
   - 类里面的def（方法），就是普通函数，传参、默认值、关键字传参、返回值，全部跟你之前学的普通函数语法一模一样

5. **哪些def必须加self**
   - `__init__` 构造方法：必须加
   - 自己写的普通实例方法（running、study、log）：必须加
   - 所有魔法方法 `__str__`、`__eq__`、`__lt__`：都必须加

---

## 魔法方法

魔法方法是指Python中提供的以双下划线开头和结尾的特殊方法，用于定义类的特殊行为，比如 `__init__`

魔法方法是不需要我们手动调用的，Python会在合适的时机自动调用。

| 魔法方法 | 描述 |
|----------|------|
| `__init__` | 初始化方法 |
| `__str__` | 字符串表示的方法 |
| `__eq__` | 比较两个对象是否相等（equal） |
| `__lt__`(`<`) `__le__`(`<=`) `__gt__`(`>`) `__ge__`(`>=`) | 支持比较两个对象的大小 |

```python
class Car:
    def __init__(self, brand, name, price):
        self.brand = brand
        self.name = name
        self.price = price

    def running(self):
        print(f"{self.brand} {self.name}正在高速运行")

c1 = Car("小米su7", "X5", 99999)
# 默认输出出来的是对象的内存地址（16进制）
print(c1)
c2 = Car("比亚迪", "PLUS", 99999)
print(c2)

print(c1 == c2)   # 默认是基于对象的内存地址进行比较的，输出False
print(c1 < c2)    # 默认自定义的对象之间不可以进行大小比较
```

### 魔法方法详解

1. **`__str__`**
   - 当你 `print(c1)` 的时候，Python自动去找 `__str__`
   - 作用：自定义打印对象时显示什么内容
   - 没有它：打印 `__main__.Car object at ...`
   - 有了它：打印你 `return` 的字符串

2. **`__eq__`**
   - 当你写 `==` 比较两个对象时 `print(c1 == c2)`，Python自动调用 `__eq__`
   - 作用：自定义两个对象怎么才算相等
   - `return self.price == other.price and self.brand == other.brand and self.name == other.name`（品牌、型号、价格都一样，才算相等）

3. **`__lt__`**
   - 当你写 `<` 比较两个对象时 `print(c1 < c2)`，Python自动调用 `__lt__`
   - 作用：自定义对象谁大谁小
   - `return self.price < other.price`

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
        return self.price == other.price and self.brand == other.brand and self.name == other.name

    def __lt__(self, other):
        return self.price < other.price

c1 = Car("BMW", "X5", 500000)
print(c1)
c2 = Car("BMW", "X5", 500000)
print(c2)
print(c1 == c2)
print(c1 < c2)
```

```python
class Car:
    def __init__(self, c_color, c_brand, c_name, c_price):
        self.color = c_color
        self.brand = c_brand
        self.name = c_name
        self.price = c_price
        print("Car 类型的对象初始化完毕，对象属性添加完毕")

    def running(self):
        print(f"{self.brand},{self.name}正在高速运行中")

    def total_price(self, discount, rate=0.1):
        total_cost = self.price * discount + rate * self.price
        return total_cost

    def __str__(self):
        return f"{self.color},{self.brand},{self.name},{self.price}"

    def __eq__(self, other):
        return self.color == other.color and self.brand == other.brand

    def __lt__(self, other):
        return self.price < other.price

c1 = Car("黑色", "BYD", "汉", 180000)
print(c1)

c2 = Car("白色", "BYD", "汉", 180001)
print(c2)

print(c1 == c2)
print(c1 > c2)   # False
```

---

## 实例属性与类属性

- **实例属性**：实例属性属于每个具体对象的属性，每个对象都是独立的（各个对象特有的数据）
- **类属性**：类属性是属于类本身的属性，所有实例共享的（所有对象共享的数据或配置）

> 通过实例查找属性时，会先查找实例属性，实例属性不存在时，再查找类属性

```python
# 定义类：Car 是类名
class Car:
    # ===================== 类属性 =====================
    # 写在类内部、所有def外面，属于整个类，所有对象共享
    wheel = 4           # 轮胎数量 类属性
    tax_rate = 0.1      # 购置税税率 类属性

    # ===================== 构造方法（初始化方法） =====================
    # __init__ 魔法方法、构造方法，创建对象时自动执行
    # self：必须第一个参数，代表当前实例对象
    # c_color/c_brand/c_name/c_price：形参（普通函数参数）
    def __init__(self, c_color, c_brand, c_name, c_price):
        # ===================== 实例属性 =====================
        # 带self. 属于单个对象自己独有
        self.color = c_color    # 实例属性：颜色
        self.brand = c_brand    # 实例属性：品牌
        self.name = c_name      # 实例属性：车型
        self.price = c_price    # 实例属性：价格

        # 给当前对象单独新增 实例属性wheel
        # 会覆盖类属性的查找优先级
        self.wheel = 2

    # ===================== 实例方法 =====================
    # 类中定义的普通函数，第一个参数必须是self
    def running(self):
        # self.brand / self.name 访问实例属性
        print(f"{self.brand},{self.name}正在高速运行中")

    # 实例方法：带形参、默认参数、有return返回值
    def total_cost(self, discount, rate=0.1):
        # 方法内部局部变量 total_cost
        total_cost = discount * self.price + self.price * rate
        # return 关键字：返回方法执行结果
        return total_cost

# ===================== 创建实例对象 =====================
# 自动触发__init__构造方法，c1是实例对象名
c1 = Car("黑色", "BYD", "汉", 180000)

# 通过 对象名.实例属性 访问实例属性
print(c1.brand)

"""
属性查找规则：
通过实例对象（c1）查找属性时，会先查找【实例属性】
实例属性不存在，再向上查找【类属性】
"""

# 对象.属性名：优先找实例属性self.wheel=2，不再找类属性wheel=4
print(c1.wheel)

# 类名.类属性：直接访问类本身的属性，不走实例属性
print(Car.wheel)
print(Car.tax_rate)

# 再创建一个新的实例对象 c2
c2 = Car("白色", "BYD", "汉", 180001)
```

---

## 案例一：学生成绩管理系统

```python
# 学生类
class Student:
    def __init__(self, name, chinese, math, english):
        self.name = name
        self.chinese = chinese
        self.math = math
        self.english = english

    def __str__(self):
        return f"姓名{self.name},语文{self.chinese},数学{self.math},英语{self.english},总分{self.chinese + self.math + self.english}"

    # 修改学生的成绩，给参数设置默认值，方便用关键字传参（其他两个有默认值，不用传递）
    def update_score(self, chinese=None, math=None, english=None):
        if chinese is not None:
            self.chinese = chinese
        if math is not None:
            self.math = math
        if english is not None:
            self.english = english

# 教务系统类
class EduManagement:
    # 版本
    system_version = "1.1.0"
    # 名称
    system_name = "奶龙教务管理系统"

    def __init__(self):
        # 空列表，记录在校学生的成绩信息，列表里装Student类创建的学生对象
        self.student_list = []

    # 添加学生成绩
    def add_student(self):
        name = input("输入学生姓名")
        # 判断学生姓名是否存在，如果存在添加失败
        # 遍历出来的s是学生对象Student
        for s in self.student_list:
            if s.name == name:
                print("该学生已经存在，添加失败")
                # 添加失败后结束代码
                return
        chinese = int(input("输入语文成绩"))
        math = int(input("输入数学成绩"))
        english = int(input("输入英语成绩"))
        # 判断分数是否在0到100之间
        if 0 <= chinese <= 100 and 0 <= math <= 100 and 0 <= english <= 100:
            # 创建对象（由上面的学生Student类创建）存进列表
            stu = Student(name, chinese, math, english)
            # 把对象添加进列表
            self.student_list.append(stu)
        else:
            print("成绩必须在0到100之间")

    # 修改学生成绩
    def update_student(self):
        name = input("输入要修改学生的姓名")
        # 根据学生姓名找到该学生的信息
        for s in self.student_list:
            if s.name == name:
                print(f"当前成绩{s}")   # s是由Student类创建对象，__str__魔法方法输出字符串
                # 输入修改后的成绩
                chinese = int(input("输入修改后的语文成绩"))
                math = int(input("输入修改后数学成绩"))
                english = int(input("输入修改后的英语成绩"))
                # 判断分数是否在0到100之间
                if 0 <= chinese <= 100 and 0 <= math <= 100 and 0 <= english <= 100:
                    # 修改成绩，调用Student中的方法（update_score）
                    s.update_score(chinese, math, english)
                    # 输出修改后的成绩
                    print(f"修改后的成绩{s}")
                    return
                else:
                    print("各科成绩需要在0到100之间")
                    return
        # 与for平级写，遍历一轮未进入if语句，直接输出print("未找到该学生")
        print("未找到该学生，修改失败")

    # 删除学生成绩
    def delete_student(self):
        name = input("输入要删除的学生姓名")
        for s in self.student_list:
            if s.name == name:
                self.student_list.remove(s)
                print("学生信息删除成功")
                return
        print("未找到该学生，删除失败")

    # 查询指定学生信息
    def query_student(self):
        name = input("输入要查询的学生姓名")
        for s in self.student_list:
            if s.name == name:
                print(f"学生信息:{s}")
                return
        print("未找到该学生")

    def list_student(self):
        for s in self.student_list:
            print(s)

    # 添加一个运行系统的方法
    def run(self):
        print(f"教务系统版本{EduManagement.system_version}")
        while True:
            print("""
            1添加学生
            2修改学生
            3删除学生
            4查询指定学生
            5查询所有学生
            6退出系统
            """)
            choice = input("输入要执行的操作")
            match choice:
                case "1":   # 添加学生
                    self.add_student()
                case "2":   # 修改学生
                    self.update_student()
                case "3":   # 删除学生
                    self.delete_student()
                case "4":   # 查询指定学生
                    self.query_student()
                case "5":   # 列出所有学生
                    self.list_student()
                case "6":   # 退出系统
                    break
                case _:
                    print("错误操作")

# 测试
if __name__ == "__main__":
    # 创建教务系统实例对象
    edu_management = EduManagement()
    # 运行系统
    edu_management.run()
```

---

## 案例二：购物车管理系统（面向对象版本）

```python
# 商品类：负责描述商品的属性和行为（面向对象：自己管自己）
class Goods:
    # 构造方法：创建商品时，自动初始化名称、价格、数量
    def __init__(self, name, price, num):
        self.name = name    # 实例属性：商品名称
        self.price = price  # 实例属性：商品价格
        self.num = num      # 实例属性：商品数量

    # 商品自己的修改方法：专门用来修改价格和数量
    # 面向对象思想：商品自己修改自己的信息，而不是让别人直接改
    def update_info(self, new_price, new_num):
        """修改商品的价格和数量"""
        self.price = new_price   # 修改价格为新传入的价格
        self.num = new_num       # 修改数量为新传入的数量

    # 魔法方法：打印商品对象时，自动输出这个格式
    def __str__(self):
        return f"商品名称{self.name},价格{self.price},数量{self.num}"


# 购物车类：负责管理所有商品（增、删、改、查）
class ShoppingCart:
    # 构造方法：创建购物车时，初始化一个空列表存储商品对象
    def __init__(self):
        self.goods_list = []   # 列表：用来保存所有商品对象（Goods）

    # 添加商品功能
    def add_goods(self):
        name = input("输入商品名称：")

        # 遍历购物车列表，s 代表每一个商品对象
        for s in self.goods_list:
            # 判断商品是否已存在（根据名字判断）
            if s.name == name:
                print("该商品已存在，无需重复添加")
                return   # 存在就直接结束方法，不继续添加

        # 接收用户输入的价格和数量，并转换类型
        price = float(input("输入商品价格："))
        num = int(input("输入商品数量："))

        # 创建 Goods 商品对象，并添加到购物车列表
        self.goods_list.append(Goods(name, price, num))
        print("商品添加成功")

        # 遍历打印当前购物车所有商品
        for s in self.goods_list:
            print("购物车商品信息", s)

    # 修改商品功能
    def update_goods(self):
        name = input("输入要修改的商品名称：")

        # 遍历购物车找商品，s 是商品对象
        for s in self.goods_list:
            if s.name == name:
                # 输入新的价格和数量
                price = float(input("输入修改后的价格："))
                num = int(input("输入修改后的数量："))

                # 调用商品自己的修改方法来更新信息（标准面向对象）
                s.update_info(price, num)

                print("修改后的商品信息", s)
                return   # 修改完成，直接结束方法

        # 循环结束没找到，说明商品不存在
        print("未找到该商品")

    # 删除商品功能
    def delete_goods(self):
        name = input("请输入要删除的商品名称：")

        # 遍历找商品，s 是商品对象
        for s in self.goods_list:
            if s.name == name:
                self.goods_list.remove(s)   # 从列表删除该商品对象
                print("删除成功")
                return

        print("未找到该商品")

    # 查询所有商品
    def look_goods(self):
        # 如果购物车列表长度为0，说明没有商品
        if len(self.goods_list) == 0:
            print("购物车没有商品")
            return

        # 遍历打印所有商品
        for s in self.goods_list:
            print("购物车商品信息", s)

    # 购物车主菜单：统一调度所有功能 + 统一捕获异常
    def run(self):
        while True:
            print("""
            1添加购物车 2修改购物车 3删除购物车 4查询购物车 5退出购物车
            """)
            choice = input("输入要执行的操作：")

            # 统一捕获所有功能的异常（输错字母/符号不会崩溃）
            try:
                match choice:
                    case "1":
                        self.add_goods()      # 调用添加方法
                    case "2":
                        self.update_goods()   # 调用修改方法
                    case "3":
                        self.delete_goods()   # 调用删除方法
                    case "4":
                        self.look_goods()     # 调用查询方法
                    case "5":
                        print("退出购物车成功")
                        break                 # 结束循环，退出系统
                    case _:
                        print("操作不合法，请输入1-5")
            # 捕获输入非数字的异常
            except ValueError:
                print("输入错误！价格必须是小数、数量必须是整数")
            # 捕获其他所有未知异常
            except Exception as e:
                print(f"程序出现异常：{e}")

# 程序入口：只有直接运行这个文件才会执行
if __name__ == "__main__":
    cart = ShoppingCart()   # 创建购物车实例对象
    cart.run()              # 启动购物车系统
```
