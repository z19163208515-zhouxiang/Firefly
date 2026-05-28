---
title: Renpy文本标签 段落标签 转义字符 内插数据
published: 2026-05-28
description: Galgame
tags: [Galgame制作,Renpy基本语法]
category: Galgame制作
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

```python
#调整image标签的属性，改变图片的大小(后面要写image=blue)
image blue = Transform("images/blue.jpg", xsize=50, ysize=50)

define c1 = Character("周翔")
image logo:
    "images/logo.jpg"
    zoom 7.5

#表示玩家选项 就是上节课的flag
define x = 0

label start:
    stop music
    #jump语句可以跳转到另一个标签
    #jump start2

    #call语句可以调用另一个标签,调用后返回到当前位置继续执行
    #call start2

    #a标签可以创建超链接，点击后会跳转到指定标签或网址
    c1 "{a=jump:start2}超链接可以跳转到另一个标签。{/a}"
    c1 "{a=call:start2}超链接可以调用另一个标签。{/a}"
    c1 "{a=https://zhouxpro.xyz}点击进入我的博客{/a}"

    #size标签可以改变文本的大小(不能有空格)
    c1 "我是故事的{size=45}男主角{/size}."
    #color标签可以改变文本的颜色(十六进制颜色码)
    c1 "我喜欢{color=#ff0000}红色{/color}，不喜欢{color=#0000ff}蓝色{/color}."
    #alpha标签可以改变文本的透明度
    c1 "你好啊，我是{alpha=0.5}半透明{/alpha}的文本。"
    #font表示字体
    c1 "这是{font=shanhaigesangzhuomaw.ttf}不同字体(无版权){/font}的文本。"
    #b表示粗体
    c1 "这是{b}粗体{/b}文本。"
    #i表示斜体
    c1 "这是{i}斜体{/i}文本。"
    #image标签可以在文本中插入图片
    c1 "这是文本中的图片{image=blue}。"
    return


label start2:
    "跳转到另一个标签。"
    "这是另一个标签。"
    "你好，欢迎来到这个游戏！"

    #转义字符
    c1"这是一个百分号%%"
    c1"这是一个花括号{{"
    c1"这是一个反斜杠\\"
    c1"这是一个换行符\n这是新的一行。"
    c1"这是双引号\",这是单引号\'"

    "x的值是：[x]"
    $ x = 1
    "现在x的值是：[x]"
    return

#每次运行游戏结束后都会跳转到这个标签(quit)
label quit:
    "你关闭了游戏。"
    return

#每次读档后都会跳转到这个标签(after_load)
label after_load:
    "你读档了游戏。"
    return

#每次游戏开始时都会跳转到这个标签(splashscreen)
label splashscreen:
    scene black
    
    show logo:
        xalign 0.5 #水平居中
        yalign 0.5 #垂直居中
        zoom 1.2  # 根据图片微调缩放，刚好铺满屏幕
    with dissolve
    #画面停留5秒 鼠标点击可以跳过
    pause 5
    #强制停留2.5秒，期间无法跳过
    #$ renpy.pause(2.5, hard=True)
    #隐藏logo 同时使用dissolve淡入淡出效果
    hide logo with dissolve
    return
```