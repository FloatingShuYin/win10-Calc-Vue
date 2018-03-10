<template>
  <div class="menu-out-box" tabindex="1" @click="superBlur($event);toggleTitle($event)">
    <div class="menu-list-box">
      <span class="menu-pic">
        <a @click="invertSuperShowMenuValue">
          <i class="iconfont">&#xe62c;</i>
        </a>
      </span>
      <span class="menu-calc">计算器</span>
      <ul class="calc-list">
        <router-link id="StandardCalc" to="StandardCalc" tag="li">标准</router-link>
        <router-link id="ScientificCalc" to="ScientificCalc" tag="li">科学</router-link>
        <li>程序员</li>
        <li>日期计算</li>
      </ul>
      <span class="menu-transverter">转换器</span>
      <ul class="transverter-list">
        <li>货币</li>
        <li>体积</li>
        <li>长度</li>
        <li>重量和质量</li>
        <li>温度</li>
        <li>能量</li>
        <li>区域</li>
        <li>面积</li>
        <li>速度</li>
        <li>时间</li>
        <li>功率</li>
        <li>数据</li>
        <li>压强</li>
        <li id="zh">角度</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'MenuList',
  methods: {
    ...mapMutations(['TOGGLE_MENT_TITLE']),
    invertSuperShowMenuValue () {
      this.$emit('invert')
    },
    superBlur (event) {
      if (event.target.nodeName.toLowerCase() === 'li') {
        this.$emit('invert')
      }
    },
    toggleTitle (event) {
      // event.target.innerText
      this.TOGGLE_MENT_TITLE(event.target.innerText)
    }
  }
}
</script>

<style>
.menu-out-box {
  position: absolute;
  background: white;
  top:26px;
  bottom: 40px;
  overflow: hidden;
  z-index: 1;
}
.menu-out-box:focus {
  outline: none;
}
.menu-list-box {
  overflow: auto;
  height: 480px;
  width:250px;
  margin-right: -17px;
  padding-top: 6px;
}
.menu-list-box .menu-pic {
  position: absolute;
  top: 6px;
}
.menu-calc,
.menu-transverter {
  font-size: 22px;
  padding-left: 50px;
}
.menu-calc {
  display: inline-block;
  margin-top: -3px;
}
.menu-transverter {
}
.menu-list-box li {
  padding: 18px 60px;
}
.menu-list-box li:hover {
  padding: 18px 60px;
  background: rgba(43, 48, 59,.7);
}
#zh {
  padding-bottom: 50px;
}
</style>
