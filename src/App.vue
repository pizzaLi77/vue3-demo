<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav>
<!-- RouterLink相当于<a>标签，但其点击事件被Vue Router拦截了，不会触发浏览器刷新只切换页面内容     -->
      <RouterLink to="/">首页</RouterLink> |
      <RouterLink to="/user-list">用户列表</RouterLink> |
      <RouterLink to="/parent">父传子示例</RouterLink>
    </nav>
    <hr>
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  padding: 12px;
}
</style>
