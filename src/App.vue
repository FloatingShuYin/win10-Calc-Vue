<template>
  <div id="app">
    <window-header></window-header>
    <window-menu></window-menu>
    <router-view></router-view>
    <window-footer></window-footer>
  </div>
</template>

<script>
import windowHeader from './page/WindowHeader'
import windowFooter from './page/WindowFooter'
import windowMenu from './page/WindowMenu'
export default {
  name: 'App',
  components: {
    windowHeader,
    windowMenu,
    windowFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style>
/* 重置 */
*{margin:0;padding:0;box-sizing:border-box;}

body{background: white;overflow: hidden;}
a:focus {outline:none;}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  position: relative;
  overflow: hidden;
}

</style>
