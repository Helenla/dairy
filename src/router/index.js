import Vue from 'vue'

import Router from 'vue-router'

import Login from '@/components/login'
import Registered from '@/components/Registered'
import index from '@/components/dairy'
import person from '@/components/personMsg'
import showDairy from '@/components/dairy/showDairy'
import addDairy from '@/components/dairy/addDairy'
import node from '@/components/node/node'
import book from '@/components/book/book'

Vue.use(Router)



export default new Router({
  routes: [
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
      component: index,
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/showDairy',
      name: 'showDairy',
      component: showDairy
    },
    {
      path: '/addDairy',
      name: 'addDairy',
      component: addDairy
    },
    {
      path: '/node',
      name: 'node',
      component: node
    },
    {
      path: '/book',
      name: 'book',
      component: book
    }

  ]
})
