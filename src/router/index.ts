import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/calc'
  },
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'calc'
      },
      {
        path: 'calc',
        name: 'Calculator',
        component: () => import('@/views/CalculatorView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/AboutView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
