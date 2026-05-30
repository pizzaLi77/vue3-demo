<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { onMounted, reactive, ref, computed, watch } from 'vue'
import testCom from './TestCom.vue'
const router = useRouter()
const store = useUserStore()
const testComRef = ref(null)
function goToUserList() {
  router.push({
    path: '/user-list',
    query: {keyword : '张三', role: '管理员'}
  })
}

function gotoPatent() {
  store.setUser('李四', '普通用户')
  router.push({
    path: '/parent',
    query: {param1: 'home跳转parent参数1', param2: 'home跳转parent参数2'}
  })
}
onMounted(() => {
  localStorage.setItem('username2', 'localStorage名称1')
  console.log(testComRef.value)
})
//reactive 作用是接收对象类型数据并返回一个响应式对象
const state = reactive({
  count: 0
})
//ref 作用是接收简单类型或对象类型数据传入并返回一个响应式对象
const count1 = ref(0)
const count2 = ref(100)
const count3 = ref({name: '小pp', age: 24})
function setCount() {
  state.count++
}
function setCount1() {
  count1.value++
}
function setCount2() {
  count2.value++
}
const list = ref([1,2,3,4,5,6,7,8])
//computed计算函数，返回数组内大于2的元素，计算属性是只读的，避免在计算属性中做修改
const computList = computed(() => {
  return list.value.filter(item => item > 2)
})
//定时器 3s后执行
setTimeout(() => {
  list.value.push(9, 10)
}, 3000)
// watch函数,监听单个数据源
// watch(count1, () => {
//   console.log('count1变化了。。。')
// })

//immediate: true 立即执行，在执行前先触发一次回调，执行时机在dom还未渲染时就会执行一次
watch(count1, () => {
  console.log('count1变化了。。。')
}, {
  immediate: true
})

// watch(count1, (newValue, oldValue) => {
//   console.log('count1变化了。。。', newValue, oldValue)
// })

// watch监听多个数据源
// watch(
//     [count1, count2],
//     (
//         [newCount1, newCount2],
//         [oldCount1, oldCount2]
//     ) => {
//       console.log('count1或count2发生变化了', [newCount1, newCount2], [oldCount1, oldCount2])
//     }
// )

// watch(count3, () => {
//   console.log('count3变化了。。。。')
// })

// watch(count3, () => {
//   console.log('count3变化了。。。。')
// }, {
//   //开启深度监听 默认会监听对象中所有属性变化
//   deep: true
// })
function setCount3() {
  count3.value.name = '小fff'
}
//监听对象中某个属性的变化
watch(
    () => count3.value.age,
    () => {
      console.log('count3中age属性发生了变化')
}
)
function setCount3Age() {
  count3.value.age = 32
}


function gotoPatent1() {
  //store.setUser('小绿', '小绿绿')
  router.push({
    path: '/parent1'
  })
}
function goaHeadPassDate() {
  router.push({
    path: '/aheadPass'
  })
}
</script>

<template>
  <div>
    <h1>首页</h1>
    <p>欢迎</p>
    <div><button @click="goToUserList">跳转到user-list</button></div>
    <div><button @click="gotoPatent">跳转父传子路由示例</button></div>
    <div><button @click="gotoPatent1">跳转父传子路由示例1</button></div>
    <div><button @click="goaHeadPassDate">跨组件传递数据</button></div>
    <div>{{store.name}}</div>
    <div>{{store.role}}</div>
    <div><button @click="setCount">count增加</button>{{state.count}}</div>
    <div><button @click="setCount1">count1增加</button>{{count1}}</div>
    <div><button @click="setCount2">count2增加</button>{{count2}}</div>
    <div><button @click="setCount3">count3修改</button>{{count3}}</div>
    <div><button @click="setCount3Age">count3修改age属性</button>{{count3}}</div>
    <div>{{list}}</div>
    <div>{{computList}}</div>
    <testCom ref="testComRef"/>
  </div>
</template>

<style scoped>
</style>
