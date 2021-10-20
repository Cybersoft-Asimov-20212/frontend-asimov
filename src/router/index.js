import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'announcements',
    component: () => import(/* webpackChunkName: "about" */ '@/announcements/pages/announcements')
  },
  {
    path: '/teachers',
    name: 'teachers',
    component: () => import(/* webpackChunkName: "about" */ '@/teachers/pages/teachers')
  },
  {
    path: '/teachers/:id',
    name: 'teacher-detail',
    component: () => import('@/teachers/pages/teacher-detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
