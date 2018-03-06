<template>
  <!-- standard_calc-box -->
  <div class="scb">
    <!-- s:scb-left-->
    <main class="scb-left">
      <!-- s:显示屏 -->
      <div class="scb-resulted">
        <input type="text"
               name=""
               value="我将显示运算过程啦"
               readonly="readonly"
               disabled="disabled"
        />
      </div>
      <div class="scb-resultVal">
        <input type="text"
               name=""
               value="0"
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
  methods: {
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
