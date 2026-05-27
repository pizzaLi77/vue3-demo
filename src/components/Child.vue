<script setup lang="ts">
/*尖括号 <> 是 TypeScript 泛型：defineProps
  这个函数接收一个"类型参数"，而不是普通的"值参数"。你传进去的是"类型声明"，而不是"运行时对象"。*/
defineProps<{
  visible: boolean
  userName: string
  userRole: string
}>()
// 声明要触发的事件，这块只是做了声明告诉我有这个能力，真正触发是在cancel方法中的emit('close')逻辑中
// 声明close父组件就需要监听这个close然后执行相应的动作
const emit = defineEmits<{
  (e: 'close'): void   // 告诉父组件：我要关了，你改 visible 吧
}>()

function cancel() {
  emit('close') //通知父组件
}
</script>

<template>
  <!-- 遮罩层 + 弹窗 -->
  <div v-if="visible" style="
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.4);
    display: flex; align-items: center; justify-content: center;
  ">
    <div style="
      background: #fff; border-radius: 8px; padding: 24px;
      min-width: 360px;
    ">
      <h3>编辑用户</h3>
      <p>用户名：<strong>{{ userName }}</strong></p>
      <p>角　色：<strong>{{ userRole }}</strong></p>
      <hr>
      <button disabled>保存（演示，暂不可用）</button>
      <button style="margin-left: 8px;" @click="cancel()">取消</button>
    </div>
  </div>
</template>
