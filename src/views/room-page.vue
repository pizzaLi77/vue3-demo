<script setup lang="ts">
import { provide, ref } from 'vue'
import RoomMsgItem from './room-msg-item.vue'
//组件嵌套关系
//room-page -> room-msg-item -> room-msg=comment
//顶层提供数据
provide('data-key', 'this is top data')
//传递响应式数据
const count = ref(0)
provide('count-key', count)
setTimeout(() => {
  count.value = 100
}, 5000)
//传递方法
function setCount() {
  count.value++
}
provide('set-Count-key', setCount)
</script>

<template>
  <div>顶层组件</div>
  <div>--------------------</div>

  <RoomMsgItem />

</template>

<style scoped>

</style>