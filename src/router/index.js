import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
import PatientInformation from '@/pages/patient-information/patient-information'
import Insurance from '@/pages/insurance/insurance'
import Resources from '@/pages/resources/resources'
import Physicians from '@/pages/physicians/physicians'
import PhotoGallery from '@/pages/photo-gallery/photo-gallery'
import ContactUs from '@/pages/contact-us/contact-us'
import PageNotFound from '@/pages/404/404'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/patient-information',
      name: 'Patient Information',
      component: PatientInformation
    },
    {
      path: '/resources',
      name: 'Resources',
      component: Resources
    },
    {
      path: '/insurance',
      name: 'Insurance',
      component: Insurance
    },
    {
      path: '/physicians',
      name: 'Physicians',
      component: Physicians
    },
    {
      path: '/photo-gallery',
      name: 'Photo Gallery',
      component: PhotoGallery
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
