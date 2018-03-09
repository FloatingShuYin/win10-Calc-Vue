<template>
    <div class="hm">
      <!-- s:内存 历史记录 tabs -->
      <ul class="hm-tabs" @click="toggleTab($event,'historyRecord','memoryRecord');modifyActiveClass($event,'historyRecord','memoryRecord','active')">
          <li id="historyRecord" class="active">历史记录</li>
          <li id="memoryRecord">内存记录</li>
        <li class="move"> </li>
      </ul><!-- e:内存 历史记录 tabs -->
      <memory-record :is="currentTab" keep-alive></memory-record>
    </div>
</template>

<script>
import memoryRecord from './MemoryRecord'
import historyRecord from './HistoryRecord'
export default {
  name: 'HistoryMemory',
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
/*标签导航样式*/
.hm-tabs li {
  font-size: 15px;
  font-weight: bold;
  display: inline;
  list-style-type: none;
  padding: 0 8px;
  text-align: center;
}
/*辅助移动的下划线定位*/
.hm-tabs {
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
</style>
