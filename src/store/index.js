import Vue from 'vue'
import Vuex from 'vuex'
import scdata from './modules/sc-data.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    scdata
  }
})
