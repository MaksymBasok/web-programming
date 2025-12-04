import { createRouter, createWebHistory } from 'vue-router'

import Onboarding1 from '@/views/Onboarding1.vue'
import Onboarding2 from '@/views/Onboarding2.vue'
import Onboarding3 from '@/views/Onboarding3.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    { path: '/', component: Onboarding1 },
    { path: '/onboarding-2', component: Onboarding2 },
    { path: '/onboarding-3', component: Onboarding3 },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
  ]
})
