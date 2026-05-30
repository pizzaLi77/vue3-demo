<script setup lang="ts">
import { ref } from 'vue'
const aa = ref(' hello TestCom')
//默认情况下<script setup>语法糖下组件内部属性和方法是不开放给父组件访问的，可以通过defineExpose编译宏
//指定哪些属性和方法允许访问
defineExpose({
  aa
})
</script>

<template>
 <div>TestCom 页面</div>
</template>

<style scoped>

</style>