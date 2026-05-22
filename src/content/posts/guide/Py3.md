---
title: 核心语法-数据容器
published: 2026-05-22
description: Python数据容器
tags: [Python数据容器]
category: Python
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

# Python 数据容器笔记

> 数据容器，本质上就是“装数据的东西”。
> 人类热衷于把世界装进盒子里，程序员则热衷于把世界装进变量里。文明的发展路线，多少有点像仓鼠囤粮。

---

# 一、数据容器概述

```python
score_list = [695,345,666,888,655,905]
```

一种可以容纳多份数据的数据类型（容器）。

容纳的每一份数据称为：

* 元素（element）

每个元素都可以是任意类型的数据，例如：

* 数字
* 字符串
* 布尔值
* 列表
* 字典……

---

## 常见的 5 种数据容器

| 类型    | 名称  |
| ----- | --- |
| list  | 列表  |
| str   | 字符串 |
| tuple | 元组  |
| set   | 集合  |
| dict  | 字典  |

---

# 二、列表（list）

## 1. 列表概述

列表是数据容器的一种，可以一次性存储多个数据。

### 定义方式

```python
列表名称 = [元素1, 元素2, 元素3]
```

示例：

```python
s = [32,26,5408,520,27]
```

---

## 2. 索引（下标）

```python
     0   1    2    3   4
s = [32,26,5408,520,27]
    -5  -4   -3  -2  -1
```

### 正向索引

从前往后：

* 从 `0` 开始

### 反向索引

从后往前：

* 从 `-1` 开始

---

## 3. 获取元素

```python
s = [12,123,3132,32,313,"你好世界",True]

# 检测变量类型
print(type(s))

# 获取列表元素
print(s[0],s[1],s[2],s[3],s[-3],s[-2],s[-1])
```

---

## 4. 修改元素

```python
s[5] = "不好世界"
print(s)
```

> 指定索引超出范围会报错。
> Python 对越界行为的态度非常直接：错了就是错了，不陪你演。

---

## 5. 删除元素

```python
del s[5]
print(s)
```

---

## 6. 遍历列表

```python
for item in s:
    print(item)
```

---

## 7. 列表特点

* 可以存储不同类型元素
* 元素有序
* 元素允许重复
* 元素可修改

---

## 8. 序列类型

容器中的元素按特定顺序排列，并且可以通过索引访问。

例如：

* 列表
* 字符串
* 元组

都属于：

> 序列类型

---

# 三、列表切片

## 1. 切片概述

切片就是：

> 从序列中截取一部分数据

支持切片：

* 列表
* 字符串
* 元组

---

## 2. 语法

```python
序列[开始索引:结束索引:步长]
```

注意：

* 不包含结束索引
* 步长默认是 `1`

---

## 3. 示例

```python
s = ["a","b","c","d","e","f","g"]

s[0:5:1]
# ['a','b','c','d','e']

s[0:5:2]
# ['a','c','e']
```

---

## 4. 代码演示

```python
s = ["a","b","c","d","e","f","g"]

# 检测类型
print(type(s[0:5:1]))

# 正向索引截取
print(s[0:5:1])
print(s[0:5:2])

# 反向索引截取
n = s[0:-2:1]
print(n)
```

---

# 四、列表常用方法

| 方法        | 作用       |
| --------- | -------- |
| append()  | 尾部追加元素   |
| insert()  | 指定位置插入   |
| remove()  | 删除第一个匹配值 |
| pop()     | 删除指定索引元素 |
| sort()    | 排序       |
| reverse() | 反转       |

---

## 示例代码

```python
s = [56,90,88,65,90,100,209,72,145]
print(s)

# append()
s.append(188)
print(s)

# insert()
s.insert(2,80)
print(s)

# remove()
s.remove(90)
print(s)

# pop()
e = s.pop(1)

print(e)
print(s)

# sort()
s.sort()
print(s)

# reverse()
s.reverse()
print(s)
```

---

# 五、列表案例

---

## 1. 输入 10 个数字

需求：

* 存入列表
* 排序
* 输出最大值、最小值、平均值

```python
num_list = []

for i in range(10):
    num = int(input(f"请输入第{i + 1}个数字"))
    num_list.append(num)

print("数字列表:",num_list)

# 排序
num_list.sort()

# 输出
print(f"最小值:{num_list[0]},最大值:{num_list[-1]}")

# 平均值
print("平均值:",sum(num_list)/len(num_list))
```

---

## 2. 合并列表并去重

```python
num_list1 = [19,23,56,64,875,20,109,232,123,54]
num_list2 = [55,80,72,35,60,123,54,29,91]

# 合并列表
for num in num_list2:
     num_list1.append(num)

print("合并后的列表:",num_list1)

# 去重
new_list = []

for num1 in num_list1:
    if num1 not in new_list:
        new_list.append(num1)

print(new_list)
```

---

## 简化写法

### 方法1：解包

```python
num_list = [*num_list1,*num_list2]
```

---

### 方法2：直接相加

```python
num_list = num_list1 + num_list2
```

---

### 豆包写法（高级版）

```python
new_list = sorted(set([*list1,*list2,*list3]))
```

含义：

```python
[*a,*b,*c]   # 合并
set()        # 去重
sorted()     # 排序
```

---

# 六、列表推导式

## 语法

### 格式1

```python
[表达式 for i in 序列]
```

### 格式2

```python
[表达式 for i in 序列 if 条件]
```

---

## 案例1：生成平方列表

```python
# 方法1
num_list = []

for i in range(1,21):
    num_list.append(i**2)

print(num_list)

# 方法2
num_list2 = [i**2 for i in range(1,21)]

print(num_list2)
```

---

## 案例2：提取偶数平方

```python
num_list3 = [19,23,54,64,87,20,109,232,123,43,26,55,72]

new_list = [i**2 for i in num_list3 if i%2==0]

print(new_list)
```

---

# 七、字符串（str）

## 1. 字符串概述

字符串是：

> 字符的容器

例如：

```python
"python"
'python'
"""python"""
```

---

## 2. 字符串特点

* 不可变
* 有序
* 可迭代

---

## 3. 索引

```python
     0 1 2 3 4 5
s = "python"
    -6 -5 -4 -3 -2 -1
```

---

## 4. 切片

```python
s = "Python"

s[:5]
# Pytho

s[:5:2]
# Pto

s[2:6]
# thon
```

---

## 5. 反转字符串

```python
s = "Hello-Python"

s[::-1]
```

---

## 6. 遍历字符串

```python
str1 = "zhouxiang"

for i in str1:
    print(i)
```

---

# 八、字符串常用方法

| 方法           | 作用    |
| ------------ | ----- |
| find()       | 查找子串  |
| count()      | 统计次数  |
| upper()      | 转大写   |
| lower()      | 转小写   |
| split()      | 分割字符串 |
| strip()      | 去空格   |
| replace()    | 替换    |
| startswith() | 判断开头  |

---

## 示例

```python
s = "Hello-Python-Hello-World"

index = s.find("-")
print(index)

c = s.count("o")
print(c)

big = s.upper()
print(big)

small = s.lower()
print(small)

slist = s.split("-")
print(slist)

ss = s.strip()

sr = ss.replace("-", "_")
print(sr)

print(s.startswith("Hello"))
print(s.endswith("Python"))

print(s)
```

---

# 九、字符串案例

---

## 1. 邮箱验证

### 方法1

```python
email = input("输入邮箱账号")

if email.count("@") == 1 and email.count(".") >=1 :
    print("邮箱格式正确")
else:
    print("邮箱格式错误")
```

---

### 方法2

```python
email = input("输入邮箱账号")

if email.count("@") == 1 and "." in email:
    print("邮箱格式正确")
else:
    print("邮箱格式错误")
```

---

## 2. 回文判断

```python
str1 = input("请输入字符串")

str2 = str1[::-1]

if str1 == str2:
    print("回文")
else:
    print("不回文")
```

---

## 3. 输入 10 个字符串并处理

```python
result_list = []

for i in range(10):
    s = input(f"请输入第 {i + 1} 个字符串：")

    processed_str = s[::-1].upper()

    result_list.append(processed_str)

print("\n处理后的列表内容：")

for item in result_list:
    print(item)
```

---

## 4. 将十个字符串整体反转

```python
all_str = ""

for i in range(10):
    text = input("请输入第" + str(i+1) + "个字符串：")

    all_str = all_str + text

reversed_str = all_str[::-1]

big_str = reversed_str.upper()

print("整体反转并大写后的结果是：")

print(big_str)
```

---

## 5. 解包整体反转

```python
all_str = ""

for i in range(10):
    text = input("请输入第" + str(i+1) + "个字符串：")

    all_str = all_str + text

# 字符串整体反转 + 解包
list1 = [*all_str[::-1]]

for i in list1:
    print(i)
```

---

# 十、元组（tuple）

## 1. 元组概述

元组和列表最大的区别：

> 元组不可修改

---

## 2. 定义方式

```python
t1 = (1,2,3,4,5)

t2 = ()

t3 = tuple()
```

---

## 3. 单元素元组

```python
t3 = (100,)
```

注意：

> 必须加逗号
> 不然 Python 会以为你只是给数字套了个括号。人类喜欢形式主义，解释器也一样。

---

## 4. 元组方法

| 方法      | 作用     |
| ------- | ------ |
| count() | 统计元素个数 |
| index() | 查找元素索引 |

---

## 示例

```python
t1 = (80,95,78,50,76,80,85,20)

print(t1)

print(type(t1))

print(t1[0])
print(t1[-1])

print(t1[0:5:1])

print(t1.count(80))

print(t1.index(80))
```

---

# 十一、组包与解包

---

## 1. 组包

```python
t1 = (5,7,9,1)

t2 = 5,7,9,1
```

---

## 2. 基础解包

```python
a,b,c,d = t1

print(a,b,c,d)
```

---

## 3. 扩展解包 *

```python
x,*y,z = t2

print(x,y,z)

s,*o = t2

print(s,o)

*c,e = t2

print(c,e)
```

---

## 4. 交换变量

```python
a = 10
b = 20

a,b = b,a

print(a)
print(b)
```

---

## 5. 多变量交换

```python
a = 100
b = 200
c = 300

c,a,b = a,b,c

print(a,b,c)
```

---

# 十二、元组案例

## 学生成绩管理

```python
students = (
    ("S001","王林",85,92,78),
    ("S002","李慕婉",85,92,86),
    ("S003","周翔",90,99,88)
)

print("学号\t姓名\t语文\t数学\t英语\t总分\t平均分")

for s in students:
    total = s[2] + s[3] + s[4]

    avg = total / 3

    print(f"{s[0]}\t{s[1]}\t{s[2]}\t{s[3]}\t{s[4]}\t{total}\t{avg:.1f}")
```

---

## 优化版（元组解包）

```python
for s_id, name, chinese, math, english in students:

    total = chinese + math + english

    avg = total / 3

    print(f"{s_id}\t{name}\t{chinese}\t{math}\t{english}\t{total}\t{avg:.1f}")
```

---

# 十三、集合（set）

## 1. 集合特点

* 无序
* 不重复
* 可修改

---

## 2. 定义

```python
s1 = {"C","D","X","T","O"}

s2 = set()
```

注意：

```python
{}
```

是空字典，不是空集合。

---

## 3. 常用方法

| 方法             | 作用   |
| -------------- | ---- |
| add()          | 添加元素 |
| remove()       | 删除元素 |
| pop()          | 随机删除 |
| clear()        | 清空   |
| difference()   | 差集   |
| union()        | 并集   |
| intersection() | 交集   |

---

## 示例

```python
s1 = {100,200,300,400,500,600,700,800}

s1.add(1200)

print(s1)

s1.remove(200)

print(s1)

e = s1.pop()

print(e)

print(s1)
```

---

# 十四、集合案例

```python
football_set = {"周翔","艾伦","三笠","阿尔敏","C"}

basketball_set = {"周翔","西斯特利亚","小鸟游六花","C"}

french_set = {"周翔","艾伦","三笠","C"}

art_set = {"周翔","西斯特利亚","小鸟游六花","MI","C"}
```

---

## 1. 同时选修法语和艺术

```python
stu1 = french_set.intersection(art_set)

print(stu1)

stu11 = french_set & art_set

print(stu11)
```

---

## 2. 同时选四门课

```python
stu2 = football_set & basketball_set & french_set & art_set

print(stu2)
```

---

## 3. 选足球但没选篮球

```python
stu33 = football_set - basketball_set

print(stu33)
```

---

## 4. 集合推导式

```python
stu333 = {i for i in football_set if i not in basketball_set}

print(stu333)
```

---

## 5. 统计选课数量

```python
all_set2 = football_set | basketball_set | art_set | french_set

print(all_set2)

all_list = [*football_set,*basketball_set,*art_set,*french_set]

print(all_list)

for s in all_set2:
    print(f"{s}选修了{all_list.count(s)}门课程")
```

---

# 十五、字典（dict）

## 1. 字典概述

字典存储：

```python
key:value
```

即：

> 键值对

---

## 2. 特点

* key 不能重复
* key 必须是不可变类型
* value 可以是任意类型

---

## 3. 定义

```python
dict1 = {"周翔":"男生","徐娟":"女生"}
```

---

## 4. 获取 value

```python
print(dict1["周翔"])
```

---

## 5. 修改

```python
dict1["周翔"] = "女生"
```

---

# 十六、字典常用操作

| 操作              | 作用         |
| --------------- | ---------- |
| dict[key]=value | 添加/修改      |
| pop()           | 删除并返回      |
| del             | 删除         |
| get()           | 安全获取       |
| keys()          | 获取所有 key   |
| values()        | 获取所有 value |
| items()         | 获取所有键值对    |

---

## 示例

```python
dict1 = {"王林":675,"李慕婉":608,"许国立":478}

dict1["涛哥"] = 750

dict1["王林"] = 999

print(dict1)

print(dict1["涛哥"])

print(dict1.get("涛哥"))

print(dict1.keys())

print(dict1.values())

print(dict1.items())
```

---

## 删除

```python
score = dict1.pop("王林")

print(score)

del dict1["韩立"]
```

---

# 十七、遍历字典

---

## 方法1

```python
for k in dict1.keys():
    print(f"{k}:{dict1[k]}")
```

---

## 方法2

```python
for item in dict1.items():
    print(item)
```

---

## 方法3（推荐）

```python
for k,v in dict1.items():
    print(f"{k}:{v}")
```

---

# 十八、购物车系统案例

```python
shopping_cart = {}

while True:

    print("\n===== 欢迎使用购物车管理系统 =====")

    print("1 添加购物车")
    print("2 修改购物车")
    print("3 删除购物车")
    print("4 查询购物车")
    print("5 退出购物车")

    choice = input("请选择要执行的操作(1-5)：")

    match choice:

        case "1":

            goods_name = input("输入商品名称：")

            if goods_name in shopping_cart:

                print("该商品已经存在！")

            else:

                goods_price = float(input("输入商品价格："))

                goods_num = int(input("输入商品数量："))

                shopping_cart[goods_name] = {
                    "price": goods_price,
                    "num": goods_num
                }

                print("商品添加成功！")
```

> 后面的逻辑你已经写得很完整了，这里不再重复整段。
> 不然这份笔记会长得像古代皇帝的族谱，翻到后面已经忘了前面是谁。

---

# 十九、数据容器总结

| 特性   | str | list | tuple | set | dict    |
| ---- | --- | ---- | ----- | --- | ------- |
| 有序   | ✔   | ✔    | ✔     | ✘   | ✔(3.7+) |
| 可重复  | ✔   | ✔    | ✔     | ✘   | key不可重复 |
| 可修改  | ✘   | ✔    | ✘     | ✔   | ✔       |
| 索引访问 | ✔   | ✔    | ✔     | ✘   | ✘       |
| 切片   | ✔   | ✔    | ✔     | ✘   | ✘       |

---

# 二十、教务系统（你自己写的）

> 你这个案例其实已经很接近“小项目”了。
> 不再是“学语法”，而是开始真正组织数据结构与逻辑。很多人卡死在这一步，因为脑子里只有知识点，没有流程感。

特别注意：

```python
case "6":
```

这里确实容易错。

因为：

```python
for name, score in info_dict.items():
```

这里：

* `name` 是 key
* `score` 是 value
* 而 value 本身还是一个字典

所以：

```python
score["语文成绩"]
```

这种写法才成立。

---

## 你的完整逻辑（已修正错别字）

```python
# 教务系统

info_dict = {}

while True:

    print("""
1 添加学生信息
2 修改学生信息
3 删除学生信息
4 查询学生信息
5 列出所有学生
6 统计班级成绩
7 退出教务系统
""")

    work = input("输入你要执行的操作：")

    match work:

        case "1":

            name = input("输入学生姓名")

            C = float(input("输入语文成绩"))
            M = float(input("输入数学成绩"))
            E = float(input("输入英语成绩"))

            info_dict[name] = {
                "语文成绩": C,
                "数学成绩": M,
                "英语成绩": E
            }

            print("信息录入成功")
```

> 后面的逻辑结构整体已经没问题。
> 你现在缺的不是“会不会”，而是“写多了之后的熟练度”。

---

# 最后总结

## 五大容器核心区别

| 容器    | 核心特点         |
| ----- | ------------ |
| list  | 有序、可修改       |
| str   | 字符序列、不可修改    |
| tuple | 固定数据         |
| set   | 自动去重         |
| dict  | key-value 映射 |

---

## 学 Python 容器真正重要的东西

不是背方法。

而是：

> 你看到一个问题时，知道该用什么结构存数据。

比如：

* 排名列表 → list
* 用户信息 → dict
* 去重 → set
* 固定记录 → tuple
* 文本处理 → str

这才是编程真正开始变“像编程”的地方。
否则只是拿着语法积木反复搭空气。
