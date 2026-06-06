---
title: 网络机器人(爬虫)入门
published: 2026-06-07
description: Python爬虫入门
tags: [爬虫入门]
category: Python爬虫
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

# 爬虫与网络机器人笔记

## 爬虫概述

**爬虫**（也称为网络爬虫/网络机器人）是一种按照一定的预设规则，自动浏览并抓取网络数据的程序或脚本。

### 爬虫工作流程

1. 开始
2. 发送HTTP请求
3. 解析结果提取数据
4. 数据处理（清洗）
5. 数据存储

> **数据清洗**：指对采集到的原始数据进行处理、修正、转换和标准化的过程，目的是让数据变得规范、准确。

---

## 网络机器人-合规性（robots协议）

**robots协议**（也称为爬虫协议、爬虫规则）是指网站根目录下存放的一份文本文件 `robots.txt`，用于告诉爬虫哪些网页可以抓取、哪些网页不可以抓取（**君子协议**）。

访问方式：`https://www.baidu.com/robots.txt`（即 `/robots.txt`）

### robots.txt 示例

```
# 通用规则（针对于所有爬虫）
User-agent: *                    # 用户代理，通过该请求头确认爬虫类型
Disallow: /wp-admin/             # 禁止访问的资源
Allow: /wp-admin/admin-ajax.php  # 允许访问的资源
Sitemap: https://www.tiobe.com/sitemap_index.xml  # 网站地图，帮助爬虫高效获取内容
Crawl-delay: 5                   # 爬取间隔时间，避免频繁访问造成网站压力

# 特定规则（针对于豌豆荚爬虫）
User-agent: Wandoujia Spider  
Disallow: /  

# 特定规则（针对于谷歌广告爬虫）
User-agent: Mediapartners-Google  
Disallow: /subject_search  
Disallow: /amazon_search  
Disallow: /search  
Disallow: /group/search
```

---

## 入门程序

获取 [TIOBE编程语言排行榜](https://www.tiobe.com/tiobe-index/)

### 步骤

1. 查看TIOBE网站的 `robots.txt` 文件，明确资源获取规则
2. 在终端安装 `requests` 库用于发送网络请求：`pip install requests`
3. 编写Python代码，访问TIOBE网站获取数据

### 基础版本

```python
import requests

# 定义url
target_url = "https://www.tiobe.com/tiobe-index/"

# 发送请求，获取数据
response = requests.get(target_url)

# 输出数据到控制台（HTML结构）
print(response.text)
```

### 完善版本（带解析）

```python
import requests  
from lxml import html  

# 定义url  
target_url = "https://www.tiobe.com/tiobe-index/"  

# 发送请求，获取数据  
response = requests.get(target_url)  

# 把网页的纯文本代码变成能直接用XPath抓数据的解析对象  
doc = html.fromstring(response.text)  

# 解析表头数据  
th_list = doc.xpath("//table[@id = 'top20']/thead/tr/th/text()")  
print(th_list)  

# 解析表体数据  
tr_list = doc.xpath("//table[@id = 'top20']/tbody/tr")  
for tr in tr_list:  
    td_list = tr.xpath("./td/text()")  
    print(td_list)
```

---

## 网页解析

**网页解析**：指从原始HTML文档中提取数据的过程，是网络爬虫的关键步骤——从一堆标签文本中提取出需要的数据。

### lxml库

`lxml`（安装：`pip install lxml`）是一个高性能的HTML/XML文档解析库，支持基于XPath语法来解析和获取网页数据。

### XPath

**XPath**：一种用于在HTML/XML文档中导航或定位元素的查询语言，能够准确地定位文档中的特定元素、属性或文本。

### 本地HTML解析示例

```python
from lxml import html  

# 读取html文件（源代码）  
with open("resources/index.html", "r", encoding="utf-8") as f:  
    html_text = f.read()  

    # 解析html的文本，将其转换为一个文档对象  
    # 把字符串格式的网页代码转换成lxml能看懂的网页文档对象  
    doc = html.fromstring(html_text)  

    # 解析表格头的数据（xpath语法）  
    hd_list = doc.xpath("//table/thead/tr/th/text()")  
    print(hd_list)  

    # 一次性获取所有行的数据  
    tr_list = doc.xpath("//table/tbody/tr")  
    for tr in tr_list:  
        td_list = tr.xpath("./td/text()")  
        print(td_list)
```

---

## XPath语法

### 示例HTML文档

```html
<html lang="zh-CN">  
<head>  
    <meta charset="UTF-8">  
    <title>仙逆人物志 - 修真世界</title>  
</head>  
<body>  
    <div>  
        <h1>Python</h1>  
        <p>一门简洁、快速、易用的编程语言。</p>  
        <p>人生苦短，我用Python。</p>  
        <p color="red">AI大模型开发、AI智能应用开发。</p>  
        <a href="https://www.itcast.cn">黑马程序员</a>  
    </div>  
</body>  
</html>
```

### XPath语法表

| 表达式 | 描述 | 示例 |
|--------|------|------|
| `/` | 从根节点的直接子元素 | `/html/body/div/h1` |
| `//` | 从任意位置选择节点 | `//h1` |
| `.` | 当前节点下查找 | `./a` 或 `.//a` |
| `[n]` | 选择第n个元素 | `//p[2]` |
| `[last()]` | 选择最后一个元素 | `//p[last()]` |
| `[@attr]` | 选择有该属性的元素 | `//p[@color]` |
| `[@attr='value']` | 选择属性值等于指定值的元素 | `//p[@color='red']` |
| `*` | 匹配任何元素节点 | `//body/div/*` |
| `@*` | 匹配元素的任何属性 | `//body/div/a/@*` |
| `text()` | 获取文本内容 | `//div/p/text()` |

### XPath语法练习

```python
from lxml import html  

with open("resources/index.html", "r", encoding="utf-8") as f:  
    html_text = f.read()  
    doc = html.fromstring(html_text)  

    # 获取表头数据
    # 从根节点开始匹配
    th_list1 = doc.xpath("/html/body/div/table/thead/tr/th/text()")  
    # 从任意节点开始匹配
    th_list = doc.xpath("//table/thead/tr/th/text()")  
    print(th_list)  
    print(th_list1)  

    # * 表示匹配任意元素  
    th_list2 = doc.xpath("//table/thead/tr/*/text()")  
    print(th_list2)  

    # 获取表体数据
    # tr[2] 匹配第二行
    # tr[last()] 匹配最后一行
    # tr[last()-1] 匹配倒数第二行
    td_list = doc.xpath("//tbody/tr[last()-1]/td/text()")  
    print(td_list)  

    # 获取p标签数据
    # p[@class] 匹配有class属性值的p标签
    # p[@class='xn'] 匹配class属性值为xn的p标签
    p = doc.xpath("//p[@class='cn']/text()")  
    print(p)  

    # @src 匹配src属性
    # @* 匹配任意属性（src和alt）
    a_list = doc.xpath("//td/img/@src")  
    a_list1 = doc.xpath("//td/img/@*")  
    print(a_list)  
    print(a_list1)
```

### 更多XPath示例

```python
# /html/head/title[1] 从根路径取head下第一个title标签
res1 = tree.xpath('/html/head/title[1]/text()')
print(res1)

# //div/a/text() 所有div的直接子a，提取文本
res2 = tree.xpath('//div/a/text()')
print(res2)

# //div/a/@href 提取a标签href属性
res3 = tree.xpath('//div/a/@href')
print(res3)

# //div/a[@target='_blank'] 筛选target="_blank"的a标签
res4 = tree.xpath('//div/a[@target="_blank"]/text()')
print(res4)

# //div[2]/p[last()]/text() 第二个div下最后一个p的文本
res5 = tree.xpath('//div[2]/p[last()]/text()')
print(res5)
```