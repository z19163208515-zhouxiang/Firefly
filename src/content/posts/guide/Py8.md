---
title: 核心语法-异常
published: 2026-05-22
description: Python异常
tags: [Python异常]
category: Python
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

# Python 异常处理笔记

## 一、异常介绍

异常（也称为 Bug）就是程序运行过程中出现的错误。
它会中断程序的正常执行流程。

比如：

* 变量不存在
* 除数为 0
* 索引越界
* 调用了不存在的方法

人类写代码最大的特点，就是坚信“这次肯定不会报错”。
Python 则像一个冷漠保安：“你再说一遍？直接给你崩。”

---

## 二、异常的作用

### 1. 保证数据、逻辑的正确性

避免程序执行混乱。

### 2. 尽早发现问题

在开发阶段尽量发现更多的问题，尽早解决问题，保障程序正常运行。

### 3. 编写健壮程序

异常不是坏东西，而是编写健壮程序的重要工具。

真正危险的不是报错。

真正危险的是：

“程序明明错了，但它装作没错。”

---

# 三、异常处理

## 1. 不做处理

整个程序因为一个 Bug 中断执行。

这就是之前写程序时的状态：

```python
print(1 / 0)
print("后面的代码")
```

程序直接崩。

后面的代码根本不会执行。

---

## 2. 捕获处理（推荐）

按照我们自己的方式处理异常。

即：

程序出错后：

* 不让程序崩
* 按预案处理
* 程序继续运行

就像：

飞机遇到气流不是直接坠毁，而是：

“已出现异常，启动备用方案。”

---

# 四、捕获异常语法

```python
try:
    可能出现异常的业务代码1
    可能出现异常的业务代码2
    ...

except [异常类型 as 变量名]:
    出现异常时的预案

finally:
    不管是否出现异常 都会执行的代码
```

---

# 五、异常处理案例

```python
# 异常处理
try:
    print("________")

    # print(my_name)
    # print(1 / 0)
    # print("ABC"[10])
    print("ABC".hello)

    print("________")

# 捕获具体异常
# 从上到下一个一个匹配异常
except NameError as e:
    print("名字不存在，请检查变量或函数名字，异常信息：", e)

except ZeroDivisionError as e:
    print("0不能做除数", e)

except IndexError as e:
    print("索引错误", e)

# 捕获所有异常
except Exception as e:
    print("程序运行出错", e)

# 无论是否异常都会执行
finally:
    print("资源释放")
```

---

# 六、异常处理执行流程

## try

先执行 try 里面的代码。

---

## except

如果 try 中出现异常：

Python 会：

1. 查看异常类型
2. 从上到下匹配 except
3. 找到对应异常后执行预案

例如：

```python
print(1 / 0)
```

会触发：

```python
ZeroDivisionError
```

所以会进入：

```python
except ZeroDivisionError
```

---

## Exception

```python
except Exception as e:
```

作用：

捕获所有异常。

相当于：

“前面没匹配到的异常，我兜底处理。”

通常写在最后。

因为：

它太万能了。

写前面，后面的异常永远匹配不到。

---

## finally

```python
finally:
```

无论是否发生异常：

都会执行。

常用于：

* 关闭文件
* 释放资源
* 断开数据库连接

因为程序员最爱干的事情之一：

打开资源后忘记关。

---

# 七、常见异常类型

| 异常类型              | 说明       |
| ----------------- | -------- |
| NameError         | 名字不存在    |
| ZeroDivisionError | 除数为 0    |
| IndexError        | 索引越界     |
| AttributeError    | 对象没有该属性  |
| ValueError        | 数据类型转换错误 |
| Exception         | 所有异常的父类  |

---

# 八、异常传递

## 1. 什么是异常传递

异常传递：

就是异常在函数调用中层层上报的过程。

直到：

* 有人处理它
* 或程序崩溃

---

## 2. 异常传递案例

```python
# 异常的传递

def fun1():
    print("fun1 run")
    fun2()

def fun2():
    print("fun2 run")
    fun3()

def fun3():
    print("fun3 run")
    print(my_color)

if __name__ == "__main__":

    # 从入口捕获异常
    try:
        fun1()

    except Exception as e:
        print("运行出错", e)
```

---

# 九、异常传递执行流程

```python
fun1()
```

执行：

```python
fun1 -> fun2 -> fun3
```

最终：

```python
print(my_color)
```

报错：

```python
NameError
```

因为：

`my_color` 没定义。

---

## 传递过程

```text
fun3 出错
↓
fun2 没处理
↓
fun1 没处理
↓
main 入口处理
```

这就叫：

异常传递。

像公司甩锅链。

底层员工发现问题：

“我解决不了。”

一路往上甩。

---

# 十、教务系统（加入异常处理）

下面是你原本的完整代码，已经修正错别字并整理排版。

---

# 学生类

```python
class Student:

    def __init__(self, name, chinese, math, english):
        self.name = name
        self.chinese = chinese
        self.math = math
        self.english = english

    def __str__(self):
        return (
            f"姓名{self.name},"
            f"语文{self.chinese},"
            f"数学{self.math},"
            f"英语{self.english},"
            f"总分{self.chinese + self.math + self.english}"
        )

    # 修改学生成绩
    def update_score(
            self,
            chinese=None,
            math=None,
            english=None
    ):

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

        # 学生列表
        self.student_list = []

    # 添加学生
    def add_student(self):

        name = input("输入学生姓名：")

        # 判断学生是否已存在
        for s in self.student_list:

            if s.name == name:
                print("该学生已经存在，添加失败")
                return

        chinese = int(input("输入语文成绩："))
        math = int(input("输入数学成绩："))
        english = int(input("输入英语成绩："))

        # 判断成绩是否合法
        if (
                0 <= chinese <= 100
                and 0 <= math <= 100
                and 0 <= english <= 100
        ):

            stu = Student(name, chinese, math, english)

            self.student_list.append(stu)

        else:
            print("成绩必须在0到100之间")

    # 修改学生成绩
    def update_student(self):

        name = input("输入要修改学生的姓名：")

        for s in self.student_list:

            if s.name == name:

                print(f"当前成绩：{s}")

                chinese = int(input("输入修改后的语文成绩："))
                math = int(input("输入修改后的数学成绩："))
                english = int(input("输入修改后的英语成绩："))

                if (
                        0 <= chinese <= 100
                        and 0 <= math <= 100
                        and 0 <= english <= 100
                ):

                    s.update_score(
                        chinese,
                        math,
                        english
                    )

                    print(f"修改后的成绩：{s}")
                    return

                else:
                    print("各科成绩需要在0到100之间")
                    return

        print("未找到该学生，修改失败")

    # 删除学生
    def delete_student(self):

        name = input("输入要删除的学生姓名：")

        for s in self.student_list:

            if s.name == name:

                self.student_list.remove(s)

                print("学生信息删除成功")
                return

        print("未找到该学生，删除失败")

    # 查询指定学生
    def query_student(self):

        name = input("输入要查询的学生姓名：")

        for s in self.student_list:

            if s.name == name:

                print(f"学生信息：{s}")
                return

        print("未找到该学生")

    # 查询所有学生
    def list_student(self):

        for s in self.student_list:
            print(s)

    # 运行系统
    def run(self):

        print(f"教务系统版本：{EduManagement.system_version}")

        while True:

            print("""
            1 添加学生
            2 修改学生
            3 删除学生
            4 查询指定学生
            5 查询所有学生
            6 退出系统
            """)

            choice = input("输入要执行的操作：")

            try:

                match choice:

                    case "1":
                        self.add_student()

                    case "2":
                        self.update_student()

                    case "3":
                        self.delete_student()

                    case "4":
                        self.query_student()

                    case "5":
                        self.list_student()

                    case "6":
                        break

                    case _:
                        print("错误操作")

            except ValueError as e:

                print(
                    "数据有问题，请重新输入，错误信息：",
                    e
                )

            except Exception as e:

                print(
                    "程序出错了，请重新输入，错误信息：",
                    e
                )

# 测试
if __name__ == "__main__":

    edu_management = EduManagement()

    edu_management.run()
```

---

# 十一、为什么这里要加异常处理

例如：

用户输入：

```python
abc
```

但代码：

```python
int(input())
```

要求输入整数。

此时：

```python
ValueError
```

如果不处理：

程序直接崩。

加了异常处理：

```python
except ValueError
```

程序不会崩。

而是：

```python
数据有问题，请重新输入
```

这才是真正的程序。

不是：

“用户输错一个字母，整个系统原地去世。”

---

# 十二、异常处理最佳实践

## 1. 能捕获具体异常就别直接 Exception

推荐：

```python
except ValueError
```

不推荐：

```python
except Exception
```

因为：

精准处理更安全。

---

## 2. Exception 放最后

因为它会捕获所有异常。

---

## 3. finally 常用于资源释放

例如：

```python
关闭文件
关闭数据库
关闭网络连接
```

---

## 4. 不要滥用异常

异常是：

“预案机制”。

不是：

“正常逻辑控制器”。

很多初学者：

```python
try:
    所有代码
except:
    啥也不管
```

最后：

程序看似没报错。

其实已经烂成废墟。
