import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Registered from '@/components/Registered'
import index from '@/components/dairy'
import person from '@/components/personMsg'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/Registered',
      name: 'Registered',
      component: Registered
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },

  ]
})
