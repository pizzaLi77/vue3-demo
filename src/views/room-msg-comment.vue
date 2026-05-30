<script setup lang="ts">
import { inject } from 'vue'
//接收数据
const roomData = inject('data-key')
const countData = inject('count-key')
const setCountKey = inject('set-Count-key')
</script>

<template>
<div>底层组件</div>
  <div>来自顶层组件中数据为：{{roomData}}</div>
  <div>来自顶层组件中响应式数据为：{{countData}}</div>
  <div><button @click="setCountKey">接收来自顶层的方法修改顶层数据</button></div>
</template>

<style scoped>

</style>