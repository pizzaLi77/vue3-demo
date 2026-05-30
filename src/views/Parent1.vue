<script setup lang="ts">
import Child1 from './Child1.vue'
import { ref } from 'vue'
const flag = ref(false)
function funcShowChild() {
  flag.value = true
}
const now1 = ref(0)
setTimeout(() => {
  now1.value = 200
})
const getMessage = (msg) => {
  console.log(msg)
}
</script>

<template>
 <div>父组件</div>
  <div><button @click="funcShowChild">点击展示子组件</button></div>
  <div v-show="flag">
<!--父组件绑定传递数据-->
<!--注  now1是响应式对象写法前面加冒号, message是非响应式写法不加冒号 -->
  <Child1 :now1="now1" message="father message" @get-message="getMessage"/>
  </div>
</template>

<style scoped>

</style>