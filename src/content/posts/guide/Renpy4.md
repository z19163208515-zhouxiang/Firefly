---
title: Renpy高级图像变换及其语言
published: 2026-05-27
description: Galgame
tags: [Galgame制作,Renpy基本语法]
category: Galgame制作
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

```renpy
#定义角色
#what_ 对话正文文本样式  who_ 角色区域样式
#size文本大小 color颜色 outlines外边框[(粗细,颜色)] 或 [(粗细,颜色,X偏移,Y偏移)]
#font字体 prefix前缀 suffix后缀 image图像 bold粗体
#image头像
define c1 = Character("艾米丽",
what_size=35,who_size=45,
who_color="#FF7A00",what_color="#F8C8DC",
who_outlines=[(4,"#9D00FF",1,1)],
who_prefix="\"",who_suffix="\"",what_prefix="[[",what_suffix="]",
what_bold=True,what_font="shanhaigesangzhuomaw.ttf",
#头像
image="c1",
#Ctc
ctc="ctc",ctc_position="nestled"
)
image ctc:
    "images/ctc.png"
    zoom 0.15


#--------------------
#头像(ill1是标签 c1是头像名,与什么image="c1"对应)
#四张头像各自独立
#必须设置默认头像
image side c1:
    "images/c1_ill1_tx.png"
image side c1 tx1:
    "images/c1_ill1_tx.png"
image side c1 tx2:
    "images/c1_ill2_tx.png"
image side c1 tx3:
    "images/c1_ill3_tx.png"
image side c1 tx4:
    "images/c1_ill4_tx.png"

#角色图像的自动切换(把side去掉 路径改为立绘路径)
#添加一个溶解变化
define config.say_attribute_transition = dissolve
#立绘
#必须设置默认立绘
image c1:
    "images/c1_ill1.png"
image c1 tx1:
    "images/c1_ill1.png"
image c1 tx2:
    "images/c1_ill2.png"
image c1 tx3:
    "images/c1_ill3.png"
image c1 tx4:
    "images/c1_ill4.png"


#=-------------------
#立绘
# image c1_ill1:
#     "images/c1_ill1.png"
#     zoom 1.3
#     xanchor 0
#     yanchor 1
#     xpos 600
#     ypos 300
# image c1_ill2:
#     "images/c1_ill2.png"
#     zoom 1.3
#     xanchor 0
#     yanchor 1
#     xpos 600
#     ypos 300
# image c1_ill3:
#     "images/c1_ill3.png"
#     zoom 1.3
#     xanchor 0
#     yanchor 1
#     xpos 600
#     ypos 300
# image c1_ill4:
#     "images/c1_ill4.png"
#     zoom 1.3
#     xanchor 0
#     yanchor 1
#     xpos 600
#     ypos 300




label start:
    scene blue:
        #填满屏幕
        xsize 1920
        ysize 1080
    show c1
    c1 "今天天气不错"
    c1 tx1 "早上好"
    c1 tx2 "今天中午吃什么"#show c1 tx2 + side c1 tx2
    c1 tx3 "不知道吗"
    c1 tx4 "我也不知道"
    jump start2
    return
#原理:
# 当你写:
# 角色名 + 属性 + 说话
# 比如:
# c1 tx2 "你好"
# Ren'Py 自动帮你做两件事：
# 1. 自动切换立绘（show c1 tx2）
# 2. 自动切换头像（side c1 tx2）
# 你不用写 show
# 系统自动帮你换
# 二、为什么会这样
# 因为你写了
# define c1 = Character(..., image="c1")
# image="c1" 的意思就是:
# 让这个角色 = 控制立绘 + 控制头像
label start2:
    show c1
    c1 tx2 "今天在干嘛"
```