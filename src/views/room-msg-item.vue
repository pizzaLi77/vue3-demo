<script setup lang="ts">
import { provide, ref, inject } from 'vue'
import RoomMsgComment from './room-msg-comment.vue'

//接收数据
const roomData = inject('data-key')
const countData = inject('count-key')
</script>

<template>
  <div>中间层组件</div>
  <div>来自顶层组件中数据为：{{roomData}}</div>
  <div>来自顶层组件中响应式数据为：{{countData}}</div>
  <div>--------------------</div>
  <RoomMsgComment />
</template>

<style scoped>

</style>