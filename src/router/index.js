import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login'
import Registered from '@/components/Registered'
import index from '@/components/index'
import person from '@/components/personMsg'
import dairy from '@/components/dairy/dairy'
import node from '@/components/node/node'
import book from '@/components/book/book'
import joke from '@/components/OtherServices/joke'
import news from '@/components/OtherServices/News'
import common from '@/components/OtherServices/common'

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
      path: '/dairy',
      name: 'dairy',
      component: dairy
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
    },
    {
      path: '/joke',
      name: 'joke',
      component: joke
    },
    {
      path: '/common',
      name: 'common',
      component: common
    },
    {
      path: '/news',
      name: 'news',
      component: news
    }

  ]
})
