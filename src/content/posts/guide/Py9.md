---
title: AI应用
published: 2026-06-09
description: Python实战开发
tags: [AI]
category: Python
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---
# AI 知识概述

## AI

**人工智能(Artificial Intelligence)** 是一个学科领域的统称 目标是使机器能够像人类一样思考 学习 推理和解决问题

---

## AI大模型

**AI大模型** 也称为大语言模型(Large Language Models LLM) 是AI技术的一个分支 其实就是一个用代码模拟人脑神经网络的程序(参数量极其庞大,通常达到数十亿至数千亿级别) 通过大量的数据训练后 使其具备理解人类语言 思考 推理并输出人类语言的能力 

---

## AI应用

**AI应用** 是指将AI大模型技术落地到具体的业务场景中 用来解决实际问题的产品或者服务

---

## 大模型部署-方案

### 本地部署
- **优点** 数据安全 自主可控 长期成本低
- **缺点** 初始成本高 需长期维护 性能受限

### 官方开发API
- **优点** 前期成本低 无需部署和维护 随时访问
- **缺点** 隐私不能保障 长期成本高 可控性差

> **API** 应用程序编程接口(Application Programming Interface) 是软件间的标准化的"桥梁" 允许开发者无需知晓内部细节即可调用外部功能或数据

### 云服务平台
- **优点** 前期成本低 无需部署和维护 选择度高
- **缺点** 安全及隐私不能保障 长期成本高

---

## 大模型部署-本地部署

### Ollama

**Ollama** 是一个在本地运行 管理大语言模型的工具 官网 https://ollama.com/

#### Ollama自定义安装位置
在 `Ollama.exe` 所在目录打开cmd命令行 然后命令如下:
```
OllamaSetup.exe /DIR=你要安装的目录位置
```
示例:`OllamaSetup.exe /DIR=D:/develop/ollama`

#### Ollama配置环境变量
更改Ollama下载和部署模型所在的位置:
- **变量名 (N)** `OLLAMA_MODELS`(固定名称 不可修改拼写)
- **变量值 (V)** 自定义模型文件夹路径,示例 `D:\ollama_models`

#### 部署(Win + R + cmd 打开命令行)
- 查看Ollama帮助文档 `Ollama --help`
- 部署指定模型 `ollama run deepseek-r1:8b`(在Ollama官网Models查看开源模型 8b表示80亿的参数)
- 退出 `/bye`
- 列出本地所有模型 `Ollama list`
- 再次运行模型 `ollama run deepseek-r1:8b`

---

## 大模型部署-官方开放API

主流大模型官方都提供了开放API 无需部署就可以直接调用访问

1. 注册账号
2. 登入Deepseek
3. 充值
4. 创建API Key

---

## 大模型调用-网络基础知识

**网络** 也就是我们所说的互联网(Internet) 是由无数个计算机网络设备连接起来形成的全球性的网络基础设施

**IP地址** 可以理解为设备在互联网的地址(唯一身份证) 每一个连入网络的设备都有一个自己的IP地址,用来定位设备在互联网的位置

- **IPv4地址** 32位二进制
- **IPv6地址** 128位二进制

> **注意** `127.0.0.1` 是一个非常特殊的IP地址 表示的是本机地址(也称为本地回环地址)

百度IP地址:`110.242.69.21`

**域名(Domain Name)** 是由一串用点分隔的英文字母组成的 IP地址不便于记忆 因此设计出了域名 并通过DNS(域名解析服务器) 来将域名和IP地址相互映射 便于记忆和访问

> **注意** `localhost` 为本机域名

**端口号(Port)** 是整数 取值范围在0-65535 它是用来标识计算机设备中的运行中的程序 每一个程序启动后都会占用一个端口

> **注意** HTTP协议默认端口号为80 HTTPS协议默认端口为443(https://www.baidu.com/ 默认端口443 通过 `110.242.69.21:443` 可访问百度搜索)

---

## 大模型调用-HTTP协议介绍

**OSI网络模型** 全球网络互连标准模型

**TCP/IP网络模型** 可以认为是OSI的简化版

### OSI七层网络模型
1. 应用层
2. 表示层
3. 会话层
4. 传输层
5. 网络层
6. 数据链路层
7. 物理层

### TCP/IP四层网络模型
1. **应用层(HTTP,FTP,SMTP)** 将用户与应用程序交互的数据按照格式协议进行封装
2. **传输层(UDP,TCP)** 负责将数据准确送到对应的应用程序(端口)
3. **网络层(IP)** 负责基于IP地址将数据包路由给对应设备
4. **网络接口层** 负责数据在物理网络中的传输,处理与硬件设备的交互

### HTTP协议
**HTTP** Hyper Text Transfer Protocol 超文本传输协议 规定了客户端和服务器之间数据传输的规则(只有在请求及响应中都遵循了统一的规则 服务端才能读懂客户端发送来的请求 客户端才能解析服务端响应的结果)

- **基于文本的协议** 请求和响应的部分的协议内容为文本格式 底层通过TCP协议传输 稳定性强
- **基于请求-响应模型** 一次请求对应一次响应 必须由客户端先发起请求 服务端才会返回响应
- **无状态** 服务端不会记忆与客户端的历史交互信息 每次请求-响应都是独立的

---

## 大模型调用-HTTP协议数据格式

### 请求数据格式

```
POST /api/courses HTTP/1.1  请求行(请求方式 资源路径 协议)
Accept: application/json, text/plain, */*  请求头（格式key:value）
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Connection: keep-alive
Content-Length: 139
Content-Type: application/json
Host: localhost:90
Origin: http://localhost:90
Referer: http://localhost:90/resource/course
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/143.0.0.0
#请求体（请求参数部分，GET方式没有，POST可以有）
{"phone":"18808088080","channel":1,"name":"虎咆","gender":1,"age":"32"}
```

#### 请求方式
- **GET** 请求参数在请求行中 没有请求体 如:`/api/courses?name=Python&status=1`(请求行key=value&key=value) GET请求参数大小在浏览器中是有限制的
- **POST** 请求参数在请求体中 POST请求大小是没有限制的

#### 浏览器查看方法
浏览器(F12打开开发者模式) 定位到网络(Network) 中的All 找到并点击请求资源名 点击Headers部分
- **General中** 请求URL 请求方式
- **Request Headers中** 请求信息 点击Raw查看最原始的HTTP协议数据
- POST请求中请求体数据在浏览器Payload部分(View source查看原始数据)

### 响应数据格式

```
HTTP/1.1 200  响应行(协议 状态码)
Server: nginx/1.24.0  响应头(格式key:value)
Date: Tue, 16 Dec 2025 12:38:08 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive

{code: 1, msg: "success", data: null}  响应体(存放服务端响应的数据)
```

- **Respond Headers** 响应回来的数据
- 响应体数据放在浏览器Response中(json格式数据)

#### 状态码
- **200** 客户端请求成功
- **400** 请求参数错误
- **404** 请求资源不存在(URL输入有误,或者网站资源被删除了)
- **500** 服务器发生了不可预期的错误

---

## 大模型调用-Apifox接口测试

**Apifox** 是一款设计,开发 测试的一体化协作平台 是项目开发中进行API接口测试的神器 

下载Apifox → 新建项目 → 快速请求 → 在Headers和Body中的json(请求数据是json格式)复制相应的数据

---

## DeepSeek接口文档

### curl格式

```bash
curl https://api.deepseek.com/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${DEEPSEEK_API_KEY}" \
  -d '{
        "model": "deepseek-v4-pro",
        "messages": [
          {"role": "system", "content": "系统提示词."},
          {"role": "user", "content": "用户实际提出的问题"}
        ],
        "thinking": {"type": "enabled"},
        "reasoning_effort": "high",
        "stream": false
      }'
```

### JSON说明

**JSON**(JavaScript Object Notation)是前端的一种对象表示方法 表示形式类似于Python中的字典 都是key:value这种形式 不过所有的key都必须使用双引号引起来 值可以是任何类型

- **对象** 用 `{}` 表示 `{}` 之间是键值对形式 键是字符串 值可以是任意其它类型
- **数字** 整数和小数都是数字 例如 12,3.14
- **字符串** 用 `""` 引起来 例如 "jack"
- **布尔** 有两种值:true 或 false
- **列表** 用 `[]` 表示 `[]` 中是列表的元素 多个元素以逗号分割

### Token

**Token** 在大语言模型领域 Token(词元)是模型处理自然语言的最小语义计算单元 是人类文本与模型数值计算之间的转换载体

---

## 大模型调用-会话记忆方案

### 滚雪球方案

```json
"messages": [
  { "role": "system", "content": "你是一名可爱的AI助手，你的名字叫小甜甜，请以亲切、可爱的语气来回答用户的问题" },
  { "role": "user", "content": "12个苹果,3个人怎么均分?" },
  { "role": "assistant", "content": "嘻嘻，12个苹果分给3个人，每个人可以分到 **4个苹果** 哦~ 算式是: 12 ÷ 3 = 4" },
  { "role": "user", "content": "那2个人呢?" },
  { "role": "assistant", "content": "哎呀，如果是2个人的话，每个人可以分到 **6个苹果** 呢~ 算式是: 12 ÷ 2 = 6" },
  { "role": "user", "content": "那4个人呢?" }
]
```

---

## 大模型调用-本地DeepSeek

Ollama官方文档 → API参考 → 左边点击POST对话 → 到Apifox复制相应数据.会话记忆还是滚雪球方案

### curl格式

```bash
curl https://:11434/api/chat \
  -d '{
    "model": "deepseek-r1:8b",
    "messages": [
        {
          "role": "system", 
          "content": "你是一名可爱的AI助手"
        },
        {
          "role": "user", 
          "content": "12个苹果,3个人怎么均分?"
        }
    ],
    "stream": false
}'
```

# Python代码调用AI大模型

## 安装第三方软件包

```bash
# 安装软件包(最新版本)
pip install openai

# 安装软件包(指定版本)
pip install openai==2.13.0

# 卸载软件包
pip uninstall openai

# 列出已安装的包
pip list

# 查看包详情
pip show openai
```

## 非流式输出回答

```python
import os  
# pip install openai -i https://pypi.tuna.tsinghua.edu.cn/simple(清华源)
from openai import OpenAI  
  
# 创建与AI大模型交互的客户端  
# DEEPSEEK_API_KEY环境变量的名字 值为API KEY  
client = OpenAI(  
    api_key=os.environ.get('DEEPSEEK_API_KEY'),  
    base_url="https://api.deepseek.com")  
  
# 与AI大模型进行交互()  
response = client.chat.completions.create(  
    model="deepseek-v4-flash",  
    messages=[  
        # 系统提示词  
        {"role": "system", "content": "你是一个助手,可爱,温柔"},  
        # 用户提示词  
        {"role": "user", "content": "你好卡哇伊"},  
    ],  
    stream=False  
)  
  
# 输出大模型返回的结果  
print(response.choices[0].message.content)
```

## 流式输出回答

```python
# 导入操作系统模块 用于读取环境变量
import os
# 导入OpenAI官方SDK 用来对接AI大模型
from openai import OpenAI

# 初始化连接DeepSeek AI的客户端
client = OpenAI(
    # 从电脑环境变量中获取 DeepSeek 的 API Key（密钥）
    api_key=os.environ.get('DEEPSEEK_API_KEY'),
    # 指定AI接口地址（这里是DeepSeek官方接口）
    base_url="https://api.deepseek.com"
)

# 向AI发送对话请求 并开启【流式输出】
response = client.chat.completions.create(
    # 使用的AI模型 DeepSeek V4 Flash
    model="deepseek-v4-flash",

    # 对话消息列表
    messages=[
        # 系统提示：告诉AI你是一个可爱温柔的助手
        {"role": "system", "content": "你是一个助手,可爱,温柔"},
        # 用户提问：让AI写一篇200字作文
        {"role": "user", "content": "200字作文"},
    ],

    # 开启流式输出 AI会一边生成一边返回，而不是全部生成完再返回
    stream=True
)

# 定义一个空字符串，用来保存AI返回的【完整回答】
full_response = ""

# 先打印前缀 "AI:" 不换行 且立刻显示在屏幕上
print("AI：", end="", flush=True)

# 循环遍历流式返回的每一段数据（一段一段接收）
for chunk in response:
    # 从当前数据片段中 提取AI生成的文字内容
    content = chunk.choices[0].delta.content

    # 如果当前片段有内容（不为空）
    if content:
        # 把这段文字追加到完整回答里
        full_response += content
        # 实时打印这段文字 不换行 立刻显示（流式打字效果）
        print(content, end="", flush=True)

# 所有内容输出完毕后 打印一个换行 让控制台更整洁
print()
```

# 提示词工程

## 提示词(Prompt)

**提示词(Prompt)** 是引导大模型(LLM)进行内容生成的命令(一句话,一个问题)

---

## 提示词工程(Prompt Engineering)

**提示词工程(Prompt Engineering)** 通过有技巧地编写提示词 使大模型生成出尽可能符合预期的内容 这一持续性的过程就称为提示词工程

---

## 提示词工程核心技巧

### 1. 给大模型设定角色与能力

让大模型扮演特定角色 明确其专业领域和能力边界 

**示例**
> "你是一名资深的数据科学家 精通Python机器学习和统计分析"

### 2. 明确核心请求与任务

清晰 具体地说明你想要完成什么任务 避免模糊表达

**示例**:
> - 模糊 帮我写点东西
> - 清晰 帮我写一篇800字左右的科普文章,介绍人工智能在医疗诊断领域的应用

### 3. 按步骤拆解复杂任务

将复杂任务分解为多个简单的步骤 引导大模型逐步完成

**示例** 
> 请按以下步骤回答问题:
> 第一步 分析问题的关键要素
> 第二步 列举可能的解决方案
> 第三步 对比各方案的优缺点
> 第四步 给出最终建议

### 4. 指定风格与语气

明确要求大模型使用特定的语言风格 情感色彩或语调

**示例**
> - 正式风格 "请使用正式的商务邮件风格"
> - 幽默风格 "请用幽默风趣的语气回答"
> - 简洁风格 "请用三句话以内回答"

### 5. 明确要求输出格式

指定返回内容的结构形式 如Markdown JSON 表格 列表等

**示例**
> 请以Markdown表格形式输出 包含以下三列 名称 价格 库存数量

### 6. 提供输入输出的示例(Few-shot学习)

给大模型提供若干个输入-输出的示例 帮助它理解你期望的模式

**示例**
```
示例1
输入 苹果
输出 一种红色或绿色的水果，口感脆甜

示例2 
输入 胡萝卜
输出 一种橙色的根茎类蔬菜 富含维生素A

现在请按同样格式输出 西兰花
```

---

## 提示词编写注意事项

| 注意事项 | 说明 |
|---------|------|
| 清晰具体 | 避免模糊和歧义的表述 |
| 指令前置 | 将重要指令放在提示词的开头 |
| 正向引导 | 说"应该做什么"而不是"不要做什么" |
| 适时追问 | 信息不足时让模型反问,而不是让它猜测 |
| 迭代优化 | 根据输出效果不断调整提示词 |

---

# Streamlit

Streamlit 是一个开源的Python库 用于快速基于Python代码构建交互式的web网站

```bash
# 在终端中安装  
pip install streamlit -i https://pypi.tuna.tsinghua.edu.cn/simple  
```

```python
# 引入Streamlit  
import streamlit as st  
```

```bash
# 运行(终端)
streamlit run xxxx.py
```

## 基础组件

```python
# 引入streamlit  
import streamlit as st  
  
# 大标题  
st.title("Streamlit 入门演示")  
st.header("一级标题")  
st.subheader("二级标题")  
  
# 段落文字  
st.write("段落文字1")  
st.write("段落文字2")  
  
# 图片  
# st.image("./re/艾伦.jpg")  
st.image("re/艾伦.jpg")  
  
# 音频  
st.audio("re/qhc.mp3")  
  
# 视频  
# st.video("re/qhc.mp4")  
  
# 设置logo(展示在网页左上角)  
st.logo("re/艾伦.jpg")  
  
# 表格  
# json格式  
student_date = {  
    "姓名": ["张三", "李四", "王五"],  
    "学号": [1001, 1002, 1003],  
    "性别": ["男", "女", "男"],  
    "年龄": [18, 19, 20]  
}  
st.table(student_date)  
  
# 输入框  
# 普通输入框  
name = st.text_input("请输入你的名字")  
st.write("你输入的名字是:", name)  
# 密码输入框  
password = st.text_input("请输入你的密码", type="password")  
st.write(f"你输入的密码是:{password}")  
# 单选按钮  
# index=2(索引) 默认选中未知  
sex = st.radio("请选择你的性别", ["男", "女","未知"],index=2)  
st.write(f"你选择的性别是:{sex}")
```

## 页面配置

```python
# 整个页面设置(放到最上面)

st.set_page_config(
    # 整个页面标题
    page_title="进击的巨人",
    # 页面图标
    page_icon="💎",
    # 页面布局 wide(占满) 去掉layout(占中间)
    layout="wide",
    # 控制侧边栏的状态
    initial_sidebar_state="expanded",
    # 菜单项(网页右上角) 不用可以删除 空字典
    menu_items={
        'Get Help': 'https://www.extremelycoolapp.com/help',
        'Report a bug': "https://www.extremelycoolapp.com/bug",
        'About': "献出心脏"
    }
)
```

---

# 文件操作入门

操作文件时 分为三步操作 打开 读/写 关闭

编码 是将字符(文字 数字 符合)转换为计算机能够存储和处理的数字代码的规则系统(ASCII GBK UTF-8)

如果操作完文件 并未调用close方法关闭文件 同时程序没有停止运行 那么这个文件将一直被Python程序占用 无法操作

## 读文件

```python
# 读文件  
# 1打开文件(r表示读取) open函数返回一个文件对象 用f接收  
f = open("re/望庐山瀑布.txt", "r", encoding="utf-8")  
  
# 2读取文件内容(调用文件对象中的read方法)  
# content = f.read()  

# readlines() 读取行 每行封装到列表中  
content_list = f.readlines()  
for line in content_list:  
    print(line.strip()) # strip()去掉行末的换行符  
  
# 3关闭文件(调用文件对象中的close方法)  
f.close()
```

## 写文件

```python
# 写文件  
# 1.打开文件(w表示写入) 如果没有该文件 会自动创建  
f = open("re/望庐山瀑布.txt", "w", encoding="utf-8")  
  
# 2.写入文件  
f.write("欢迎来到望庐山瀑布\n\n")  
f.write("请勿跳山\n")  
f.write("请勿礼包\n")  
f.write("请勿乱入\n")  
  
# 3.关闭文件  
f.close()
```

## 文件操作(资源释放)

如果操作文件过程中出现了异常 文件就无法关闭了 怎么解决?

```python
# 资源释放(try...finally) 方法1(不推荐)

# 写文件
# 1.打开文件(w表示写入) 如果没有该文件 会自动创建

f = open("re/望庐山瀑布.txt", "w", encoding="utf-8")

# 2.写入文件
try:
    f.write("欢迎来到望庐山瀑布\n\n")
    f.write("请勿跳山\n")
    i = 1 / 0
    f.write("请勿礼包\n")
    f.write("请勿乱入\n")
    f.write("请勿乱入\n")
# 即使出现异常finamlly代码块也会运行
finally:
    print("关闭文件")
    # 3.关闭文件
    f.close()
```

with语句(上下文管理器)的核心作用就是确保资源的总是被正确获取和释放(即使发生异常 也会被正确释放) 也是项目开发中的推荐方式

```python
# 写文件  
# 1.打开文件(w表示写入)  
with open("re/望庐山瀑布.txt", "w", encoding="utf-8") as f:  
    # 2.写入文件  
    f.write("欢迎来到望庐山瀑布\n\n")  
    f.write("请勿跳山\n")  
    f.write("请勿礼包\n")  
    f.write("请勿乱入\n")  
    f.write("请勿乱入\n")  
    f.write("解决\n")
```

## 读取json格式文件

JSON是软件开发中最常用的数据交换格式 而为了简化JSON数据处理 在Python标准库中就提供了处理JSON数据的核心模块 json

import json(dump序列化 load反序列化)

```python
import json

# 创建一个用户对象
user = {
    "name": "张三",
    "age": 18,
    "gender": "男",
    "hobby": ["football", "basketball"]
}

# 写入json数据文件
with open("re/data1.json", "w", encoding="utf-8") as f:
    # 把user对象转换成json字符串写入文件(f)
    # ensure_ascii=False 默认为True是确保所有的数据输出的数据都是ASCII编码(非ASCII会转义)
    # indent=2 会在输出的json数据中添加缩进(格式化操作)
    json.dump(user, f, ensure_ascii=False, indent=2)  # 把user对象转换成json字符串写入文件

# 读取json数据文件
with open("re/data1.json", "r", encoding="utf-8") as f:
    # 把json字符串转换成python对象
    user = json.load(f)
    print(user)
    print(type(user))
```

---

# 智能AI伴侣案例

## 基础版本(无永久记忆和历史会话管理)

```python
import streamlit as st
import os  # 操作系统工具包(用来读取电脑里的环境变量 密钥 文件)
from openai import OpenAI  # 从 openai 库里导入 OpenAI 客户端(创建一个能连接AI大模型的客户端)

# 页面整体配置
st.set_page_config(
    # 整个页面标题
    page_title="次元聊天",
    # 页面图标
    page_icon="🤖",
    # 页面布局
    layout="wide",
    # 控制侧边栏的状态
    initial_sidebar_state="expanded",
    # 菜单项
    menu_items={
        'About': "基于DeepSeekAPI智能聊天服务"
    }
)

# 大标题
st.title("次元智能聊天服务")
# Logo
st.logo("re/艾伦.jpg")

# 保存动漫角色昵称(缓存)
if "nick_name" not in st.session_state:
    st.session_state.nick_name = "绫波丽"
# 保存动漫角色语言(缓存)
if "language" not in st.session_state:
    st.session_state.language = "中文"

# 侧边栏(st.sidebar) with: streamlit上下文管理器
with st.sidebar:
    st.title("次元聊天服务基础信息")
    # 昵称输入框
    nick_name = st.text_input("输入动漫角色名称", placeholder="请输入动漫角色名称", value=st.session_state.nick_name)
    # 保存到缓存
    if nick_name:
        st.session_state.nick_name = nick_name
    # 语言输入框
    language = st.text_input("输入动漫角色语言", placeholder="请输入动漫角色语言", value=st.session_state.language)
    # 保存到缓存
    if language:
        st.session_state.language = language

# 保存聊天记录(缓存)
# 每次发送消息后 页面会重新渲染加载(页面聊天记录会清空)
# st.session_state 用来保存聊天记录 用户输入 状态 页面重新渲染不会消失(交互重跑 不丢;页面刷新 全丢)
# st.session_state(你的书包) messages(一本专门记聊天的笔记本) [](空白的新本子)
# 如果你的 st.session_state 没有 messages 这个变量
if "messages" not in st.session_state:
    # 就创建一个空的聊天记录列表
    # 后面用 append 把用户输入和 AI 回复存进去
    st.session_state.messages = []

# 展示聊天信息
# 循环显示所有聊天记录
for message in st.session_state.messages:
    # 判断是谁发的消息
    if message["role"] == "user":
        # 显示用户消息
        st.chat_message("user").write(message["content"])
    else:
        # 显示AI消息
        st.chat_message("assistant").write(message["content"])

# 系统提示词
system_prompt = f"""
你必须带入动漫中的{st.session_state.nick_name}
用{st.session_state.language}回答我的所有问题
"""

# 创建与AI大模型交互的客户端
client = OpenAI(
    api_key=os.environ.get('DEEPSEEK_API_KEY'),
    base_url="https://api.deepseek.com")

# 输入框(st.chat_input)
prompt = st.chat_input("输入你要输入的内容")
if prompt:  # 非空字符串->True 否则False
    # 显示用户输入
    # st.chat_message("user") 创建一个聊天气泡 user(assistant)为头像
    # write 向这个聊天泡中写入内容
    st.chat_message("user").write(prompt)
    # 保存用户输入提示词(字典)
    st.session_state.messages.append({"role": "user", "content": prompt})

    # 与AI大模型进行交互()
    response = client.chat.completions.create(
        model="deepseek-v4-flash",
        messages=[
            # 系统提示词
            {"role": "system", "content": system_prompt},
            # 用户提示词
            # {"role": "user", "content": prompt},

            # 添加记忆(滚雪球)解包(*)st.session_state.messages列表
            # [{"role":"user","content":"..."},{"role": "assistant", "content":"..."},...]
            *st.session_state.messages,
        ],
        stream=True
    )

    # 输出大模型返回的结果(非流式解析)
    # st.chat_message("assistant").write(response.choices[0].message.content)

    # 输出大模型返回的结果（流式解析）
    # 创建一个空的占位符 用来实时刷新AI的回复内容
    response_message = st.empty()
    # 定义一个空字符串 用来一点点拼接AI返回的完整句子
    full_response = ""
    # 开始循环 一段一段接收AI发回来的文字（流式就是这么来的）
    for chunk in response:
        # 判断 如果当前这段数据里有文字内容，不为空
        if chunk.choices[0].delta.content is not None:
            # 把当前这一小段文字取出来，存到 content 里
            content = chunk.choices[0].delta.content
            # 把这一小段文字拼接到完整句子里
            full_response += content
            # 把拼接好的内容，实时显示在界面上（打字机效果）
            response_message.chat_message("assistant").write(full_response)

    # 保存大模型返回结果(字典)
    # 非流式
    # st.session_state.messages.append({"role": "assistant", "content": response.choices[0].message.content})
    # 流式
    st.session_state.messages.append({"role": "assistant", "content": full_response})
```

## 完善版本

### 永久保存会话(思路)

```
内存中存放的数据在计算机关机后就会消失  要永久保存数据 就需要将数据保存在文件中(时间.json)

 20260109_160520.json(文件名)
 {  
   "messages": [  
     {  
       "role": "user",      
       "content": "你好"  
     },  
     {  
       "role": "assistant",  
       "content": "你好"  
     }  
   ],  
   "nick_name": "绫波丽",  
   "language": "中文",  
   "time": "2026-01-09_16-05-20"  
 }
```
### 完整代码


```python
import streamlit as st
import os
from openai import OpenAI
from datetime import datetime  # datetime.now(拿到系统时间)
import json  # 处理json文件

st.set_page_config(
    page_title="二次元聊天",
    page_icon="🤖",
    layout="wide",
    initial_sidebar_state="expanded",
    menu_items={
        'About': "基于DeepSeekAPI智能聊天服务"
    }
)

# 生成会话标识函数(时间)
def time():
    return datetime.now().strftime("%Y-%m-%d_%H-%M-%S")

# 保存会话信息函数
def save_talk_data():
    # 判断session_state.messages是否有内容(对话内容)
    if st.session_state.messages:
        # 构建新的会话对象(session_date字典存session_state缓存中的数据)
        session_date = {
            "nick_name": st.session_state.nick_name,
            "language": st.session_state.language,
            "time": st.session_state.time,
            "messages": st.session_state.messages
        }
        # 把session_date(字典)保存为json文件
        # 如果talk_date目录不存在 则创建
        if not os.path.exists("talk_data"):
            os.mkdir("talk_data")
        with open(f"talk_data/{st.session_state.time}.json", "w", encoding="utf-8") as f:
            json.dump(session_date, f, ensure_ascii=False, indent=4)

# 获取以保存到历史会话文件名称 去掉.json后缀保存到列表函数
def load_talk_history():
    # 创建一个空列表 存储文件名(去掉.json)
    talk_history_list = []
    # 判断talk_data目录是否存在
    if os.path.exists("talk_data"):
        # os.listdir 罗列指定目录下的所有文件(列表)
        file_list = os.listdir("talk_data")
        for filename in file_list:
            # 判断文件名是否以.json结尾
            if filename.endswith(".json"):
                # 去掉.json后缀(切片) 保存到talk_history_list列表中
                talk_history_list.append(filename[:-5])
    # 返回talk_history_list([文件名1,文件名2,...])
    talk_history_list.sort(reverse=True)  # 先降序排序 在返回
    return talk_history_list

# 把历史会话展示到页面函数 (传入历史文件名称(去.json))
def show_talk_history(talk_history_name):
    try:
        if os.path.exists(f"talk_data/{talk_history_name}.json"):
            # 读取会话数据(json文件)
            with open(f"talk_data/{talk_history_name}.json", "r", encoding="utf-8") as f:
                talk_date = json.load(f)
                st.session_state.messages = talk_date["messages"]
                st.session_state.nick_name = talk_date["nick_name"]
                st.session_state.language = talk_date["language"]
                st.session_state.time = talk_date["time"]
    except Exception as e:
        # 输出失败信息
        st.error(f"读取历史会话数据失败: {e}")

# 删除历史会话函数
def delete_talk_history(talk_history_name):
    try:
        # 判断talk_data目录中的文件是否存在
        if os.path.exists(f"talk_data/{talk_history_name}.json"):
            os.remove(f"talk_data/{talk_history_name}.json")
            # 判断删除的是不是当前页面会话
            if talk_history_name == st.session_state.time:
                # 把对话列表清空(缓存)
                st.session_state.messages = []
                # 重新生成会话标识(调用生成会话标识函数(时间))
                st.session_state.time = time()
    except Exception as e:
        # 输出失败信息
        st.error(f"删除历史会话数据失败: {e}")

st.title("次元智能聊天服务")
st.logo("re/艾伦.jpg")

if "nick_name" not in st.session_state:
    st.session_state.nick_name = "绫波丽"
if "language" not in st.session_state:
    st.session_state.language = "中文"
# 保存会话标识(时间)(缓存)
if "time" not in st.session_state:
    # 拿到系统时间并且格式化:年-月-日_时-分-秒(2026-06-10_15-22-35)
    # 生成会话标识函数(时间)
    st.session_state.time = time()
if "messages" not in st.session_state:
    st.session_state.messages = []

# 展示当前会话名称
st.text("当前会话名称: %s" % st.session_state.time)

for message in st.session_state.messages:
    if message["role"] == "user":
        st.chat_message("user").write(message["content"])
    else:
        st.chat_message("assistant").write(message["content"])

with st.sidebar:
    # AI控制面板
    st.title("AI控制面板")
    # 按钮(st.button) 点击返回True 否则False
    if st.button("保存当前会话并新建会话", width=300, icon="🐳"):
        # 1.保存当前会话数据(调用保存会话函数函数)
        save_talk_data()
        # 2.新建会话
        # 将seession_state.messages清空(设置成一个空列表)
        st.session_state.messages = []
        # 生成一个全新的会话标识(调用生成会话标识函数(时间))
        st.session_state.time = time()
        # 重新运行当前页面(清空页面上的聊天记录展示)
        st.rerun()

    # 会话历史
    st.text("历史会话")
    # 添加滚动条
    # 接取(获取以保存到历史会话文件名称 去掉.json后缀保存到列表函数)返回的列表
    talk_history_list = load_talk_history()
    # 遍历历史会话列表 拿到历史会话名称
    for talk_history_name in talk_history_list:
        # 布局
        col1, col2 = st.columns([4, 1])
        # 展示历史会话名称
        # 三元运算符 如果条件为真 则返回第一个值 否则返回第二个值(值1 if 条件 else 值2)
        with col1:
            if st.button(talk_history_name, width="stretch", icon="💕", key=talk_history_name, type="primary" if talk_history_name == st.session_state.time else "secondary"):
                # 调用把历史会话展示到页面函数
                show_talk_history(talk_history_name)
                # 重新渲染页面
                st.rerun()

        # 删除历史对话按钮
        with col2:
            if st.button("", width="stretch", icon="❌", key=f"del_{talk_history_name}"):
                # 调用删除历史会话函数
                delete_talk_history(talk_history_name)
                # 重新渲染页面
                st.rerun()

    # 分割线(布局更清晰)
    st.divider()
    st.title("次元聊天服务基础信息")
    nick_name = st.text_input("输入动漫角色名称", placeholder="请输入动漫角色名称", value=st.session_state.nick_name)
    if nick_name:
        st.session_state.nick_name = nick_name
    language = st.text_input("输入动漫角色语言", placeholder="请输入动漫角色语言", value=st.session_state.language)
    if language:
        st.session_state.language = language

system_prompt = """
你带入动漫中的%s,与我交流
必须用%s语言回答我的问题
"""

client = OpenAI(
    api_key=os.environ.get('DEEPSEEK_API_KEY'),
    base_url="https://api.deepseek.com")

prompt = st.chat_input("输入你要输入的内容")
if prompt:
    st.chat_message("user").write(prompt)
    st.session_state.messages.append({"role": "user", "content": prompt})

    response = client.chat.completions.create(
        model="deepseek-v4-flash",
        messages=[
            {"role": "system", "content": system_prompt % (st.session_state.nick_name, st.session_state.language)},
            *st.session_state.messages,
        ],
        stream=True
    )

    response_message = st.empty()
    full_response = ""
    for chunk in response:
        if chunk.choices[0].delta.content is not None:
            content = chunk.choices[0].delta.content
            full_response += content
            response_message.chat_message("assistant").write(full_response)

    st.session_state.messages.append({"role": "assistant", "content": full_response})
    # 每次大模型回答时保存会话数据到文件(调用保存会话函数函数)
    save_talk_data()
```

---

# 知识扩展

项目开发推荐相对路径

路径写法
- 相对路径: 从当前文件所在目录开始查找
    - `./`:当前目录 `./re/静夜思.txt`
    - `../`:上一级目录 `../第二章/file/寻隐者不遇`(`../../`上两层)
- 绝对路径: 从文件系统的根目录开始查找(文件位置的完整路径)
    - 文件管理器文件右键->显示更多选项->属性->安全->复制对象名称(`\`在字符串表示转义,需要写两个`\`)

```python
# a追加内容  
with open("re/望庐山瀑布.txt", "a", encoding="utf-8") as f:  
    f.write("请勿乱入\n")  
    f.write("请勿乱入\n")  
    f.write("解决\n")
```



