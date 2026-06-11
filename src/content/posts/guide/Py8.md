---
title: 核心语法-异常
published: 2026-05-22
description: Python异常
tags: [Python异常,学习]
category: Python
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

## 介绍

异常（也称为Bug）就是程序运行过程中出现的错误，它会中断程序的正常执行流程。

### 作用

- 保证数据、逻辑的正确性，避免程序执行混乱
- 在开发阶段，尽量发现更多的问题，尽早解决问题，保障程序的正常执行

> 异常不是坏东西，而是编写健壮程序的重要工具。

---

## 异常处理

- **不做处理**：整个程序因为一个Bug中断执行（之前编写的程序）
- **捕获处理**：按照我们自己的处理方式，处理完异常，程序继续执行（编写程序时，做好预案，出现异常按预案处理）。当程序运行出现异常，提供预案，处理异常，而不是让其中止程序运行。

### 捕获异常语法

```python
try:
    可能出现异常的业务代码1
    可能出现异常的业务代码2
    ...
except [异常类型 as 变量名]:   # 变量名获取异常的信息
    出现异常时的预案
finally:
    不管是否出现异常，都会执行的代码
```

```python
# 异常处理
try:
    print("________")
    # print(my_name)
    # print(1/0)
    # print("ABC"[10])
    # print("ABC".hello)
    print("________")
# 捕获具体的异常
# 从上到下一个一个匹配异常，匹配不到报错
except NameError as e:      # 捕获的是NameError类型的异常，e是异常信息
    print("名字不存在，请检查变量或函数的名字，异常信息:", e)
except ZeroDivisionError as e:
    print("0不能做除数", e)
except IndexError as e:
    print("索引错误", e)
except Exception as e:      # 捕获所有的异常
    print("程序运行出错", e)
# 无论程序是否正常运行，finally代码块里的代码都会执行
finally:
    print("资源释放")
```

---

## 异常的传递

异常传递就是异常在函数调用中层层上报的过程，直到有人处理它，或者程序崩溃。

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

"""
运行：
fun1()打印 "fun1 run"
调用 fun2()打印 "fun2 run"
调用 fun3()打印 "fun3 run"
执行 print(my_color) → 报错（未定义变量）
"""
```

---

## 完整案例：学生成绩管理系统（带异常处理）

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
        # 与for平级写，遍历一轮未进入if语句，直接输出print()
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
    # 在run方法捕获异常，因为程序运行会调用run方法
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
            try:
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
            except ValueError as e:
                print("数据有问题，请重新输入，错误信息", e)
            except Exception as e:
                print("程序出错了，请重新输入，错误信息", e)


# 测试
if __name__ == "__main__":
    # 创建教务系统实例对象
    edu_management = EduManagement()
    edu_management.run()
```

---

## 关键点总结

| 概念 | 说明 |
|------|------|
| 异常（Bug） | 程序运行过程中出现的错误，会中断正常执行流程 |
| `try-except` | 捕获并处理异常的语法结构 |
| `Exception` | 所有异常的基类，可以捕获所有类型的异常 |
| `finally` | 无论是否发生异常都会执行的代码块 |
| 异常传递 | 异常在函数调用链中层层上报的过程 |
| `ValueError` | 数值转换错误（如字符串转整数失败） |
| `NameError` | 变量名未定义错误 |
| `ZeroDivisionError` | 除零错误 |
| `IndexError` | 索引越界错误 |