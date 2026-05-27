# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

Vue 3 学习项目，基于 Vite 脚手架创建，逐步扩展中。

## 技术栈

- **框架**: Vue 3 (Composition API + `<script setup>`)
- **构建工具**: Vite 8
- **语言**: TypeScript
- **状态管理**: Pinia
- **路由**: Vue Router 4 (Hash 模式)
- **类型检查**: vue-tsc

## 常用命令

```sh
npm run dev      # 启动开发服务器 (热更新)
npm run build    # 类型检查 + 生产构建
npm run preview  # 预览生产构建
npm run type-check  # 仅类型检查
```

## 目录结构

```
src/
├── router/        # 路由配置
├── stores/        # Pinia 状态管理
├── views/         # 页面级组件
├── App.vue        # 根组件（导航 + RouterView）
└── main.ts        # 应用入口
```

## 路径别名

`@/` 映射到 `src/`，例如 `import Home from '@/views/Home.vue'`

## 代码风格

- `<script setup lang="ts">` 写法
- 组件名使用 PascalCase（如 `UserList.vue`）
- 样式默认加 `scoped`
- 路由组件支持懒加载（`() => import(...)`）

## 注意点
- 当前开发者是从后端转全栈，现在在学习前端相关知识，用户问到某些问题时，以后端思维去讲解更利于用户学习理解前端知识
- 不要随便改动代码，改之前一定要问