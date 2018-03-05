import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 奇点
let state = {
  something: 1
}

// 万物法则
const mutations = {
  add (context) {
    // do something
  },
  sub () {
    // do something
  }
}

// 万物行止
const actions = {
  add (add) {
    add.commit('add')
  },
  sub (sub) {
    sub.commit('sub')
  },
  oddAdd ({commit, state}) {
    if (state.something % 2 === 0) {
      commit('add')
    }
  }
}

// 众神之瞳
const getters = {
  someThing (context) {
    return context.something
  },
  getOdd (context) {
    return context.something % 2 === 0 ? '偶数' : '奇数'
  }
}

// 泛宇宙
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
