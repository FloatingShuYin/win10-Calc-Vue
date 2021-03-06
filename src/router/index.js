import Vue from 'vue'
import Router from 'vue-router'
// 标准计算器
import StandardCalc from '@/components/StandardCalc'
// 科学计算器
import ScientificCalc from '@/components/ScientificCalc'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'RootPath',
    redirect: '/StandardCalc'
  },
  {
    path: '/StandardCalc',
    name: 'St',
    component: StandardCalc
  },
  {
    path: '/ScientificCalc',
    name: 'Sc',
    component: ScientificCalc
  }
]

export default new Router({
  // routes: routes
  routes
})
