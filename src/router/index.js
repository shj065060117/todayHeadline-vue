import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import aboutus from '@/components/aboutus'
import product from '@/components/product'
import successcase from '@/components/successcase'
import news from '@/components/news'
import join from '@/components/join'
import recruit from '@/components/recruit'
import contactus from '@/components/contactus'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/successcase',
      name: 'successcase',
      component: successcase
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/join',
      name: 'join',
      component: join
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: recruit
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: contactus
    }
  ]
})
