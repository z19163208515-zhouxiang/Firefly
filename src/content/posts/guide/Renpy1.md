---
title: Renpy使用前准备
published: 2026-05-01
description: Galgame
tags: [Galgame制作,Renpy用法]
category: Renpy
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

# Ren'Py 游戏开发环境搭建与打包指南

## 一、准备工作

### 1. 下载 Ren'Py 引擎

[Ren'Py 8.5.3](https://www.renpy.org/latest.html) - 下载 Ren'Py 视觉小说引擎

### 2. 下载 VSCode 编辑器

[Visual Studio Code](https://code.visualstudio.com/) - 下载 VS Code 编辑器

安装以下扩展：
- **Chinese** - 中文语言包
- **Ren'Py Language** - Ren'Py 语言支持扩展

---

## 二、创建工程

1. 打开 Ren'Py 引擎
2. 点击**创建新项目**
3. 输入项目名称（必须使用**英文、下划线**，**开头不能是数字**）
4. 基础分辨率和其他选项选择**默认**
5. 在文件管理器中找到创建的项目，用 VSCode 打开 `game` 文件夹

### script.rpy 基础配置

```renpy
# 游戏的脚本可置于此文件中。

# 声明此游戏使用的角色。颜色参数可使角色姓名着色。
define e = Character("艾琳")

# 游戏在此开始。
label start:
    e "您已创建一个新的 Ren'Py 游戏。"
    
    e "当您完善了故事、图片和音乐之后，您就可以向全世界发布了！"

    return
```

---

## 三、构建 PC 安装包

1. 打开 Ren'Py 主界面
2. 点击**构建发行版**
3. 选择要构建的分发包类型
4. 点击**构建**

---

## 四、构建安卓 .apk 安装包（需要 VPN）

### Step 1：安装 Java 开发环境

1. 访问 [Adoptium](https://adoptium.net/zh-CN/) 下载 Java 安装包
2. 安装时，勾选"安装在本地硬盘上"（点击下面树中的图标可更改功能的安装方式）

### Step 2：下载 Android 命令行工具

1. 下载地址：https://dl.google.com/android/repository/commandlinetools-win-11076708_latest.zip
2. 将 `rapt` 文件夹中的 `.tmp` 文件删除
3. 把下载的压缩包文件移动到 `rapt` 文件夹中

### Step 3：修改 download.rpy 文件

在 Ren'Py 安装的文件夹中搜索 `download.rpy`

用 VSCode 打开 `download.rpy`，找到以下代码位置并添加内容：

```python
def check(self):
    """
    Returns True if the download is finished, False if it was cancelled,
    None if it's ongoing, and raises an Exception if the download has failed.
    """
    # 在下面添加以下代码（注意与下方 if 对齐）
    if os.path.exists(self.dest):
        return True
```

添加完成后，点击**安装 SDK** 即可。

### Step 4：生成密钥

1. 点击**生成密钥**
2. 输入你的名称或组织的名称
3. 密钥会在你的游戏名文件夹中生成，包括以下文件：
   - `android.keystore`
   - `bundle.keystore`

### Step 5：配置安卓项目

1. 在安装 Ren'Py 的文件夹中找到 **The Question** 文件夹
2. 复制其中 **除了 `game` 文件夹**以外的所有文件
3. 粘贴到你的 Ren'Py 项目文件夹下的游戏名文件夹中
4. 选择**不要替换文件**（复制后可设置你的PC游戏图标）
5. 安卓图标在Renpy下载目录 rapt 中的 templates 中修改
6. 在 Ren'Py 界面点击**安卓** → 点击**配置**
7. 输入以下信息：
   - 应用全名
   - 简称
   - 包名称

### Step 6：下载 Gradle

1. 下载地址：https://services.gradle.org/distributions/gradle-8.5-bin.zip
2. 移动到 `C:\用户\<你的用户名>\.gradle\wrapper\dists\gradle-9.1.0-bin\` 中的乱码文件夹中
3. 把过程中的其他文件全部删除

---

## 注意事项

| 项目 | 要求 |
|------|------|
| 项目名称 | 英文、下划线、开头不能是数字 |
| 构建安卓包 | 需要 VPN 网络环境 |
| Java 安装 | 必须安装在本地硬盘 |
| 密钥生成 | 妥善保管生成的 `.keystore` 文件 |