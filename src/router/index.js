import Vue from 'vue'
import Router from 'vue-router'
// 标准计算器
import StandardCalc from '@/components/StandardCalc'
// 科学计算器
import ScientificCalc from '@/components/ScientificCalc'

Vue.use(Router)

const routes = [
  { path: '/', redirect: '/StandardCalc' },
  { path: '/StandardCalc', component: StandardCalc },
  { path: '/ScientificCalc', component: ScientificCalc }
]

export default new Router({
  // routes: routes
  routes
})
