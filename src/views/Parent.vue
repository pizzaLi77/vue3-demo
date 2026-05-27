<script setup lang="ts">
import { ref } from 'vue'
import Child from '@/components/Child.vue'

const showDialog = ref(false)         // 控制弹窗显示/隐藏
const editUser = ref({ name: '', role: '' })  // 当前要编辑的用户

const users = ref([
  { id: 1, name: '张三', role: '管理员' },
  { id: 2, name: '李四', role: '普通用户' },
  { id: 3, name: '王五', role: '运营' }
])

function openEdit(user: { name: string, role: string }) {
  editUser.value = user    // 把当前用户存起来
  showDialog.value = true  // 显示弹窗
}
</script>

<template>
  <div>
    <h2>用户管理 - 编辑弹窗示例</h2>

    <table border="1" cellspacing="0" cellpadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>角色</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.role }}</td>
          <td>
            <button @click="openEdit(user)">编辑</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 弹窗，把当前选中的用户数据传进去 -->
    <!-- @close="showDialog = false" 收到通知关闭弹窗-->
    <Child
      :visible="showDialog"
      :user-name="editUser.name"
      :user-role="editUser.role"
      @close="showDialog = false"
    />
  </div>
</template>

<style scoped>
table {
  width: 100%;
  max-width: 600px;
}
th, td {
  text-align: left;
}
</style>
