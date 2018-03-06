
import * as types from '../sc-types.js'

const state = {
  menuTitle: '标准12',
  value: 0
}

const getters = {
  [types.DONE_MENT_TITLE]: state => state.menuTitle,
  [types.DONE_RESULT_VALUE]: state => state.value
}

const mutations = {
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}
