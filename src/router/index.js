import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
    },
    {
      path: '/about/about-us',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
    },
    {
      path: '/about/flexibility-and-service',
      name: 'flexibility-and-service',
      component: () => import(/* webpackChunkName: "about" */ '../views/flexibility-and-service.vue')
    },
    {
      path: '/about/central-quality',
      name: 'central-quality',
      component: () => import(/* webpackChunkName: "about" */ '../views/central-quality.vue')
    },
    {
      path: '/products/complete-projects',
      name: 'complete-projects',
      component: () => import(/* webpackChunkName: "about" */ '../views/complete-projects.vue')
    },
    {
      path: '/products/greenhouse-construction',
      name: 'greenhouse-construction',
      component: () => import(/* webpackChunkName: "about" */ '../views/greenhouse-construction.vue')
    },
    {
      path: '/products/screening',
      name: 'screening',
      component: () => import(/* webpackChunkName: "about" */ '../views/screening.vue')
    },
    {
      path: '/products/climate',
      name: 'climate',
      component: () => import(/* webpackChunkName: "about" */ '../views/climate.vue')
    },
    {
      path: '/air-energy',
      name: 'air-energy',
      component: () => import(/* webpackChunkName: "about" */ '../views/air-energy.vue')
    },
    {
      path: '/work-at',
      name: 'work-at',
      component: () => import(/* webpackChunkName: "about" */ '../views/work-at.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ '../views/contact.vue')
    },
    {
      path: '/tax-exemption',
      name: 'tax-exemption',
      component: () => import(/* webpackChunkName: "about" */ '../views/tax-exemption.vue')
    },
    {
      path: '/shipping-information',
      name: 'shipping-information',
      component: () => import(/* webpackChunkName: "about" */ '../views/shipping-information.vue')
    }
   
]  



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
      next({ name: 'login', query: { to: to.path } });
    } else {
      next()
    }
  })
  
  export default router
  