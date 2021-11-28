import Vue from 'vue'
import VueRouter from 'vue-router'

import Clock from "../views/Clock.vue"
import Statistics from "../views/Statistics.vue"
import Explore from "../views/Explore.vue"
import My from "../views/My.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/clock',
  },
  {
    path:'/clock',
    component:Clock
  },
  {
    path:'/statistics',
    component:Statistics
  },
  {
    path:'/explore',
    component:Explore
  },
  {
    path:'/my',
    component:My
  }

]

const router = new VueRouter({
  routes
})

export default router
