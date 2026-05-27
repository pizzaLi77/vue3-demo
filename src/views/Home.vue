<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function goToUserList() {
  router.push({
    path: '/user-list',
    query: {keyword : '张三', role: '管理员'}
  })
}
</script>

<template>
  <div>
    <h1>首页</h1>
    <p>欢迎</p>
    <div><button @click="goToUserList">跳转到user-list</button></div>
  </div>
</template>

<style scoped>
</style>
