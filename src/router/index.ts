import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tradingpost',
    name: 'TradingPost',
    component: () => import('../views/TradingPost.vue')
  },
  {
    path: '/blackmarket',
    name: 'BlackMarket',
    component: () => import('../views/BlackMarket.vue')
  },
  {
    path: '/combination',
    name: 'BlackMarket',
    component: () => import('../views/Combination.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
