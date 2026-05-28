---
title: Renpy
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

```python
game/
├── audio/          # 音频文件夹（背景音乐、音效、配音等）
├── gui/            # UI贴图文件夹
├── images/         # 图片文件夹
├── saves/          # 本机开发模式的存档
├── gui.rpy         # UI方面的设置
├── options.rpy     # 游戏基本设定（版本号、转场等）
├── screens.rpy     # 调节窗口的UI界面
├── script.rpy      # 脚本文件
└── .ttf            # 字体文件
```
```python
#定义游戏角色
define z = Character('周翔')
define e = Character('艾米丽')

#调整图片位置和大小
image blue:
    "images/blue.jpg"
    #缩放图片
    zoom 1.55

#调整人物位置和大小
image c1:
    "images/c1.png"
    #缩放图片
    zoom 0.35
    #设置图像锚点
    xanchor 0#设置图像水平锚点为左边
    yanchor 1#设置图像垂直锚点为底部
    #设置图像位置
    xpos 1000
    ypos 300
image c2:
    "images/c2.png"
    zoom 0.35
    xanchor 0
    yanchor 1
    xpos 800
    ypos 300

#也可以预定义音频路径
define qt = "audio/qt.mp3"

#定义flag标识
define flag = 0





label start:
    stop music fadeout 4#淡出时间为4秒 解决下面把音频去掉 主界面音乐会一直播放
#添加选项预备知识
#    python:#可多行赋值
#       flag = 1
#    "flag:[flag][qt]"#显示flag标识的值

#   $ flag = 2#设置flag标识为2
#    "flag:[flag]"#显示flag标识的值





    #scene 清除当前界面的所有图像 然后显示该图像
    scene blue 
    with fade#背景淡入淡出 先图后with特效

    #播放音频文件
# play music：背景音乐，单首循环，换新曲会自动替换
# play sound：短音效，可多个同时播放，不循环
# play voice：人物配音，一句接一句，自动打断上一条
# play audio：通用音轨，纯叠加，无特殊规则限制
    #play music qt fadein 2#淡入时间为2秒  把音频去掉 主界面音乐会一直播放(上面有解决方案)

    #show 显示角色(不会覆盖背景)
    show c1
    with dissolve#渐影显示角色c1

    voice "audio/mao.mp3"#角色配音
    #"角色名(在上面定义)""角色台词"
    z "你好 我叫周翔。"

    play sound "audio/qm.mp3"#敲门等游戏声音
    "敲门声"
    #停止音频
    stop sound
    stop music fadeout 3#淡出时间为3秒

    #hide 隐藏图片
    # hide c1 把c1角色隐藏 只保留c2角色

    #同时存在两个角色 调整位置
    show c1:#show c1 as c1_flipped(取类名)可以显示两张c1图片(互相独立) 其中c1_flipped是改变xpos的图片
        xpos 1000 #改变的是c1 as c1_flipped
    show c2:
        xpos 300
        xzoom -1#水平翻转图像
    with dissolve#渐影显示角色c2
    e """
    你好 我叫艾米丽。

    来自澳大利亚

    生活在一个小镇上
    """

#添加分支选项
    menu:
        "你想说些什么"#选项提示 加冒号可变成选项
        "我不相信你":
            $flag = 1 #选项后的操作
        "我相信你":
            "艾米丽""我喜欢你"
        "我既不相信也不否定你":
            $flag = 2 #选项后的操作
    "结束"
     
    #多种结局分支
    if flag == 1:
        jump s1
    elif flag == 2:
        "你选择了既不相信也不否定艾米丽。"
        "关系维持"
        "normal end"
    else:
        "你选择了相信艾米丽。"
        "关系加深"
        "good end"



    return

label s1:
    "你选择了不相信艾米丽。"
    "关系破裂"
    "bed end"
    return#表示游戏结束



#options.rpy中的设置项
#设置标题界面背景音乐
# define config.main_menu_music = "main-menu-theme.ogg" 60行代码

#设置文字显示速度 0为瞬间显示
#default preferences.text_cps = 0 代码115行

#取消鼠标回滚操作
#define config.rollback_enabled = False 在代码115行加入这段代码

#旁白不打断当前语音
# default preferences.voice_sustain = True 加入这段代码

#让语音播放时 背景音乐自动降低音量
#default preferences.emphasize_music = True
```