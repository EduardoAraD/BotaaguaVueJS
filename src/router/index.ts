import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../page/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
