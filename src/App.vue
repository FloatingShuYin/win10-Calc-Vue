<template>
  <div id="app">
    <window-header></window-header>
    <window-menu @invert="showMenu=!showMenu"></window-menu>
    <transition enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
      <menu-list
      id="menu-list"
      v-show="showMenu"
      @invert="showMenu=!showMenu"
      class="animated"
      v-focus="showMenu"
      @blur.native="showMenu=false"
      >
     </menu-list>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
import windowHeader from './page/WindowHeader'
import windowMenu from './page/WindowMenu'
import menuList from './components/MenuList'

export default {
  name: 'App',
  components: {
    windowHeader,
    windowMenu,
    menuList
  },
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
  }
}
</script>

<style>
/* 重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: rgba(230, 230, 230,1);
}
html,body{
  background: white;overflow: hidden;
}
a:focus {
  outline:none;
}
#app {
  position: relative;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  width:568px;
  height:512px;
  border: 6px solid rgba(43, 48, 59,1);
  border-left: 0;
  border-right: 0;
  border-radius: 6px;
  box-shadow: 0 2px 8px #000;
}
#menu-list{
  animation-duration: .2s;
  animation-delay: 0;
  animation-iteration-count: 1;
}
</style>
