<template>
  <!-- standard_calc-box -->
  <div class="scb">
    <!-- s:scb-left-->
    <main class="scb-left" @click="Monitor($event)">
      <!-- s:显示屏 -->
      <div class="scb-resulted">
        <input type="text"
               name=""
               :value="DONE_RESULT_STR"
               readonly="readonly"
               disabled="disabled"
        />
      </div>
      <div class="scb-resultVal">
        <input type="text"
               name=""
               :value="DONE_RESULT_VALUE"
               readonly="readonly"
               disabled="disabled"
        />
      </div> <!-- e:显示屏 -->
      <!-- s:存储运算键列 -->
      <section class="scb-memorybtls">
        <input type="button" title="内存清除" class="memorybt" disabled="disabled" value="MC" />
        <input type="button" title="内存读取" class="memorybt" disabled="disabled" value="MR" />
        <input type="button" title="内存添加" class="memorybt" value="M+" />
        <input type="button" title="内存减少" class="memorybt" value="M-" />
        <input type="button" title="内存存储" class="memorybt" value="MS" />
      </section> <!-- e:存储运算键列 -->
      <!-- s:数字以及运算符键列 -->
      <section class="scb-numbtls">
        <input type="button" class="numbtl" value="%" />
        <input type="button" class="numbtl" value="√" />
        <input type="button" class="numbtl" value="x²" />
        <input type="button" class="numbtl" value="½" />
        <input type="button" class="numbtl" value="CE" />
        <input type="button" class="numbtl" value="C" />
        <input type="button" class="numbtl" value="B" />
        <input type="button" class="numbtl" value="÷" />
        <input type="button" class="numbtl num" value="7" />
        <input type="button" class="numbtl num" value="8" />
        <input type="button" class="numbtl num" value="9" />
        <input type="button" class="numbtl" value="×" />
        <input type="button" class="numbtl num" value="4" />
        <input type="button" class="numbtl num" value="5" />
        <input type="button" class="numbtl num" value="6" />
        <input type="button" class="numbtl" value="-" />
        <input type="button" class="numbtl num" value="1" />
        <input type="button" class="numbtl num" value="2" />
        <input type="button" class="numbtl num" value="3" />
        <input type="button" class="numbtl" value="+" />
        <input type="button" class="numbtl" value="±" />
        <input type="button" class="numbtl num" value="0" />
        <input type="button" class="numbtl num" value="." />
        <input type="button" class="numbtl" value="=" />
      </section><!-- e:数字以及运算符键列 -->
    </main><!-- e:scb-left-->
    <!-- s:scb-right-->
    <div class="scb-right">
        <!-- s:内存 历史记录 tabs -->
        <ul class="scb-right-hmtabs" @click="toggleTab($event,'historyRecord','memoryRecord');modifyActiveClass($event,'historyRecord','memoryRecord','active')">
            <li id="historyRecord" class="active">历史记录</li>
            <li id="memoryRecord">内存记录</li>
          <li class="move"> </li>
        </ul><!-- e:内存 历史记录 tabs -->
        <memory-record :is="currentTab" keep-alive></memory-record>
    </div><!-- e:scb-right-->

  </div>
</template>

<script>
import memoryRecord from './MemoryRecord'
import historyRecord from './HistoryRecord'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'StandardCalc',
  components: {
    historyRecord,
    memoryRecord
  },
  data () {
    return {
      currentTab: 'historyRecord'
    }
  },
  filters: {
  },
  computed: {
    ...mapGetters([
      'DONE_RESULT_VALUE',
      'DONE_OLD_VALUE',
      'DONE_NEW_VALUE',
      'DONE_PROCESS_STR',
      'DONE_RESULT_STR',
      'DONE_ARITHMETIC_SYMBOL',
      'DONE_ISCHANGE_RESULT_VALUE',
      ' DONE_ISCANRUN'
    ])
  },
  methods: {
    ...mapMutations([
      'TOGGLE_RESULT_VALUE',
      'TOGGLE_OLD_VALUE',
      'TOGGLE_NEW_VALUE',
      'TOGGLE_PROCESS_STR',
      'TOGGLE_ARITHMETIC_SYMBOL',
      'TOGGLE_RESULT_STR',
      'TOGGLE_ISCHANGE_RESULT_VALUE',
      'TOGGLE_ISCANRUN'
    ]),
    // 感觉可以整合到一个函数，但是如果考虑单一职责原则的话。。。
    // 切换标签页
    toggleTab (event, tab0, tab1) {
      if (event.target.id === tab0) {
        this.currentTab = tab0
      } else if (event.target.id === tab1) {
        this.currentTab = tab1
      }
    },
    // 切换标签页导航栏 active Class
    modifyActiveClass (event, tab0, tab1, myclass) {
      if (event.target.id === tab0) {
        document.getElementById(tab1).classList.remove(myclass)
        event.target.classList.add(myclass)
      } else if (event.target.id === tab1) {
        document.getElementById(tab0).classList.remove(myclass)
        event.target.classList.add(myclass)
      }
    },
    run () {
      // 获取相关值
      let symbol = this.DONE_ARITHMETIC_SYMBOL
      let oldValue = this.DONE_OLD_VALUE
      let newValue = this.DONE_NEW_VALUE
      // 如果 运算符号 为空
      if (symbol === '') {
      } else if (symbol === '+') {
        console.log('this is symbol === + :' + 'oldValue:' + oldValue + 'newValue:' + newValue)
        // 更新显示器
        this.TOGGLE_RESULT_VALUE(
          parseFloat(oldValue) + parseFloat(newValue)
        )
      } else if (symbol === '-') {
        // 更新显示器
        this.TOGGLE_RESULT_VALUE(
          parseFloat(oldValue) - parseFloat(newValue)
        )
      } else if (symbol === '×') {
        // 更新显示器
        this.TOGGLE_RESULT_VALUE(
          parseFloat(oldValue) * parseFloat(newValue)
        )
      } else if (symbol === '÷') {
        // 更新显示器
        this.TOGGLE_RESULT_VALUE(
          parseFloat(oldValue) / parseFloat(newValue)
        )
      }
    },
    // 执行器
    numActuator (ev) {
      // 数字字符串拼接
      // 如果已经有小数点的话
      if (ev === '.' && this.DONE_RESULT_VALUE.indexOf('.') > -1) {
        console.log('非法小数点已被截获')
        return false
      }
      // 拼接还是替代
      if (this.DONE_ISCHANGE_RESULT_VALUE) {
        // 拼接
        let resultVal = this.DONE_RESULT_VALUE
        resultVal += ev
        // 更新显示器
        this.TOGGLE_RESULT_VALUE(resultVal)
        // 更新代算值
        this.TOGGLE_NEW_VALUE(resultVal)
        // 获取运算过程
        let processStr = this.DONE_PROCESS_STR
        // 拼接运算过程
        processStr += resultVal
        // 更新运算过程
        this.TOGGLE_PROCESS_STR(processStr)
      } else {
        // 替换
        // 更新显示器
        this.TOGGLE_RESULT_VALUE(ev)
        // 新值
        this.TOGGLE_NEW_VALUE(ev)
        // 运算过程
        this.TOGGLE_PROCESS_STR(ev)
      }
      // 按了数字键后是允许  + - * /触发 run() 函数的
      // this.TOGGLE_ISCANRUN(true)
    },
    symbolActuator (ev) {
      // 设置运算符
      this.TOGGLE_ARITHMETIC_SYMBOL(ev)
      // 新值转给旧值 以代新值
      this.TOGGLE_OLD_VALUE(this.DONE_NEW_VALUE)
      // 获取运算过程
      let processStr = this.DONE_PROCESS_STR
      // 拼接运算过程
      processStr += ev
      // 更新运算过程
      this.TOGGLE_PROCESS_STR(processStr)
      // 更新过程显示器
      this.TOGGLE_RESULT_STR(processStr)
      // 避免重复触发
      // this.TOGGLE_ISCANRUN(false)
    },
    functionActuator (ev) {
      if (ev === 'C') {
        // 恢复初始状态
        // this.TOGGLE_RESULT_VALUE('0')
        // this.TOGGLE_OLD_VALUE('')
        // this.TOGGLE_NEW_VALUE('')
      } else if (ev === 'CE') {
        // 清除当前行
        // this.TOGGLE_RESULT_VALUE('0')
      } else if (ev === 'B') {
        // 清除最后一个字符
        // let resultValue = this.DONE_RESULT_VALUE
        // if (resultValue !== '0') {
        //   resultValue = [...resultValue]
        //   resultValue.pop()
        //   this.TOGGLE_RESULT_VALUE(resultValue.join(''))
      } else if (ev === '%') {

      } else if (ev === '√') {

      } else if (ev === 'x²') {

      } else if (ev === '½') {

      } else if (ev === '±') {

      } else if (ev === '=') {
        // 将 isChangeRValue 设置为 false 以表示 resultValue可以被"替代"
        // this.TOGGLE_ISCHANGE_RESULT_VALUE(true)
        // 调用运算器
        this.run()
      }
    },
    // 事件监听分发中心
    Monitor (event) {
      // console.log(this.$options.data.buttons)
      // 保存上下文
      let that = this
      // 保存触发源的 value
      let eValue = event.target.value
      // 调用事件分类函数
      let eventClass = this.$options.methods.eventClassIfier(eValue)
      // 分发事件
      let distribute = function (ec) {
        // console.log(that.$el)
        let ecs = {
          'num': that.numActuator,
          'symbol': that.symbolActuator,
          'function': that.functionActuator,
          'memory': function () {
            return 'run'
          }
        }
        if (typeof ecs[ec] !== 'function') {
          return false
        }
        // 调用执行器
        return ecs[ec](eValue)
      }
      // 传入触发事件的按钮类型
      distribute(eventClass)
    }
  },
  // 页面渲染完毕时（不保证子组件）
  mounted () {
    // 获取 所以input 键列的Value属性的值 类型为数组
    // 内存操作按钮
    const memorybtlsValueArr = [...document.querySelectorAll(
      '.scb-memorybtls input[type=button]'
    )].map(item => {
      return item.value
    })
    // 数字 功能 符号按钮
    const numbtlsValueArr = [...document.querySelectorAll(
      '.scb-numbtls input[type=button]'
    )].map(item => {
      return item.value
    })
    // 返回值为 '.' 和 number 组成的数组
    // 数字按钮
    const numArr = numbtlsValueArr.filter(item => {
      return item === '.' || !Number.isNaN(Number.parseInt(item))
    })
    // console.log(numArr)
    // 符号按钮
    const symbolArr = numbtlsValueArr.filter(item => {
      return item === '+' || item === '-' || item === '×' || item === '÷'
    })
    // 功能按钮
    // 三数组去重 感觉还可以改下 不写这么死
    let functionTemp = ((ar0, ar1, ar2) => {
      let temF = function (arr0, arr1) {
        let temArr0 = []
        let temArr1 = []
        let temArr2 = []
        if (arr0.length > arr1.length) {
          temArr0 = arr0
          arr0 = arr1
          arr1 = temArr0
          temArr0 = []
        }
        for (let i = 0; i < arr0.length; i++) {
          temArr0[arr0[i]] = true
        }
        for (let i = 0; i < arr1.length; i++) {
          if (!temArr0[arr1[i]]) {
            temArr1.push(arr1[i])
          }
        }
        temArr2 = temArr1
        temArr1 = []
        temArr0 = []
        return temArr2
      }
      return temF(temF(ar0, ar1), ar2)
    })(numbtlsValueArr, numArr, symbolArr)
    // 深拷贝以辅助闭包释放
    const [...functionArr] = functionTemp
    // console.log(functionArr)
    // 释放闭包
    functionTemp = null
    this.$options.methods.eventClassIfier = function (ev) {
      if (numArr.some(item => item === ev)) {
        // 是数字按钮
        return 'num'
      } else if (symbolArr.some(item => item === ev)) {
        // 是符号按钮
        return 'symbol'
      } else if (functionArr.some(item => item === ev)) {
        // 是功能按钮
        return 'function'
      } else if (memorybtlsValueArr.some(item => item === ev)) {
        // 是内存操作按钮
        return 'memory'
      } else {
        return false
      }
    }
  }
}
</script>

<style>
/*弹性盒子布局*/
.scb {
  display: flex;
  position: absolute;
  top: 60px;
  bottom: 0;
  left:0;
  right:0;
}
/*左栏自适应*/
.scb-left {
  flex: 1;
  margin-top: 30px;
  height: 100%;
}
/*右栏定宽*/
.scb-right {
  margin-top: -20px;
  height: calc(100%+20px);
  width: 244px;
}
/*显示器样式*/
.scb-resulted input,
.scb-resultVal input{
  border: none;
  width: 100%;
  text-align: right;
}
.scb-resulted input {
  padding-right: 30px;
  font-size: 14px;
}
.scb-resultVal input {
  padding-right: 16px;
  font-size: 50px;
  color: rgba(0,0,0,1);
}
/*标签导航样式*/
.scb-right-hmtabs li {
  font-size: 15px;
  font-weight: bold;
  display: inline;
  list-style-type: none;
  padding: 0 8px;
  text-align: center;
}
/*辅助移动的下划线定位*/
.scb-right-hmtabs {
  position: relative;
}
/*活动样式*/
.active {
  color:red;
}
/*下划线移动*/
.move{
  height: 4px;
  width: 66px;
  position: absolute;
  top: 20px;
  left: 5px;
  transition: left .2s ease-in-out 0s;
}
li:nth-child(1):hover~ .move{
    left: 5px;
    border-top: 4px solid green;
}
li:nth-child(2):hover~ .move{
    left: 85px;
    border-top: 4px solid green;
}
/*内存操作按钮*/
.scb-memorybtls {
  width: 100%;
  max-width: 407px;
}
.scb-memorybtls .memorybt {
  border: none;
  margin-left: 5px;
  padding: 5px 18px;
}
/*运算操作按钮*/
.scb-numbtls {
  position: absolute;
  top: 140px;
  bottom: 30px;
  left: 0;
  right: 0;
  margin: 0 244px 0 4px;

}
.scb-numbtls .numbtl {
  border: none;
  background: rgba(240, 240, 240,1);
  margin-left: 1px;
  margin-top: 4px;
  width: 23%;
  padding: 0px 0;
  height: 16.6666%;

  font-size: 20px;
}
.scb-numbtls .numbtl.num {
  font-weight: bold;
  background: rgba(250, 250, 250,1);
}
.scb-memorybtls .memorybt:hover,
.scb-numbtls .numbtl:hover {
  background: rgba(209, 209, 209,1);
}
</style>
