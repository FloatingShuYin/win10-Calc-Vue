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
        <input type="button" class="memorybt" disabled="disabled" value="MC" />
        <input type="button" class="memorybt" disabled="disabled" value="MR" />
        <input type="button" class="memorybt" value="M+" />
        <input type="button" class="memorybt" value="M-" />
        <input type="button" class="memorybt" value="MS" />
        <input type="button" class="memorybt" value="M" />
      </section> <!-- e:存储运算键列 -->
      <!-- s:数字以及运算符键列 -->
      <section class="scb-numbtls">
        <input type="button" class="numbtl" value="%" />
        <input type="button" class="numbtl" value="√" />
        <input type="button" class="numbtl" value="x&sup2;" />
        <input type="button" class="numbtl" value="1/x" />
        <input type="button" class="numbtl" value="CE" />
        <input type="button" class="numbtl" value="C" />
        <input type="button" class="numbtl" value="B" />
        <input type="button" class="numbtl" value="&divide;" />
        <input type="button" class="numbtl num" value="7" />
        <input type="button" class="numbtl num" value="8" />
        <input type="button" class="numbtl num" value="9" />
        <input type="button" class="numbtl" value="&times;" />
        <input type="button" class="numbtl num" value="4" />
        <input type="button" class="numbtl num" value="5" />
        <input type="button" class="numbtl num" value="6" />
        <input type="button" class="numbtl" value="-" />
        <input type="button" class="numbtl num" value="1" />
        <input type="button" class="numbtl num" value="2" />
        <input type="button" class="numbtl num" value="3" />
        <input type="button" class="numbtl" value="+" />
        <input type="button" class="numbtl" value="&plusmn;" />
        <input type="button" class="numbtl num" value="0" />
        <input type="button" class="numbtl num" value="." />
        <input type="button" class="numbtl" value="=" />
      </section><!-- e:数字以及运算符键列 -->
    </main><!-- e:scb-left-->
    <!-- s:scb-right-->
    <div class="scb-right">
        <!-- s:内存 历史记录 tabs -->
        <ul class="scb-right-hmtabs">
          <li @click="toggleTab('historyRecord');addActiveClass('active',$event)" tabindex="1" @blur="removeActiveClass('active',$event)"><a>历史记录</a></li>
          <li @click="toggleTab('memoryRecord');addActiveClass('active',$event)" tabindex="1" @blur="removeActiveClass('active',$event)"><a>内存记录</a></li>
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
    toggleTab (tab) {
      this.currentTab = tab
    },
    addActiveClass (myclass, event) {
      event.currentTarget.classList.add(myclass)
    //  event.stopPropagation()
    },
    removeActiveClass (myclass, event) {
      event.currentTarget.classList.remove(myclass)
    //  event.stopPropagation()
    }
  }
}
</script>

<style>
.scb {
  position: absolute;
  display: flex;
  top: 68px;
  bottom: 0;
  left: 0;
  right: 0;
}
.scb-left {
  border: 2px solid red;
}
.scb-right {
  border: 2px solid green;
  width:300px;
}
.scb-resulted input,
.scb-resultVal input{
  width: 100%;
  background: white;
  border: 1px solid black;
  text-align: right;
  padding-right: 2px;
}
.scb-resulted input {
  font-size: 18px;
}
.scb-resultVal input {
  font-size: 40px;
}
.scb-right-hmtabs li {
  font-size: 15px;
  font-weight: bold;
  display: inline;
  list-style-type: none;
  margin-left: 15px;
  text-align: center;
}
.scb-right-hmtabs {
  position: relative;
}
.active {
  color:red;
}
.move{
  height: 4px;
  width: 66px;
  position: absolute;
  top:20px;
  left: -3px;
  transition: left .2s ease-in-out 0s;
}
li:nth-child(1):hover~ .move{
    left: -3px;
    border-top: 4px solid green;
}
li:nth-child(2):hover~ .move{
    left: 76px;
    border-top: 4px solid green;
}

</style>
