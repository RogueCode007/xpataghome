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
    path: '/home',
    redirect: "/home/categories",
    component: () => import("@/views/HomeBase"),
    children: [
      {
        path: '/home/categories',
        name: 'Categories',
        component: () => import ("@/views/Categories")
      },
      {
        path: '/home/subcategories',
        name: 'Subcategories',
        component: () => import ("@/views/Subcategories")
      },
      {
        path: '/home/services',
        name: 'Services',
        component: () => import ("@/views/Services")
      },
      {
        path: '/home/profile/:id',
        name: 'Profile',
        component: () => import ("@/views/Profile")
      },
      {
        path: '/home/service',
        redirect: '/home/service/booking',
        component : () => import("@/views/Service/Service"),
        children: [
          {
            path: '/home/service/booking',
            component : () => import("@/views/Service/Booking"),
          },
          {
            path: '/home/service/about',
            component : () => import("@/views/Service/About"),
          },
          {
            path: '/home/service/reviews',
            component : () => import("@/views/Service/Reviews"),
          },
        ]
      },
      {
        path: "/home/howitworks",
        component: () => import ("@/views/HowItWorks")
      },
      {
        path: "/home/aboutus",
        component: () => import ("@/views/AboutUs")
      },
    ]
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
