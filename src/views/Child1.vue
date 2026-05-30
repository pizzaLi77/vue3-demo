<script setup lang="ts">
//子组件接收数据
const prop = defineProps({
  message: String,
  now1: Number
})
console.log('父传子数据：', prop)
//初始化子传父对象，并初始化事件名称 与父组件定义的事件名一致
const emit = defineEmits(['get-message'])
function sendMessageFather() {
  //触发自定义时间，将消息传给父函数
  emit('get-message', 'this son message')
}
</script>

<template>
  <div>子组件</div>
  <div>父组件传入的数据：{{message}} --- {{now1}}</div>
  <div><button @click="sendMessageFather">子传父消息</button></div>
</template>

<style scoped>

</style>