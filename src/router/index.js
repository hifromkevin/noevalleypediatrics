import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
import AboutUs from '@/pages/about-us/about-us'
import GetStarted from '@/pages/get-started/get-started'
import Treatments from '@/pages/treatments/treatments'
import ContactUs from '@/pages/contact-us/contact-us'
import PageNotFound from '@/pages/404/404'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/get-started',
      name: 'get started',
      component: GetStarted
    },
    {
      path: '/treatments',
      name: 'treatments',
      component: Treatments
    },
    {
      path: '/Contact-us',
      name: 'Contact',
      component: ContactUs
    },
    {
      path: '/*',
      name: 'page-not-found',
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
