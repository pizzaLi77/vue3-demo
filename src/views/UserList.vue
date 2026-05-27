<script setup lang="ts">
import {ref, computed, onMounted} from 'vue'
import { useRoute } from 'vue-router'
const loading = ref(false)
const keyword = ref('')
const currentPage = ref(1)
const pageSize = ref(5)
const route = useRoute()
const users = ref([
  { id: 1, name: '张三', role: '管理员', status: '启用' },
  { id: 2, name: '李四', role: '普通用户', status: '禁用' },
  { id: 3, name: '王五', role: '运营', status: '启用' },
  { id: 4, name: '赵六', role: '财务', status: '启用' },
  { id: 5, name: '小明', role: '普通用户', status: '启用' },
  { id: 6, name: '小红', role: '运营', status: '禁用' }
])
onMounted(() => {
  console.log('页面加载完成，在此位置请求列表窗口')
  console.log(route.query.keyword)
  console.log(route.query.role)
})

</script>

<template>
<div class="page">
  <h2>用户管理</h2>
  <div class="toolbar">
    <input v-model="keyword" placeholder="请输入用户名搜索">
    <button>搜索</button>
  </div>

  <table border="1" cellspacing="0" cellpadding="8">
    <thead>
    <tr>
      <th>ID</th>
      <th>姓名</th>
      <th>角色</th>
      <th>状态</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in users" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.role }}</td>
      <td>{{ user.status }}</td>
      <td>
        <button>编辑</button>
      </td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<style scoped>
.page {
  padding: 24px;
}

.toolbar {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}
</style>