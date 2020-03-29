import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Blog.vue'),
  },
  {
    path: "/blog/:postId",
    name: "PostDetail",
    component: () => import("@/views/PostDetail")
  },
  {
    path: "/blog/posts/add-post",
    name: "AddPost",
    component: () => import("@/views/AddPost")
  },
  { path: '*', component: () => import('@/views/NotFound.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
