
import * as types from '../sc-types.js'

const state = {
  // 当前使用的计算器/转换器名
  menuTitle: '标准',
  // 返回到显示器的值 （结果）
  resultValue: '0',
  // resultValue 改变时的备份
  tempValue: '',
  // 旧值
  oldValue: '',
  // 新值
  newValue: '',
  // 记录运算过程
  processStr: '',
  // 返回到显示器的值 （过程）
  resultStr: '',
  // 历史记录
  resultHistoryArr: [],
  // 运算符号
  symbol: '+',
  // resultValue值 能否被拼接
  isChangeRValue: false,
  // processStr 能否被拼接
  isChangePStr: false,
  // 表示+ - * /能否触发run()运算
  isCanRun: false
}

const getters = {
  [types.DONE_MENT_TITLE]: state => state.menuTitle,
  [types.DONE_RESULT_VALUE]: state => state.resultValue,
  [types.DONE_OLD_VALUE]: state => state.oldValue,
  [types.DONE_NEW_VALUE]: state => state.newValue,
  [types.DONE_PROCESS_STR]: state => state.processStr,
  [types.DONE_RESULT_STR]: state => state.resultStr,
  [types.DONE_RESULT_HISTORY_ARR]: state => state.resultHistoryArr,
  [types.DONE_TEMP_VALUE]: state => state.tempValue,
  [types.DONE_ARITHMETIC_SYMBOL]: state => state.symbol,
  [types.DONE_ISCHANGE_RESULT_VALUE]: state => state.isChangeRValue,
  [types.DONE_ISCHANGE_PROCESS_STR]: state => state.isChangePStr,
  [types.DONE_ISCANRUN]: state => state.isCanRun
}

const mutations = {
  [types.TOGGLE_MENT_TITLE]: (state, newMentTitle) => {
    state.menuTitle = newMentTitle
  },
  [types.TOGGLE_RESULT_VALUE]: (state, newResultValue) => {
    state.resultValue = newResultValue
  },
  [types.TOGGLE_OLD_VALUE]: (state, newOldValue) => {
    state.oldValue = newOldValue
  },
  [types.TOGGLE_NEW_VALUE]: (state, newNewValue) => {
    state.newValue = newNewValue
  },
  [types.TOGGLE_PROCESS_STR]: (state, newProcessStr) => {
    state.processStr = newProcessStr
  },
  [types.TOGGLE_RESULT_STR]: (state, newResultStr) => {
    state.resultStr = newResultStr
  },
  [types.TOGGLE_RESULT_HISTORY_ARR]: (state, newResultHistoryArr) => {
    state.resultHistoryArr.push(newResultHistoryArr)
  },
  [types.TOGGLE_TEMP_VALUE]: (state, newTempValue) => {
    state.tempValue = newTempValue
  },
  [types.TOGGLE_ARITHMETIC_SYMBOL]: (state, newSymbol) => {
    state.symbol = newSymbol
  },
  [types.TOGGLE_ISCHANGE_RESULT_VALUE]: (state, newV) => {
    state.isChangeRValue = newV
  },
  [types.TOGGLE_ISCHANGE_PROCESS_STR]: (state, newV) => {
    state.isChangePStr = newV
  },
  [types.TOGGLE_ISCANRUN]: (state, newV) => {
    state.isCanRun = newV
  }
}
/** 本地数据同步驱动 非异步 注释之
const actions = {
}
**/
export default {
  state,
  getters,
  mutations
  // actions
}
