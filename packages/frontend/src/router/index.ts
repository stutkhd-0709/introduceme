import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/users',
      name: 'userList',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/users/:id',
      name: 'user',
      component: () => import('../views/Home.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  // storeはcomponent内部でしか呼び出せない
  // routerはコンポーネント内部なので問題ない
  const { isLoggedIn } = useAuthStore()
  if (to.name != 'login' && !isLoggedIn) next({ name: 'login' })
  else next()
})

export default router
