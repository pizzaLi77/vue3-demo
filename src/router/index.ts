import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(), //路由模式
  routes: [   //路由表
    {
      path: '/',  //路径声明
      name: 'home', //路由名称
      component: Home //对应路由到的.vue页面
    },
    {
      path: '/user-list',
      name: 'user-list',
      component: () => import('@/views/UserList.vue') //懒加载，提高首页打开速度
    },
    {
      path: '/parent',
      name: 'parent',
      component: () => import('@/views/Parent.vue')
    },
    {
      path: '/parent1',
      name: 'parent1',
      component: () => import('@/views/Parent1.vue')
    },
    {
      path: '/aheadPass',
      name: 'aheadPass',
      component: () => import('@/views/room-page.vue')
    }
  ]
})

export default router
