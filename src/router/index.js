import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/booking',
    name: 'booking',
    component: ()=> import('../views/Booking.vue')
  },
  {
    path: '/vet',
    name: 'vet',
    component: ()=> import('../views/Vet.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
