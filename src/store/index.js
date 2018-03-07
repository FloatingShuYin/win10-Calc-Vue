import Vue from 'vue'
import Vuex from 'vuex'
import scdata from './modules/sc-data.js'

Vue.use(Vuex)

console.log('Vuex严格模式已启动，请在发布上线阶段前关闭，src/store/index.js:7:10')
export default new Vuex.Store({
  // 严格模式
  strict: true,
  // 注册 scdata 模块
  modules: {
    scdata
  }
})
