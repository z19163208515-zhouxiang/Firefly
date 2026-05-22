---
title: Waline 评论系统 SQL 管理命令
published: 2026-05-22
description: Waline 评论用户、评论、点赞、批量管理 SQL 语句合集
tags: [SQL,数据库]
category: 博客工具
image: "api"
draft: false
toc: true
mathjax: false
comments: true
---

# Waline 评论系统 SQL 管理笔记

适用于：PostgreSQL / MySQL / Cloudflare D1  
管理表：`wl_comment` 评论表、`wl_users` 用户表

---

## 一、彻底删除用户 + 所有评论（最常用）
先删除评论，再删除用户，无数据残留。

```sql
-- 第一步：删除指定用户的所有评论
DELETE FROM wl_comment
WHERE user_id IN (
SELECT id FROM wl_users
WHERE display_name IN ('思绪', '飞速崛起', 'MKASA')
);

-- 第二步：彻底删除用户账号
DELETE FROM wl_users
WHERE display_name IN ('思绪', '飞速崛起', 'MKASA');


-- 根据评论昵称删除评论
DELETE FROM wl_comment
WHERE nick IN ('思绪','MKASA','飞速崛起');

-- 查看多人评论（按时间倒序）
SELECT * FROM wl_comment
WHERE nick IN ('思绪', '飞速崛起', 'MKASA')
ORDER BY createdat DESC;

-- 将管理员评论移动到 /guestbook/ 页面
UPDATE wl_comment
SET url = '/guestbook/'
WHERE nick = '管理员';

-- 清空留言板点赞
UPDATE wl_comment
SET "like" = 0
WHERE url = '/guestbook/';

-- 清空所有评论（不可恢复！）
TRUNCATE TABLE wl_comment;

-- 封禁指定用户
UPDATE wl_users
SET status = 'banned'
WHERE display_name IN ('用户名1','用户名2');

-- 解封用户
UPDATE wl_users
SET status = 'normal'
WHERE display_name = '用户名';

-- 单条评论置顶
UPDATE wl_comment
SET sticky = 1
WHERE id = 评论ID;

-- 取消评论置顶
UPDATE wl_comment
SET sticky = 0
WHERE id = 评论ID;

-- 统计总评论数
SELECT COUNT(*) AS 评论总数 FROM wl_comment;

-- 统计注册用户总数
SELECT COUNT(*) AS 用户总数 FROM wl_users;

-- 修改单条评论内容
UPDATE wl_comment
SET comment = '新评论内容'
WHERE id = 评论ID;

-- 重置全站所有评论点赞
UPDATE wl_comment SET "like" = 0;