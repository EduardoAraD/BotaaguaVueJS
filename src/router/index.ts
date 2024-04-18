import { createRouter, createWebHistory } from 'vue-router'

import HomeVue from '../page/HomeView.vue'
import CalendarVue from '../page/Calendar.vue'
import MatchVue from '../page/Match/Match.vue'
import ListNews from '../page/ListNews.vue'
import NewsDetails from '../page/NewsDetails.vue'
import Stadium from '../page/Stadium.vue'

const routes = [
  { path: '/', component: HomeVue },
  { path: '/calendario', component: CalendarVue },
  { path: '/calendario/:id', component: MatchVue },
  { path: '/noticias', component: ListNews },
  { path: '/noticias/:id', component: NewsDetails },
  { path: '/clube/estadio', component: Stadium }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
