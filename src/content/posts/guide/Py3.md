---
title: 核心语法-数据容器
published: 2026-05-22
description: Python数据容器
tags: [Python数据容器,学习]
category: Python
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

## 概述

`score_list = [695,,345,666,888,655,905,......]`

一种可以容纳多份数据的数据类型（容器），容纳的每一份数据称为1个元素。每一个元素可以是任意类型的数据，如字符串、数字、布尔等。

常见的5种数据容器：**列表(list)**、**字符串(str)**、**元组(tuple)**、**集合(set)**、**字典(dict)**

---

## 列表(list) — 概述

列表是数据容器的一种，是一次性可以存储多个数据（元素）的。

**定义**：`列表名称 = [元素1, 元素2, 元素3, 元素4, 元素5, ......]`

```
     0  1  2    3   4   正向索引        下标 索引               
s = [32,26,5408,520,27]
     -5 -4  -3  -2   -1 反向索引
```

获取第一个元素：`s[0]`或`s[-5]`

```python
s = [12,123,3132,32,313,"你好世界",True] 

# 检测变量类型
print(type(s))  

# 获取列表元素  正向索引        反向索引  
print(s[0],s[1],s[2],s[3],s[-3],s[-2],s[-1])  

# 修改列表中的指定元素（指定的索引超出范围会报错）
s[5] = "不好世界"  
print(s)  

# 删除列表中的指定元素  
del s[5]  
print(s)  

# 遍历列表  
for item in s:  
    print(item)
```

**列表特点：**
- 可以存储不同类型的元素
- 元素有序，可以重复
- 元素可以修改
- 从前向后（正向索引）下标从0开始
- 从后向前（反向索引）下标从-1开始

**序列类型**：容器中的元素按特定顺序排列的，可通过索引访问的容器类型称之为序列。

---

## 列表(list) — 切片

**介绍**：切片是指对操作的数据截取其中一部分的操作。列表、字符串、元组都支持切片操作。

**语法**：`序列数据[开始索引:结束索引:步长]`

> 不包含结束索引位置对应的元素。开始索引未指定默认为0；结束索引未指定默认为列表长度(len(s))（直到列表末尾）；步长未指定默认为1。

索引采用正向、反向索引都可以。步长选取间隔，默认步长为1。

```python
s = ["a","b","c","d","e","f","g"]  

# s[0:5:1] 切片后的结果为 ["a","b","c","d","e"]  
# s[0:5:2] 切片后的结果为 ["a","c","e"]

# 检测类型  
print(type(s[0:5:1]))  

# 正向索引截取  
print(s[0:5:1])    # 简化 s[:5:] => s[:5]
print(s[0:5:2]) 

# 反向索引截取  
n = s[0:-2:1]  
print(n)
```

---

## 列表(list) — 常用方法

方法就像是物品具备的能力和功能。手机是对象，打电话就是方法。

列表的常见方法就是指列表这种数据类型内置的常见功能（添加元素、删除元素、排序等）。

| 方法 | 作用 | 样例 |
|------|------|------|
| append() | 在列表的尾部追加元素 | `s.append(10086)` |
| insert() | 在指定索引之前插入该元素 | `s.insert(0,92)` |
| remove() | 移除列表中第一个匹配到的值 | `s.remove(75)` |
| pop() | 删除列表中指定索引位置的元素（未指定索引默认删除最后一个） | `s.pop(2)` / `s.pop()` |
| sort() | 对列表进行排序（列表元素的数据类型一致才可以进行排序） | `s.sort()` |
| reverse() | 反转列表元素 | `s.reverse()` |

```python
s = [56,90,88,65,90,100,209,72,145]  
print(s)  

# append() 在列表尾部追加元素  
s.append(188)  
print(s)  

# insert() 在指定索引之前插入元素  
s.insert(2,80)  
print(s)  

# remove() 移除列表中第一个匹配到的元素  
s.remove(90)   # 移除第一个90
print(s)  

# pop() 删除列表中指定索引位置的元素并返回（如果未指定删除最后一个）
e = s.pop(1)  
print(e)       # 返回被删除的元素  
print(s)  

# sort() 排序（从小到大）
s.sort()  
print(s)  

# reverse() 反转列表元素  
s.reverse()  
print(s)
```

---

## 列表(list) — 案例

- `min()`：获取最小值
- `max()`：获取最大值
- `sum()`：求和
- `len()`：获取元素的个数
- `in`：判断元素是否存在于列表中，加`not`判断元素是否不存在于列表中，返回布尔值
- `*`（解包）：将列表这一容器解开成一个一个独立的个体
- 组包：将多个值合并到一个容器

**列表推导式**：按照一定的规则快速生成一个列表的方法

语法格式：
- 格式1：`[要插入的值 for i in 序列/列表]`
- 格式2：`[要插入的值 for i in 序列/列表 if 条件]`

```python
[其他写法]
new_list = sorted(set([*list1,*list2,*list3]))
[*a,*b,*c]  # 合并
set()       # 去重
sorted()    # 排序，自带把内容转成列表的功能

new_list = list(set(list1 + list2 + list3))  # 去重 + 转成列表[]
```

```python
"""  
用户输入10个数字，存储到列表中，进行排序，输出最大值、最小值和平均值  
"""  

# 定义列表  
num_list = []  

# 用户输入  
for i in range(10):  
    num = int(input(f"请输入第{i + 1}个数字"))  
    num_list.append(num)  
print("数字列表:", num_list)  

# 排序  
num_list.sort()  

# 输出  
print(f"最小值:{num_list[0]}, 最大值:{num_list[-1]}")  

# sum()求和，len()获取元素个数（列表的长度）
print("平均值:", sum(num_list) / len(num_list))
```

```python
"""  
合并两个列表中的元素，对合并的结果进行去重（去除列表中的重复元素）  
"""  
num_list1 = [19,23,56,64,875,20,109,232,123,54]  
num_list2 = [55,80,72,35,60,123,54,29,91]  

# 合并列表  
for num in num_list2:  
    num_list1.append(num)  
print("合并后的列表:", num_list1)  

# 去重重复记录  
new_list = []   # 去重重复记录后的列表  

for num1 in num_list1:  
    # 判断new_list是否存在num元素，不存在再添加  
    if num1 not in new_list:  
        new_list.append(num1)  
print(new_list)

# 简化合并列表
# 方法1：*(解包) 将列表这一容器解开成一个一个独立的个体
num_list = [*num_list1, *num_list2]

# 方法2：直接相加
num_list = num_list1 + num_list2
```

```python
"""  
1. 生成1到20的平方列表  
2. 从如下数字列表中提取所有偶数，并计算其平方，组成一个新的列表  
   num_list = [19,23,54,64,87,20,109,232,123,43,26,55,72]
"""  

# 1. 
num_list = []  
# 方法1  
for i in range(1,21):  
    num_list.append(i**2)  
print(num_list)  

# 方法2：[要插入的值 for i in 序列/列表] 要插入的值后面是for循环  
num_list2 = [i**2 for i in range(1,21)]  
print(num_list2)  

# 2. 
num_list3 = [19,23,54,64,87,20,109,232,123,43,26,55,72]  

# [要插入的值 for i in 序列/列表 if 条件]  
new_list = [i**2 for i in num_list3 if i % 2 == 0]  
print(new_list)
```

---

## 字符串(str) — 基本操作

字符串是字符的容器，一个字符串中可以存放任意数量的字符，如`"python"`、`'python'`、`"""python"""`。

**特点**：不可变性（无法修改）、有序性、可迭代性。

字符串中的每一个字符元素都有其对应的下标（索引），通过元素对应的索引就可以获取到对应的元素。索引与列表(list)一样：

```
     0  1  2  3  4  5
s = "p  y  t  h  o  n"
    -6 -5 -4 -3 -2 -1
```

从前向后（正向索引）下标从0开始，从后向前（反向索引）下标从-1开始。

获取元素：`s[0]`或`s[-6]`

**切片操作**（与列表(list)一样）：
`序列对象[开始索引:结束索引:步长]`

```python
s = "Python"
# s[0:5:1] 切片后为 "Pytho"  s[:5]
# s[0:5:2] 切片后为 "Pto"    s[:5:2]
# s[2:6:1] 切片后为 "thon"   s[6::1]或s[6:]（省略结束索引，默认到最后）

# 步长正数：从前向后截取；步长负数：从后向前截取
s = "Hello-Python"
# s[-1:-7:-1] 切片后为 "nohtyP"（反转字符串）
# s[::-1] 反转整个字符串

str = "zhouxiang"
# 遍历
for i in str:
    print(i)
```

---

## 字符串(str) — 常用方法

| 方法 | 作用 | 样例 |
|------|------|------|
| find() | 在字符串中查找子串，返回第一次出现的索引位置，找不到返回-1 | `s.find('Python')` |
| count() | 统计子串在字符串中出现的次数 | `s.count('H')` |
| upper() | 将字符串中的所有字母转换为大写 | `s.upper()` |
| lower() | 将字符串中的所有字母转换为小写 | `s.lower()` |
| split() | 将字符串按指定分隔符分割成列表 | `s.split(' ')` |
| strip() | 去除字符串两端的空白字符或指定字符 | `s.strip()` / `s.strip('*')` |
| replace() | 将字符串中的指定子串替换为新的子串 | `s.replace('H','C')` |
| startswith() | 检测字符串是否以指定子串开头，返回布尔值 | `s.startswith('P')` |

```python
s = "Hello-Python-Hello-World"  

index = s.find("-")  
print(index)   # '-'第一次出现于索引5，输出5  

c = s.count("o")  
print(c)       # 'o'在字符串中出现4次  

# 转化为大写或小写，不会改变原字符串  
big = s.upper()  
print(big)  

small = s.lower()  
print(small)  

slist = s.split("-")  
print(slist)   # 按照'-'切割字符串（'-'字符被拿掉），切割后的多个字符串被封装到列表中  

ss = s.strip()    # 去除字符串两端空格  
sr = ss.replace("-", "_")   # 用'_'替代'-'  
print(sr)  

# startswith() / endswith() 判断是否以指定的字符串开头/结尾，返回布尔值  
print(s.startswith("Hello"))   # True  
print(s.endswith("Python"))    # False  

print(s)   # 一系列操作后，原始的字符串没有改变（不可变性）
```

---

## 字符串(str) — 案例

```python
"""  
邮箱格式验证：包含一个@和至少一个.  
如果输入正确则输出"邮箱格式正确"，反之输出"邮箱格式错误"  
"""  

# 方法1
email = input("输入邮箱账号")  

if email.count("@") == 1 and email.count(".") >= 1:  
    print("邮箱格式正确")  
else:  
    print("邮箱格式错误")

# 方法2：in运算符，判断子串是否存在于字符串中，存在返回True，否则返回False
email = input("输入邮箱账号")  

if email.count("@") == 1 and "." in email:  
    print("邮箱格式正确")  
else:  
    print("邮箱格式错误")
```

```python
"""  
判断字符串是否回文  
"""  
str1 = input("请输入字符串")  
str2 = str1[::-1]    # 反转字符串

if str1 == str2:  
    print("回文")  
else:  
    print("不回文")
```

```python
"""  
将用户输入的10个字符串，反转后全部转换为大写，  
然后记录在列表中，最后将列表内容遍历输出出来。  
"""  
# 定义空列表，用于存储处理后的字符串  
result_list = []  

# 循环10次，接收用户输入  
for i in range(10):  
    # 接收用户输入的字符串  
    s = input(f"请输入第 {i + 1} 个字符串：")  

    # 反转字符串并转换为大写  
    processed_str = s[::-1].upper()  

    # 将处理后的字符串添加到列表中  
    result_list.append(processed_str)  

# 遍历输出列表中的所有内容  
print("\n处理后的列表内容：")  
for item in result_list:  
    print(item)

# 将这十个字符串整体反转

# 1. 先准备一个空的字符串，用来装10个输入  
all_str = ""  

# 2. 循环10次，让用户输入10个字符串  
for i in range(10):  
    # 提示用户输入第几个字符串  
    text = input("请输入第" + str(i+1) + "个字符串：")  
    # 把用户输入的字符串，拼到all_str里  
    all_str = all_str + text  

# 3. 把拼好的一长串字符串，整体反转  
reversed_str = all_str[::-1]  

# 4. 把反转后的字符串，全部转成大写  
big_str = reversed_str.upper()  

# 5. 输出最终结果  
print("整体反转并大写后的结果是：")  
print(big_str)

# 解包*整体反转

# 空字符串  
all_str = ""  

# 输入10个  
for i in range(10):  
    text = input("请输入第" + str(i+1) + "个字符串：")  
    all_str = all_str + text  

# 字符串整体反转 + 解包* 生成反转列表  
list1 = [*all_str[::-1]]  

# 逐个打印  
for i in list1:  
    print(i)
```

---

## 元组(tuple) — 基本操作

元组(tuple)与列表最大的不同点：元组一旦定义完成，不可修改。

元组是不可变的序列，类似于列表，但创建后不能修改。
- 可以存储不同类型的元素
- 元素可以重复、有序
- 不可以修改（支持索引访问、切片）

**定义**：`元组名称 = (元素1, 元素2, ...)`

定义空元组：
- `元组名称 = ()`
- `元组名称 = tuple()`

```python
# 定义元组
t1 = (1,2,3,4,5,6,7,8,9)

# 定义空元组
t2 = ()
t3 = tuple()

t1 = (80,95,78,50,76,80,85,20)  

print(t1)  
print(type(t1))  

# 索引访问  
print(t1[0])  
print(t1[-1])  

# 切片  
print(t1[0:5:1])  

# count()：统计某元素在元组中出现的次数
print(t1.count(80))  

# index()：查找某个元素在元组中的索引位置（第一次出现的位置）
print(t1.index(80))

# 注意点  
t2 = ()  
print(t2)  
print(type(t2))  

# 定义单个元素的元组，单个元素之后需要加逗号  
t3 = (100,)  
print(t3)
```

---

## 元组(tuple) — 组包与解包

**组包(Packing)**：将多个值合并到一个容器（元组、列表）中

**解包(Unpacking)**：将容器（元组、列表）解开成单独的元素，分别赋值给多个变量

```python
# 定义元组（组包）
t1 = (5,7,9,1)
t2 = 5,7,9,1

# 基础解包
a,b,c,d = t1
print(a,b,c,d)   # a对应5，b对应7，c对应9，d对应1

# (*)扩展解包
"""  
在元组解包时，*表示收集剩余的所有元素  
允许我们处理不确定数量的元素（生成列表，以便于进行进一步的处理）  
"""  
x,*y,z = t2      # x为5，y为[7,9]，z为1
print(x,y,z)  
s,*o = t2        # s为5，o为[7,9,1]
print(s,o)  
*c,e = t2        # c为[5,7,9]，e为1
print(c,e)
```

```python
# 组包  
t1 = (5,7,9,10,2,23,12)  
t2 = 5,7,9,10,2,23,12  

# 解包操作  
# 基础解包操作（变量数量与容器的元素个数一致）
a,b,c,d,e,f,g = t1  
print(a,b,c,d,e,f,g)  

# *扩展解包（收集剩余的所有元素，封装到列表list中）
first,second,*other,last = t1  
print(first,second,last)  
print(other)  

*other,last1,last2 = t2  
print(last1,last2)  
print(other)
```

```python
# 现在有两个变量 a = 10, b = 20，交换变量值  
a = 10  
b = 20  

# 组包: t = b,a
# 解包: a,b = t
# 合并
a,b = b,a  
print(a)  
print(b)

# 现在有三个变量 a=100, b=200, c=300，将a,b,c分别赋值给c,a,b  
a = 100  
b = 200  
c = 300  
# 解包与组包
c,a,b = a,b,c  
print(a,b,c)
```

---

## 元组(tuple) — 案例

```python
"""  
根据提供的学生成绩单，完成如下需求  
1. 计算学生的总分、各科平均分，输出  
2. 统计各科成绩的最低分、最高分、平均分，输出  
3. 查找成绩优秀（平均分大于90）的学生，输出  
"""  

# 元组套元组存储信息  
students = (  
    ("S001","王林",85,92,78),  
    ("S002","李慕婉",85,92,86),  
    ("S003","ZX",90,99,88)  
)  

# 1. 计算学生的总分、各科平均分，输出  
print("学号\t\t姓名\t\t语文\t\t数学\t\t英语\t\t总分\t\t平均分")  
for s in students:  
    total = s[2] + s[3] + s[4]  
    avg = total / 3  
    print(f"{s[0]}\t {s[1]}\t {s[2]}\t\t {s[3]}\t\t{s[4]}\t\t {total}\t{avg:.1f}")  
print()   # 输出空行分割  

# 2. 统计各科成绩的最低分、最高分、平均分  
# 获取各科的成绩列表（列表推导式）
chinese_scores = [s[2] for s in students]  
math_scores = [s[3] for s in students]  
english_scores = [s[4] for s in students]  
print(f"语文最低分{min(chinese_scores)},最高分{max(chinese_scores)},平均分{sum(chinese_scores)/len(chinese_scores)}")  
print()   # 输出空行分割

# 3. 查找成绩优秀（平均分大于90）的学生，输出  
for s in students:  
    total = s[2] + s[3] + s[4]  
    avg = total / 3  
    if avg > 90:  
        print(f"最优秀的姓名{s[1]}")
```

**上个案例的优化（用元组解包）**

```python
# 元组套元组存储信息  
students = (  
    ("S001", "王林", 85, 92, 78),  
    ("S002", "李慕婉", 85, 92, 86),  
    ("S003", "ZX", 90, 99, 88)  
)  

# 1. 计算学生的总分、各科平均分，输出  
print("学号\t\t姓名\t\t语文\t\t数学\t\t英语\t\t总分\t\t平均分")  

# 用元组解包（因为循环抽取的是一个又一个元组，所以可以解包）
for s_id, name, chinese, math, english in students:  
    total = chinese + math + english  
    avg = total / 3  
    print(f"{s_id}\t{name}\t{chinese}\t{math}\t\t{english}\t\t{total}\t\t{avg:.1f}")

print()  # 输出空行分割  

# 2. 统计各科成绩的最低分、最高分、平均分  
chinese_scores = [s[2] for s in students]  
math_scores = [s[3] for s in students]  
english_scores = [s[4] for s in students]  
print(f"语文最低分{min(chinese_scores)},最高分{max(chinese_scores)},平均分{sum(chinese_scores) / len(chinese_scores):.2f}")  
print()  # 输出空行分割  

# 3. 查找成绩优秀（平均分大于90）的学生，输出  

# 用元组解包  
for *other, chinese, math, english in students:  
    total = chinese + math + english  
    avg = total / 3  
    if avg > 90:  
        print(f"最优秀的是{other}")
```

---

## 集合(set) — 基本操作

集合(set)可以自动去重，存储不重复的元素。

集合(set)是一种**无序的、不可重复的、可修改**的数据容器。

**定义集合**：`s1 = {"C","D","X","T","O"}`

**定义空集合**：`s2 = set()`（空集合的定义不能使用`{}`，`{}`表示的是空字典）

由于集合是无序的，因此是不支持下标索引访问的。

```python
s1 = {1,123,2,3,21,3,2443,33,433,3}  
print(s1)  
print(type(s1))  

s2 = set()  
print(s2)  
print(type(s2))
```

| 操作 | 含义 | 样例 |
|------|------|------|
| add() | 添加元素到集合中 | `s1.add('t')` |
| remove() | 移除集合中的指定元素（指定元素不存在将报错） | `s1.remove('t')` |
| pop() | 随机删除集合中的元素并返回 | `e = s1.pop()` |
| clear() | 清空集合 | `s1.clear()` |
| difference() | 求取两个集合的差集（包含在第一个集合但不包含在第二个集合的元素） | `s1.difference(s2)` |
| union() | 求取两个集合的并集 | `s1.union(s2)` |
| intersection() | 求取两个集合的交集 | `s1.intersection(s2)` |

```python
s1 = {100,200,300,400,500,600,700,800}  
s1.add(1200)  
print(s1)  

# remove() 移除集合中的指定元素，元素不存在会报错  
s1.remove(200)  
print(s1)  

# pop() 随机删除集合中的元素并返回  
e = s1.pop()  
print(e)  
print(s1)  

# clear() 清空集合  
s1.clear()  
print(s1)  

s2 = {1,2,3,4,5,7,10}  
s3 = {1,2,3,4,5,6,7,8,9}  

# difference() 求取两个集合的差集（存在于第一个集合，但不存在于第二个集合）
print(s2.difference(s3))  

# union() 求取两个集合的并集  
print(s2.union(s3))  

# intersection() 求取两个集合的交集  
print(s2.intersection(s3))
```

---

## 集合(set) — 案例

- `&`：交集
- `|`：并集
- `-`：差集

**集合推导式**：
- `变量名称 = {i表达式 for i in 列表}`
- `变量名称 = {i表达式 for i in 列表 if 条件}`

```python
"""  
根据提供的班级同学的选课情况，完成下面需求  
"""  
football_set = {"ZX","艾伦","三笠","阿尔敏","C"}  
basketball_set = {"ZX","西斯特利亚","小鸟游六花","C"}  
french_set = {"ZX","艾伦","三笠","C"}  
art_set = {"ZX","西斯特利亚","小鸟游六花","MI","C"}  

# 找出同时选修了法语和艺术的学生  
# 方法1  
stu1 = french_set.intersection(art_set)  
print(stu1)  
# 方法2 &（与）运算符  
stu11 = french_set & art_set  
print(stu11)  

# 找出同时选修四门课程的学生  
stu2 = football_set.intersection(basketball_set, french_set, art_set)  
print(stu2)  
stu22 = football_set & basketball_set & french_set & art_set  
print(stu22)  

# 找出选修了足球但没有选修篮球的学生  
# 方法1  
stu3 = football_set.difference(basketball_set)  
print(stu3)  
# 方法2 -号运算符求差集  
stu33 = football_set - basketball_set  
print(stu33)  

# 方法3：集合推导式，快速构建集合() 语法 {要在集合中添加的元素 for s in set1 if 条件}
stu333 = {i for i in football_set if i not in basketball_set}  
print(stu333)  

# 统计每一个学生选修的课程数量  
# 1. 获取学生名单  
# 方法1  
all_set1 = football_set.union(basketball_set).union(art_set).union(football_set)  
print(all_set1)  
# 方法2 并集（|）
all_set2 = football_set | basketball_set | art_set | french_set  
print(all_set2)  

# 2. 获取每一个学生选修的课程数量  
# 把所有数据解包封装进集合（可以去重）
all_list = [*football_set, *basketball_set, *art_set, *french_set]  
print(all_list)  

for s in all_set1:   # 列表中的count()
    print(f"{s}选修了{all_list.count(s)}门课程")
```

---

## 字典(dict) — 介绍

字典(dict)里面存储的是**键值对(key:value)**类型的数据，可以根据key找到对应的value。

- 键值对(key:value)存储
- 键(key)不能重复
- 可修改
- 字典(dict)中的value可以是任意类型的数据，而key不能为可变类型（如列表list、集合set、字典dict）

**定义字典**（key不能重复，后面的值会覆盖前面的值，key必须是不可变类型：str、int、float、tuple）：
`字典名称 = {key:value, key:value, key:value, ...}`

**定义空字典**：
- `字典名称 = {}`
- `字典名称 = dict()`

**根据key获取value**（字典没有索引下标，不能根据索引获取值，只可以根据key获取value）：
`值 = 字典名称[key]`

```python
dict1 = {"ZX": "男生", "徐娟": "女生"}  
# 修改字典
dict1["ZX"] = "女生"  
print(dict1["ZX"])

# 定义字典  
dict1 = {"王林":675, "李慕婉":608, "许国立":478}  
# 定义空字典  
dict2 = {}  
dict3 = dict()  

# 根据key获取value  
score = dict1["王林"]  
print(score)

# 修改
dict1["李慕婉"] = 750
```

---

## 字典(dict) — 常用操作

| 操作 | 含义 | 样例 |
|------|------|------|
| `字典名称[key] = value` | 往字典中添加key-value键值对 | `dict1["涛哥"] = 688` |
| `字典名称.pop(key)` | 删除字典中指定的key，并返回该key对应的value | `score = dict1.pop("涛哥")` |
| `del 字典名称[key]` | 删除字典中指定的键值对 | `del dict1["涛哥"]` |
| `字典名称[key] = value` | 修改字典中指定的key对应的值 | `dict1["小智"] = 658` |
| `字典名称[key]` | 根据key获取value | `dict1["涛哥"]` |
| `字典名称.get(key)` | 根据key获取value | `dict1.get("涛哥")` |
| `字典名称.keys()` | 获取所有的key | `dict1.keys()` |
| `字典名称.values()` | 获取所有的value | `dict1.values()` |
| `字典名称.items()` | 获取所有的key-value键值对 | `dict1.items()` |

```python
# 2. 增加元素：key不存在 = 新增  
dict1["涛哥"] = 750  

# 3. 修改元素：key已存在 = 覆盖修改  
dict1["王林"] = 999  

# 打印当前字典  
print(dict1)  
# 结果：{'王林': 999, '李慕婉': 688, '徐国立': 580, '韩立': 545, '涛哥': 750}  

# ------------------- 查询 -------------------
# 根据key查value（两种方法）
print(dict1["涛哥"])        # 方法1：直接取值，key不存在会报错  
print(dict1.get("涛哥"))    # 方法2：安全获取，key不存在返回None，不报错  

# 获取所有键(key)
print(dict1.keys())  
# 结果：dict_keys(['王林', '李慕婉', '徐国立', '韩立', '涛哥'])  

# 获取所有值(value)
print(dict1.values())  
# 结果：dict_values([999, 688, 580, 545, 750])  

# 获取所有键值对(key:value)
print(dict1.items())  
# 结果：dict_items([('王林', 999), ('李慕婉', 688), ('徐国立', 580), ('韩立', 545), ('涛哥', 750)])  

# ------------------- 删除 -------------------
# pop() 删除指定key，并返回被删除的值  
score = dict1.pop("王林")  
print(score)    # 输出：999  
print(dict1)    # 王林已被删除  

# del 直接删除指定key，不返回值  
del dict1["韩立"]  
print(dict1)    # 韩立已被删除
```

```python
# 遍历字典  
# 方法1：用keys()获取所有key，遍历所有key，用字典名称[key]获取value  
for k in dict1.keys():  
    print(f"{k}:{dict1[k]}")  

# 方法2  
for item in dict1.items():  
    print(item)  
"""  
上面的循环运行后，遍历出元组  
('王林', 999)  
('李慕婉', 688)  
...  
"""  
for item in dict1.items():  
    print(f"{item[0]}:{item[1]}")  

# 方法3：解包操作
for k, v in dict1.items():  
    print(f"{k}:{v}")
```

---

## 字典(dict) — 案例

```python
"""  
开发一个购物车管理系统，实现商品信息的添加、修改、删除、查询功能  
系统使用字典结构存储商品的数据  
结构 shopping_cart = {"mate_80":{"price":6999,"num":2}, "鼠标":{...}}  
"""  
shopping_cart = {}  

while True:  
    # 制作菜单  
    print("\n===== 欢迎使用购物车管理系统 =====")  
    print("1 添加购物车")  
    print("2 修改购物车")  
    print("3 删除购物车")  
    print("4 查询购物车")  
    print("5 退出购物车")  

    choice = input("请选择要执行的操作(1-5)：")  

    match choice:  
        case "1":   # 添加购物车  
            goods_name = input("输入商品名称：")  
            # 商品存在 → 提示，不添加  
            if goods_name in shopping_cart:  
                print("该商品已经存在！")  
            else:  
                goods_price = float(input("输入商品价格："))  
                goods_num = int(input("输入商品数量："))  
                shopping_cart[goods_name] = {"price": goods_price, "num": goods_num}  
                print("商品添加成功！")  

        case "2":   # 修改购物车  
            goods_name = input("输入要修改的商品名称：")  
            if goods_name not in shopping_cart:  
                print("商品不存在！")  
                continue  
            goods_price = float(input("输入新的商品价格："))  
            goods_num = int(input("输入新的商品数量："))  
            shopping_cart[goods_name] = {"price": goods_price, "num": goods_num}  
            print("商品修改完成！")  

        case "3":   # 删除购物车  
            goods_name = input("输入要删除的商品名称：")  
            if goods_name not in shopping_cart:  
                print("商品不存在！")  
            else:  
                del shopping_cart[goods_name]  
                print("删除完毕！")  

        case "4":   # 查询购物车  
            print("\n----- 购物车列表 -----")  
            for goods_name in shopping_cart.keys():  
                goods_info = shopping_cart[goods_name]  
                print(f"商品名称：{goods_name}，价格：{goods_info['price']}，数量：{goods_info['num']}")  

        case "5":   # 退出购物车  
            print("再见！")  
            break  

        case _:     # 匹配其他所有情况  
            print("非法操作！")
```

**自己写的简化版：**

```python
print("欢迎来到KM购物系统")  
print("1添加购物车")  
print("2修改购物车")  
print("3删除购物车")  
print("4查询购物车")  
print("5退出购物车")  
shopping = {}  

while True:  
    user_work = input("输入你要执行的操作：")  
    match user_work:  
        case "1":   # 添加购物车  
            name = input("输入商品名称：")  
            price = float(input("输入商品价格："))  
            num = int(input("输入商品数量："))  
            if name in shopping:  
                print("该商品已经存在！")  
            else:  
                shopping[name] = {"price": price, "num": num}  
                print("添加成功！")  

        case "2":   # 修改购物车  
            name = input("输入要修改的商品名称：")  
            if name not in shopping:  
                print("你输入的商品不存在！")  
                continue  
            price = float(input("输入商品价格："))  
            num = int(input("输入商品数量："))  
            shopping[name] = {"price": price, "num": num}  
            print("修改成功！")  

        case "3":   # 删除购物车  
            name = input("输入你要删除的商品名称：")  
            if name not in shopping:  
                print("你输入的商品不存在！")  
                continue  
            del shopping[name]  
            print("删除成功！")  

        case "4":   # 查询购物车  
            print("\n----- 购物车商品 -----")  
            for k, v in shopping.items():  
                print(f"商品名称：{k}，价格：{v['price']}元，数量：{v['num']}个")  

        case "5":  
            print("欢迎下次光临！")  
            break
```

---

## 数据容器 — 总结

| 特性 | 字符串(str) | 列表(list) | 元组(tuple) | 集合(set) | 字典(dict) |
|------|-------------|------------|-------------|-----------|------------|
| 有序性 | 有序 | 有序 | 有序 | 无序 | 有序(3.7+) |
| 重复元素 | 允许 | 允许 | 允许 | 不允许 | key不允许 |
| 可变性 | 不可变 | 可变 | 不可变 | 可变 | 可变 |
| 索引访问 | 支持 | 支持 | 支持 | 不支持 | 不支持 |
| 切片操作 | 支持 | 支持 | 支持 | 不支持 | 不支持 |
| 使用场景 | 文本处理 | 有序可重复数据集合 | 固定数据记录 | 去重数据集合 | 键值对 |

---

## 教务系统综合案例

```python
# 教务系统  
info_dict = {}  

# 添加学生信息  
while True:  
    print("""  
1添加学生信息  
2修改学生信息  
3删除学生信息  
4查询学生信息  
5列出所有学生  
6统计班级成绩  
7退出教务系统        """)  
    work = input("输入你要执行的操作：")  
    match work:  
        case "1":  
            name = input("输入学生姓名：")  
            C = float(input("输入语文成绩："))  
            M = float(input("输入数学成绩："))  
            E = float(input("输入英语成绩："))  
            info_dict[name] = {"语文成绩": C, "数学成绩": M, "英语成绩": E}  
            print("信息录入成功")  

        case "2":  
            if len(info_dict) == 0:  
                print("无学生信息，不支持修改")  
                continue  
            name = input("输入你要修改的学生姓名：")  
            if name not in info_dict:  
                print("学生不存在，无法修改")  
                continue  
            else:  
                C = float(input("输入新的语文成绩："))  
                M = float(input("输入新的数学成绩："))  
                E = float(input("输入新的英语成绩："))  
                info_dict[name] = {"语文成绩": C, "数学成绩": M, "英语成绩": E}  
                print("修改成功")  

        case "3":  
            name = input("请输入你要删除的学生姓名：")  
            if name not in info_dict:  
                print("你输入的姓名不存在")  
                continue  
            else:  
                del info_dict[name]  
                print("删除成功")  

        case "4":  
            name = input("请输入你要查询的学生姓名：")  
            if name not in info_dict:  
                print("你输入的学生姓名不存在")  
                continue  
            else:  
                dict1 = info_dict[name]  
                print(f'学生姓名{name}, 语文成绩{dict1["语文成绩"]}, 数学成绩{dict1["数学成绩"]}, 英语成绩{dict1["英语成绩"]}')  

        case "5":  
            for name in info_dict.keys():  
                print(name, info_dict[name])  

        case "6":  
            if len(info_dict) == 0:  
                print("无学生信息")  
                continue  
            C = []  
            M = []  
            E = []  
            for k, v in info_dict.items():  
                C.append(v["语文成绩"])  
                M.append(v["数学成绩"])  
                E.append(v["英语成绩"])  
            print(f"语文最高分{max(C)}, 数学最高分{max(M)}, 英语最高分{max(E)}")  
            print("--------各科最高分学生--------")  
            for name, score in info_dict.items():   # 解包，score是字典
                if score["语文成绩"] == max(C):  
                    print(f"语文状元：{name}")  
                if score["数学成绩"] == max(M):  
                    print(f"数学状元：{name}")  
                if score["英语成绩"] == max(E):  
                    print(f"英语状元：{name}")  

        case "7":  
            print("退出系统")  
            break
```