import ChatView from '@/views/ChatView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ChatView
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('@/views/accountView.vue')
    }
  ]
})

export default router
