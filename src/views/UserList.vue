<script setup lang="ts">
import {ref, computed, onMounted, reactive} from 'vue'
import { useRoute } from 'vue-router'
const loading = ref(false)
const keyword = ref('')
const currentPage = ref(1)
const pageSize = ref(5)
const route = useRoute()
const dialogVisible = ref(false)

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

const editForm = reactive({
  id: null,
  name: '',
  role: '',
  status: ''
})

const saveUser = () => {
  const index = users.value.findIndex(item => item.id === editForm.id)

  if (index !== -1) {
    users.value[index] = {
      id: editForm.id,
      name: editForm.name,
      role: editForm.role,
      status: editForm.status
    }
  }

  dialogVisible.value = false
}

const openEditDialog = (user) => {
  editForm.id = user.id
  editForm.name = user.name
  editForm.role = user.role
  editForm.status = user.status

  dialogVisible.value = true
}
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
        <button @click="openEditDialog(user)">编辑</button>
      </td>
    </tr>
    </tbody>
  </table>
</div>

  <div v-if="dialogVisible" class="dialog-mask">
    <div class="dialog">
      <h3>编辑用户</h3>

      <div class="form-item">
        <label>姓名：</label>
        <input v-model="editForm.name" />
      </div>

      <div class="form-item">
        <label>角色：</label>
        <input v-model="editForm.role" />
      </div>

      <div class="form-item">
        <label>状态：</label>
        <select v-model="editForm.status">
          <option value="启用">启用</option>
          <option value="禁用">禁用</option>
        </select>
      </div>

      <div class="dialog-footer">
        <button @click="dialogVisible = false">取消</button>
        <button @click="saveUser">保存</button>
      </div>
    </div>
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

.dialog-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog {
  width: 360px;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
}

.form-item {
  margin-bottom: 12px;
}

.form-item label {
  display: inline-block;
  width: 60px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>