<template>
  <div class="menu">
    <span class="menu-pic">
      <a @click="invertSuperShowMenuValue">
        <i class="iconfont">&#xe62c;</i>
      </a>
      {{ menuTitle }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'WindowMenu',
  data () {
    return {
      menuTitle: '标准'
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
.menu {
  display: inline-block;
  margin-top: 3px;
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
