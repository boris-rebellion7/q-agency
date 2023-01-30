import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: HomePage
  },
  {
    path: '/posts',
    name: 'post-page',
    component: () => import('../views/PostPage.vue')
  },
  {
    path: '/post/:id',
    name: 'inner-post',
    component: () => import('../views/InnerPost.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
