<template>
  <div class="menuListBox">
    <span class="menu-pic">
      <a @click="invertSuperShowMenuValue">
        <i class="iconfont">&#xe62c;</i>
      </a>
    </span>
    <span class="menu-calc">计算器</span>
    <ul class="calc-list">
      <li v-for="calc in calcs" :key="calc.id">
        {{ calc.name }}
      </li>
    </ul>
    <span class="menu-transverter">转换器</span>
    <ul class="transverter-list">
      <li v-for="transverter in transverters" :key="transverter.id">
        {{ transverter.name }}
      </li>
    </ul>
    <div class="aboutBox">
      <a href="javascript:void(0)">
        <span class="about-pic">
          <i class="iconfont">&#xe62c;</i>
          关于
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuList',
  data () {
    return {
      calcs: [
        {
          id: 1,
          name: '标准'
        },
        {
          id: 2,
          name: '科学'
        },
        {
          id: 3,
          name: '程序员'
        },
        {
          id: 4,
          name: '日期计算'
        }
      ],
      transverters: [
        {
          id: 1,
          name: '货币'
        },
        {
          id: 2,
          name: '体积'
        },
        {
          id: 3,
          name: '长度'
        },
        {
          id: 4,
          name: '重量和质量'
        },
        {
          id: 5,
          name: '温度'
        },
        {
          id: 6,
          name: '能量'},
        {
          id: 7,
          name: '区域'
        },
        {
          id: 8,
          name: '速度'
        },
        {
          id: 9,
          name: '时间'
        },
        {
          id: 10,
          name: '功率'
        },
        {
          id: 11,
          name: '数据'
        },
        {
          id: 12,
          name: '压力'
        },
        {
          id: 13,
          name: '角度'
        }
      ]
    }
  },
  methods: {
    invertSuperShowMenuValue () {
      this.$emit('invert')
    }
  }
}
</script>

<style>
.menuListBox {
  position: absolute;
  top:27px;
  left:0;
  bottom:0;
  overflow: scroll;
  border: 1px solid blue;
}
.menuListBox .menu-pic {
}
.menu-calc,
.menu-transverter {
  font-size: 22px;
}
.menu-transverter {
  padding-left: 50px;
}
.calc-list li,
.transverter-list li {
  list-style-type: none;
  padding: 15px 50px;
  padding-right: 0;
  width:256px;
}
.calc-list li:hover,
.transverter-list li:hover {
}
</style>
