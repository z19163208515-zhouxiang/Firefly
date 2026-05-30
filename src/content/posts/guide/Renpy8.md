---
title: Renpy 研究院(一些高级效果)[Renpy->end]
published: 2026-05-31
description: Galgame
tags: [Galgame制作,Renpy语法]
category: Galgame制作
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

```renpy
#定义一个显示角色的变换(at使用)
transform show_rolo(x = 0.5):
    xcenter 0.5
    ycenter 0.8
    zoom 0.5


#自定义文本位置
image credits_text = ParameterizedText(style = "credits_text")
#定义credits_text样式(自定义文本样式)
style credits_text:
    font "SourceHanSansLite.ttf"
    size 40
    color "#000000"
    #outlines [(2, "#000000", 0, 0)]
    text_align 0.5
    xcenter 0.5
    ycenter 0.5


#图像变换效果
#给图像旧相片效果(scene bg1Sepia/bg1Blur使用)
image bg1Sepia = im.Sepia("images/bg1.webp")
#高斯模糊
image bg1Blur = im.Blur("images/bg1.webp", 3.0)



#是否开启二周目
define persistent.second = False



#雪花效果
image snow = SnowBlossom("c2_cg1",count=40,border=10,xspeed=(-2,50),yspeed=(20,30),start=0,fast=True,horizontal=False)



define e = Character("艾琳")
image bg1:
    "bg1.webp"
    xsize 1920
    ysize 1080


define flag = True


label start:
    scene bg1Sepia:#旧相片效果
        xsize 1920
        ysize 1080

    show c2_cg1 at show_rolo

    e "你好，我是艾琳。"
    $ flag = False
    e "修改了flag为False"
    hide c2_cg1

    window hide(None)
    window auto#y隐藏对话框

    show black:
        alpha 0.0#透明度为0
        linear 0.7 alpha 0.7#0.7秒内透明度从0到0.7
        linear 0.7 alpha 0.7
        
    show credits_text "你真的想退出游戏吗？"#自定义文本位置
    pause 2#暂停2秒
    show credits_text "祝你过的愉快"
    $ renpy.pause(2,hard=True)#必须暂停2秒
    
    #雪花
    show snow

    #判断是否开启二周目
    if persistent.second:
        e "这是你的第二周目"
    else:
        e "你完成了第一周目 重开游戏"
        $ persistent.second = True
    return
```