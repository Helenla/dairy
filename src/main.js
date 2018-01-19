// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import MintUI from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'

import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
// 引入css动画库
import './assets/animate.min.css'

import App from './App'
import router from './router/index'

import store from './store/store.js';

Vue.use(MintUI)
Vue.use(ElementUI)

import api from '@/api.js';//挂载api
Vue.prototype.$api=api;

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// export default vue;