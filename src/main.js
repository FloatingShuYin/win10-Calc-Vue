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
// 注册全局过滤器 用于格式化 过程显示器以及历史记录 中 显示的字符格式
// 注水字符串 哈哈 咳咳
Vue.filter('wateriInjectionStr', (value, symbolArr) => {
  // console.log('this is value in wateriInjectionStr: ' + value)
  let charArr = [...value]
  // 深拷贝
  let [...resultArr] = charArr
  // 由于resultArr也会动态变长 计下数方便注水
  let count = 0
  // 如果 charArr 中的 元素 为 + - * / 符号
  // 则在其深拷贝数组 resultArr 对应位置的前后插入空格 " "
  // !!! 为什么我的双重循环时先用 j 后用 i呢？这不符合国际惯例啊！
  // !! 因为我起先也是 先用i 后用j 的
  // 后来看效果 这个过滤器时好时坏 ！！！ 我想了半个多小时，然后就把内外循环调换了一下位置
  // 终于好了 如果有人看到这里 请把内外循环调换位置 你就知道 这个BUG是多么的坑了！！！
  for (let j = 0; j < charArr.length; j++) {
    for (let i = 0; i < symbolArr.length; i++) {
      if (symbolArr[i] === charArr[j]) {
        // 前
        resultArr.splice((j + count), 0, ' ')
        // 后
        resultArr.splice((j + count + 2), 0, ' ')
        // 计数
        count += 2
      }
    }
  }
  // console.log('this is resultArr in wateriInjectionStr: ' + resultArr)
  return resultArr.join('')
  // F(['1','2','+','3','2','*','2','2','='],['+','-','*','/'])
})
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
