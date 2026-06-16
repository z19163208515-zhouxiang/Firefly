---
title: Renpy 界面和界面语言
published: 2026-05-06
description: Galgame
tags: [Galgame制作,Renpy基本语法]
category: Renpy
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

```renpy
# ==================== 示例1：固定布局 ====================
screen mysc:
    # 固定布局 - 子元素使用绝对坐标定位（默认位置重叠）
    fixed:
        text "你好,界面"  # 显示文本，位置为左上角(0,0)

# ==================== 示例2：水平布局 ====================
screen mysc:
    frame:  # 带边框和背景的容器
        hbox:  # 水平盒子布局，子元素横向排列
            text "你好 界面"
            text "你好 界面"
            text "你好 界面"

# ==================== 示例3：垂直布局 ====================
screen mysc:
    frame:  # 带边框和背景的容器
        vbox:  # 垂直盒子布局，子元素纵向排列
            text "你好 界面"
            text "你好 界面"
            text "你好 界面"

# ==================== 示例4：网格布局 ====================
screen mysc:
    frame:  # 带边框和背景的容器
        grid 2 3:  # 创建2列3行的网格（注意：需要恰好6个子元素）
            text "你好"  # 第1行第1列
            text "你好"  # 第1行第2列
            text "你好"  # 第2行第1列
            text "你好"  # 第2行第2列
            text "你好"  # 第3行第1列
            text "你好"  # 第3行第2列

# ==================== 示例5：滚动区域 ====================
screen mysc:
    frame:
        xcenter 0.5   # 水平居中（屏幕宽度的50%位置）
        ycenter 0.5   # 垂直居中（屏幕高度的50%位置）
        xsize 640     # 框架宽度640像素
        ysize 360     # 框架高度360像素
        viewport:     # 可滚动视口区域
            xinitial 0.0      # X轴初始滚动位置（0=最左，1=最右）
            yinitial 1.0      # Y轴初始滚动位置（0=最上，1=最下）
            scrollbars "vertical"  # 显示垂直滚动条（水平滚动需改为"horizontal"并把vbox改成hbox）
            mousewheel True   # 允许使用鼠标滚轮滚动
            draggable True    # 允许鼠标拖动滚动（适用于手机端触摸拖动）
            pagekeys True     # 允许使用PageUp/PageDown翻页键
            side_yfill True   # 让滚动条填满视图高度
            vbox:
                spacing 200   # 子元素之间的间距（200像素）
                text "你好"
                text "你好"
                text "你好"
                text "你好"
                text "你好"
                text "你好"

# ==================== 示例6：按钮内嵌图像和文本 ====================
screen mysc:
    frame:
        xcenter 0.5   # 框架水平居中
        ycenter 0.5   # 框架垂直居中
        xsize 640     # 框架宽度
        ysize 360     # 框架高度
        button:       # 可点击按钮
            vbox:     # 按钮内部使用垂直布局
                add "images/tree.jpg" xcenter 0.5 ycenter 0.5  # 添加图像，并设置居中
                text "你好世界" size 40 outlines [(absolute(2), "#000000", absolute(1), absolute(1))] color "#ffffff"
                # 文本样式：字号40，黑色描边（粗细2像素），白色字体
            action Return('mysc')  # 点击按钮后返回'mysc'并关闭当前屏幕

# ==================== 图像定义 ====================
image mytree:
    "images/tree.jpg"  # 图像源文件路径
    xsize 500          # 限制图像宽度500像素
    ysize 600          # 限制图像高度600像素

image myblue:
    "images/blue.jpg"  # 图像源文件路径
    xsize 1920         # 限制图像宽度1920像素
    ysize 1080         # 限制图像高度1080像素

# ==================== 全局变量定义 ====================
define flag = 0         # 定义一个整数变量flag，初始值为0
define input_value = "" # 定义一个字符串变量input_value，初始值为空字符串

# ==================== 示例7：图像热点映射（imagemap） ====================
screen mysc:
    # 正确的 imagemap 写法
    imagemap:
        # 底图（必须）- 正常状态显示的图片
        ground "myblue"
        
        # 鼠标悬浮图 - 鼠标悬停时显示的图片
        hover "mytree"
        
        # 点击区域（X坐标, Y坐标, 宽度, 高度）
        hotspot (100, 200, 200, 100):
            action Return("mysc")  # 点击该区域后返回"mysc"并关闭屏幕
        
        # 让 imagemap 居中显示
        xalign 0.5
        yalign 0.5
    use mysc2  # 嵌入使用mysc2屏幕（将mysc2的内容显示在此处）

# ==================== 示例8：高级控件（进度条、输入框、图像按钮等） ====================
screen mysc2:
    zorder 2000  # 图层顺序，数值越大显示越靠前（越上层）
    modal True   # 模态窗口，打开时无法点击背后的其他屏幕内容
    frame:
        xcenter 0.5  # 框架水平居中
        ycenter 0.5  # 框架垂直居中
        xsize 640    # 框架宽度
        ysize 360    # 框架高度
        vbox:        # 垂直布局容器
            # ---------- 垂直进度条 ----------
            bar value AnimatedValue(value=flag, range=5, delay=1.0, old_value=None):
                # AnimatedValue: 带动画效果的数值
                # value=flag: 绑定到变量flag
                # range=5: 最大值为5
                # delay=1.0: 动画过渡时间1秒
                xsize 20      # 进度条宽度20像素
                ysize 200     # 进度条高度200像素
                bar_invert True   # 进度条反向填充（从底部向上）
                bar_vertical True # 垂直方向的进度条
            
            # ---------- 输入框 ----------
            frame:
                xsize 200   # 输入框框架宽度
                ysize 50    # 输入框框架高度
                input value VariableInputValue("input_value"):
                    # VariableInputValue: 绑定到变量input_value
                    length 5               # 最大输入长度5个字符
                    allow "1234567890"     # 只允许输入数字0-9
            
            # ---------- 图像按钮 ----------
            imagebutton:
                idle "mytree"      # 正常状态显示的图像
                hover "mytree"     # 鼠标悬停时显示的图像（这里用了同一张图）
                xcenter 0.5        # 按钮水平居中
                hovered SetVariable("flag", 1)   # 鼠标悬停时设置flag=1
                unhovered SetVariable("flag", 2) # 鼠标离开时设置flag=2
                action Return("mysc")  # 点击按钮后返回"mysc"并关闭屏幕
            
            # ---------- 文本按钮1 ----------
            textbutton "flag变成1":
                text_size 40   # 文字大小40像素
                # 文字描边效果：粗细2像素，颜色#effdff，横向偏移1像素，纵向偏移1像素
                text_outlines [(absolute(2), "#effdff", absolute(1), absolute(1))] 
                text_color "#ffffff"              # 正常状态文字颜色（白色）
                text_hover_color "#000000"        # 鼠标悬停时的文字颜色（黑色）
                text_selected_color "#32e0fc"     # 按钮被选中时的文字颜色（亮蓝色）
                action SetVariable("flag", 1)     # 点击按钮将flag变量设置为1
            
            # ---------- 文本按钮2 ----------
            textbutton "flag变成2":
                text_size 40   # 文字大小40像素
                # 文字描边效果：粗细2像素，颜色#effdff，横向偏移1像素，纵向偏移1像素
                text_outlines [(absolute(2), "#effdff", absolute(1), absolute(1))] 
                text_color "#ffffff"              # 正常状态文字颜色（白色）
                text_hover_color "#000000"        # 鼠标悬停时的文字颜色（黑色）
                text_selected_color "#32e0fc"     # 按钮被选中时的文字颜色（亮蓝色）
                action SetVariable("flag", 2)     # 点击按钮将flag变量设置为2
            
            # ---------- 显示变量值 ----------
            text "[flag]"  # 显示当前flag变量的值（文本插值语法）


#screen是在自己创建的myscreen.rpy中编写的
#call 调用屏幕 必须等玩家操作后才继续
call screen mysc
```