---
title: Renpy 一个简单的主界面(模板)
published: 2026-05-30
description: Galgame
tags: [Galgame制作,Renpy模板]
category: Renpy
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---
```renpy
# =====================================================
# 主界面 myscreen.rpy
# Ren'Py 8.5.3
# =====================================================

# =====================================================
# 背景图片
# =====================================================

image b:
    "images/a.jpg"
    xsize 1920
    ysize 1080

# =====================================================
# 主菜单
# =====================================================

screen main_menu():

    tag menu

    # 背景
    add "b"

    # 半透明遮罩
    frame:
        background "#00000066"
        xysize (1920, 1080)

    # 游戏标题
    vbox:

        xpos 120
        ypos 140

        spacing 10

        text "进击的爱情":
            size 72
            color "#FFFFFF"
            bold True

        text "视觉小说\n剧本:周翔":
            size 28
            color "#CCCCCC"

    # 左侧菜单
    vbox:

        xpos 130
        ypos 420

        spacing 18

        textbutton "开始游戏":
            action Start()
            text_style "menu_btn_text"

        textbutton "读取存档":
            action ShowMenu("load")
            text_style "menu_btn_text"

        textbutton "保存游戏":
            action ShowMenu("save")
            text_style "menu_btn_text"

        textbutton "设置":
            action ShowMenu("preferences")
            text_style "menu_btn_text"

        textbutton "角色":
            action ShowMenu("character")
            text_style "menu_btn_text"

        textbutton "关于":
            action ShowMenu("about")
            text_style "menu_btn_text"

        textbutton "退出游戏":
            action Quit(confirm=True)
            text_style "menu_btn_text"

    # 版本信息
    text "Ver 1.26\nWriter:周翔":

        xpos 1700
        ypos 1000

        size 22
        color "#AAAAAA"


# =====================================================
# 按钮文字样式
# =====================================================

style menu_btn_text:

    size 34

    color "#FFFFFF"

    hover_color "#FFD966"


# =====================================================
# 按钮基础样式
# =====================================================

style button:

    background None
    hover_background None

    xminimum 320
    yminimum 55


# =====================================================
# 角色界面
# =====================================================

screen character():

    tag menu

    add "b"

    frame:
        background "#00000088"
        xysize (1920, 1080)

    text "角色介绍":

        xpos 100
        ypos 60

        size 60

        color "#FFFFFF"

        bold True

    # 角色列表
    vbox:

        xpos 120
        ypos 180

        spacing 30

        text "林若雪":
            size 40
            color "#FFFFFF"

        text "高冷学姐，喜欢独处。":
            size 28
            color "#DDDDDD"

        text "夏小雨":
            size 40
            color "#FFFFFF"

        text "活泼少女，总是充满元气。":
            size 28
            color "#DDDDDD"

    # 返回按钮
    textbutton "返回":

        xpos 1600
        ypos 920

        action Return()

        text_style "menu_btn_text"
```