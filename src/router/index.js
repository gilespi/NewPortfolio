import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroComponent from "../components/HeroComponent";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HeroComponent,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("../views/AboutView"),
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView')
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
