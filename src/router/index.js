import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/AboutView.vue'),    
    },
    {
      path: '/user/:id/albums',
      name: 'albums',
      component:() => import('../views/AboutView.vue')
    },
    {
      path:'/user/:id/posts',
      name:'posts',
      component:() => import('../views/AboutView.vue')
    }
  ]
})

export default router
