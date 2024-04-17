import { createRouter, createWebHistory } from 'vue-router'

import HomeVue from '../page/HomeView.vue'
import CalendarVue from '../page/Calendar.vue'
import MatchVue from '../page/Match/Match.vue'

const routes = [
  { path: '/', component: HomeVue },
  { path: '/calendario', component: CalendarVue },
  { path: '/calendario/:id', component: MatchVue },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
