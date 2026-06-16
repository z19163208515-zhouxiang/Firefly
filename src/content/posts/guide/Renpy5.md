---
title: Renpy 人物动效 背景滤镜以及转场
published: 2026-05-05
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
#原位置溶解出场
transform dissolve_appear:
    alpha 0.0             # 初始状态：完全透明
    easein 0.4 alpha 1.0  # 动画：在0.3秒内，从不透明变为透明
#从左侧溶解出场
transform dissolve_left:
    # 初始状态：完全透明（看不见）
    alpha 0.0
    
    # 初始状态：向左偏移100像素（在原位左边100像素处）
    xoffset -100   #+100是从右侧溶解出场
    
    # 动画开始：使用缓动进入效果（慢→快），持续0.3秒
    easein 0.3:
        # 目标状态：完全不透明（完全可见）
        alpha 1.0
        
        # 目标状态：X轴偏移归零（回到原始位置）
        xoffset 0
#从上方溶解出场
transform dissolve_top:
    # 初始：完全透明
    alpha 0.0
    
    # 初始：向上偏移100像素（在原位上方100像素）
    yoffset -100   #+100从下方溶解出场
    
    # 动画：0.3秒内，慢→快
    easein 0.3:
        # 目标：完全不透明（可见）
        alpha 1.0
        
        # 目标：Y轴归零（回到原位）
        yoffset 0

#人物平滑移动
# 向右移动效果
transform move_right:
    xoffset 0                     # 起始位置：原位（X轴偏移0）
    linear 0.5 xoffset 200        # 0.5秒内匀速移动到X轴偏移200像素（向右移动200像素）

# 向左移动效果
transform move_left:
    xoffset 0                     # 起始位置：原位（X轴偏移0）
    linear 0.5 xoffset -200       # 0.5秒内匀速移动到X轴偏移-200像素（向左移动200像素）

# 向右边移动效果（带真实晃动）
transform move_left_real:
    parallel:
        # ===== 移动动画 =====
        xoffset 0              # 起始位置：原位（X轴偏移0）
        linear 2 xoffset 300   # 2秒内匀速移动到X轴偏移300像素（向右移动）
    parallel:
        # ===== 晃动动画 =====
        pause 0.05                # 延迟0.05秒开始晃动（让移动先启动）
        linear 0.15 yoffset -12   # 0.15秒内向上移动12像素（抬起）
        linear 0.15 yoffset 0     # 0.15秒内回到原位（落下）
        repeat 6               # 重复上述抬脚落地的动作6次（约1.8秒）加上延迟是1.85秒(延迟只有一次)
        # 注意：重复6次后晃动停止，移动动画还剩0.2秒继续移动但不再晃动

#视觉上由远到近的效果
# 从远处走近的效果
transform walk_closer:
    zoom 0.4          # 起始：缩小到40%（看起来在远处）
    yoffset 120       # 起始：向下偏移120像素（远处视觉）
    linear 0.7:       # 0.7秒内匀速变化
        zoom 1.0      # 结束：恢复正常大小（近处）
        yoffset 0     # 结束：回到原位
# 从近处走远的效果
transform walk_away:
    zoom 1.0          # 起始：正常大小（近处）
    yoffset 0         # 起始：原位
    linear 0.7:       # 0.7秒内匀速变化
        zoom 0.4      # 结束：缩小到40%（远处）
        yoffset 120   # 结束：向下偏移120像素（远处视觉）


# 镜头拉近（大头特写效果）
transform zoom_in:
    zoom 1.0              # 起始：原始大小（1.0倍）
    linear 0.5:           # 0.5秒内平滑变化
        zoom 1.8          # 结束：放大到1.8倍（大头效果）
        yoffset -100      # 结束：向上偏移100像素（让头部居中于屏幕）
# 镜头拉远（恢复原状）
transform zoom_out:
    zoom 1.8              # 起始：1.8倍（当前大头状态）
    yoffset -100          # 起始：向上偏移100像素
    linear 0.5:           # 0.5秒内平滑变化
        zoom 1.0          # 结束：恢复到原始大小
        yoffset 0         # 结束：偏移归零（回到原位）

#人物抖动效果
transform shake:
    linear 0.02 xoffset -5    # 0.02秒内：向左移动5像素
    linear 0.02 xoffset 5     # 0.02秒内：向右移动5像素
    linear 0.02 xoffset -5    # 0.02秒内：再向左移动5像素
    linear 0.02 xoffset 5     # 0.02秒内：再向右移动5像素
    linear 0.02 xoffset 0     # 0.02秒内：回到原位

#大幅度晃动效果
#地震效果（左右+上下同时晃动）
#持续地震（循环指定次数）
#地震效果（左右+上下同时晃动，持续约1.26秒）
transform earthquake:
    block:                          # 循环块开始
        parallel:                   # 同时执行以下动画
            # ===== 左右晃动 =====
            linear 0.03 xoffset -15    # 0.03秒内：向左移动15像素
            linear 0.03 xoffset 15     # 0.03秒内：向右移动15像素
            linear 0.03 xoffset -12    # 0.03秒内：向左移动12像素
            linear 0.03 xoffset 12     # 0.03秒内：向右移动12像素
            linear 0.03 xoffset -8     # 0.03秒内：向左移动8像素
            linear 0.03 xoffset 8      # 0.03秒内：向右移动8像素
            linear 0.03 xoffset 0      # 0.03秒内：回到原位
        
        parallel:                   # 同时执行以下动画
            # ===== 上下晃动 =====
            linear 0.03 yoffset -10    # 0.03秒内：向上移动10像素
            linear 0.03 yoffset 10     # 0.03秒内：向下移动10像素
            linear 0.03 yoffset -8     # 0.03秒内：向上移动8像素
            linear 0.03 yoffset 8      # 0.03秒内：向下移动8像素
            linear 0.03 yoffset -5     # 0.03秒内：向上移动5像素
            linear 0.03 yoffset 5      # 0.03秒内：向下移动5像素
            linear 0.03 yoffset 0      # 0.03秒内：回到原位
        
        repeat 3                    # 将上述动画重复3次（总时间约1.26秒）
#人物弹出出场
transform bounce_in:
    # === 初始状态（第0帧）===
    yoffset -50        # Y轴偏移-50像素（向上移动50像素）
    alpha 0.0         # 透明度0%（完全透明/不可见）
    zoom 0.5          # 缩放50%（原来大小的一半）
    
    # === 第一阶段：弹出（0 → 0.2秒）===
    easein 0.2:       # 缓动进入(开始慢，结束快)，持续0.2秒
        yoffset 0     # Y轴偏移归零（回到原始位置）
        alpha 1.0     # 透明度100%（完全不透明）
        zoom 1.0      # 缩放100%（原始大小）
    
    # === 第二阶段：轻微上弹（0.2 → 0.3秒）===
    easeout 0.1:      # 缓动退出(开始慢，结束快)，持续0.1秒
        yoffset -10   # Y轴偏移-10像素（向上弹10像素）
    
    # === 第三阶段：回位（0.3 → 0.4秒）===
    easein 0.1:       # 缓动进入，持续0.1秒
        yoffset 0     # Y轴偏移归零（回到原位)


# 溶解消失效果
#原位置溶解消失
transform dissolve_out:
    alpha 1.0              # 起始：完全不透明（完全可见）
    easeout 0.3 alpha 0.0  # 0.3秒内：逐渐变为完全透明（消失）

# 向左溶解消失（角色向左飘走并消失）
transform dissolve_out_left:
    alpha 1.0              # 起始：完全不透明（完全可见）
    xoffset 0              # 起始：原位（X轴偏移0）
    easeout 0.3:           # 0.3秒内缓动退出（先快后慢）
        alpha 0.0          # 结束：完全透明（消失）
        xoffset -100       # 结束：向左偏移100像素（向左飘走）

# 向右溶解消失（角色向右飘走并消失）
transform dissolve_out_right:
    alpha 1.0              # 起始：完全不透明（完全可见）
    xoffset 0              # 起始：原位（X轴偏移0）
    easeout 0.3:           # 0.3秒内缓动退出（先快后慢）
        alpha 0.0          # 结束：完全透明（消失）
        xoffset 100        # 结束：向右偏移100像素（向右飘走）


#背景上下黑款(电影感)
# 电影宽银幕效果（上下黑边）
transform cinema:
    yoffset 0          # Y轴偏移为0（保持原位，预留变换接口）


# 电影黑边屏幕
screen letterbox:
    # ===== 上黑边 =====
    frame:                          # 创建一个框架
        background "#000"           # 背景颜色：黑色（#000000）
        xsize 1920                  # 宽度：1920像素（全屏宽度）
        ysize 135                   # 高度：135像素
        xpos 0                      # X坐标：0（最左边）
        ypos 0                      # Y坐标：0（最顶部）
    
    # ===== 下黑边 =====
    frame:                          # 创建一个框架
        background "#000"           # 背景颜色：黑色
        xsize 1920                  # 宽度：1920像素（全屏宽度）
        ysize 135                   # 高度：135像素
        xpos 0                      # X坐标：0（最左边）
        ypos 945                    # Y坐标：945像素（1080-135=945，紧贴底部）


#背景切换转场效果
#溶解转场
scene bg room2 with  dissolve或Dissovle(0.4)#溶解秒数

#淡入淡出
scene bg room2 with fade

#向左推入
scene bg room2 with pushleft

#向右推入
scene bg room2 with pushright

#向上推入
scene bg room2 with pushup

#向下推入
scene bg room2 with pushdown

#擦除效果
scene bg room2 with wipeleft

#像素画场景
with pixellate

#从右侧/左侧进来
with moveinright/moveinleft
#曲速
with easeinright/easeinleft
#放大切入图像
with zoomin
#缩小离开图像
with zoomout
#先镜头放大切入后镜头缩小离开
with zoominout
with vpunch(垂直晃动)
with hpunch(水平摇晃)
with blinds(百叶窗转场)
with squares(密集正方形 类似像素)
with irisout(缩小转场)

#黑屏后转场
"""
Fade(淡出时间, 保持颜色,淡出时间,颜色)
"""
scene bg room2 with Fade(0.1, 0.1, 0.1,color="#000000")

#自定义转场
define mytran = ImageDissolve("图片路径",时间,渐变长度)#渐变长度取2的幂次方,越大越平滑
with mytran

#背景滤镜
#夜晚
scene bg forest:
    matrixcolor BrightnessMatrix(-0.3)
#变亮(白天)
scene bg forest:
    matrixcolor BrightnessMatrix(0.3)
#蓝色调(寒冷)
scene bg forest:
    matrixcolor TintMatrix("#6688CC")
#红色调(黄昏)
scene bg forest:
    matrixcolor TintMatrix("#FF8866")

#如何删除对话框(在screens.rpy 130行 下面添加) 
style window2:
    xalign 0.5
    xfill True
    yalign gui.textbox_yalign
    ysize gui.textbox_height
    background None
#去除对话边框(label标签中写)
$ style.say_window = style.window2



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
    xanchor 0
    yanchor 1
    xpos 400
    ypos 350
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
    scene blue with dissolve:
        #填满屏幕
        xsize 1920
        ysize 1080

    # 显示在屏幕中间的文字（带颜色、换行、注释）
    show expression Text(
    "时间过的很快\n要到黑夜了",  # 文字内容（\n 表示换行）
        xalign=0.5,                   #水平居中（屏幕中间）
        yalign=0.5,                   #垂直居中（屏幕中间）
        size=40,                      #文字大小（40像素）
        color="#FF0000" ,           #颜色
        outlines=[(2, "#000000", 0, 0)]  #边框     
) as center_text                  #给这个文字起个名字叫 center_text
    pause 5.0                         #暂停5秒（让文字显示5秒再继续）
    hide center_text                  #隐藏文字


    show blue :
        xsize 1920
        ysize 1080
        matrixcolor BrightnessMatrix(-0.3) #黑色滤镜(夜晚)


    show screen letterbox#添加电影黑框(在上面有定义)

    $ style.say_window = style.window2#去除对话边框
    "天气晴朗"
    scene tree with Fade(0.1, 0.1, 0.1):
        xsize 1920
        ysize 1080
    hide screen letterbox#隐藏电影黑框
    $ style.say_window = style.window  #恢复默认边框
    "大树"
    
    #show c1 at earthquake
        #可以修改动态效果(一定加冒号)
        #xoffset 0
        #linear 0.5 xoffset 800  # 0.5秒向右移动800像素
    #c1 "今天天气不错"
```