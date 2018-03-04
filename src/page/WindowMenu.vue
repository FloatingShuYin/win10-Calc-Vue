<template>
  <div class="menu">
    <span class="menu-pic">
      <a @click="invertShowMenuValue">
        <i class="iconfont">&#xe62c;</i>
      </a>
      {{ menuTitle }}
    </span>
    <transition enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
    <menu-list v-show="showMenu" @invert="invertShowMenuValue" class="animated"></menu-list>
  </transition>
  </div>
</template>

<script>
import menuList from '../components/MenuList'
export default {
  name: 'WindowMenu',
  components: {
    menuList
  },
  data () {
    return {
      menuTitle: '标准',
      showMenu: false
    }
  },
  methods: {
    invertShowMenuValue () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style>
.menu {
  display: table-cell;
}
.menu-pic {
  font-size: 22px;
  letter-spacing:1px;
}
.menu-pic a {
  color:inherit;
  text-decoration: none;
}
.menu-pic a:hover{
  color:green;
}
.menu-pic .iconfont {
  vertical-align: middle;
  padding: 0 10px;
  margin-right: 2px;
}
</style>
