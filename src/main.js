// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由库入口文件 index.js
import router from './router'
// 引入状态管理库入口文件 index.js
import store from './store'
// 引入焦点事件托管指令
import { focus } from 'vue-focus'
// 引入Animate.css动画库
import './assets/css/Animate3.6.0.css'

Vue.config.productionTip = false
// 注册全局焦点事件托管指令
Vue.directive('focus', focus)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
