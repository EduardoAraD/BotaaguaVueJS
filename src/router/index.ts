import { createRouter, createWebHistory } from 'vue-router'

import HomeVue from '../page/HomeView.vue'
import CalendarVue from '../page/Calendar.vue'

const routes = [
  { path: '/', component: HomeVue },
  { path: '/calendario', component: CalendarVue },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
