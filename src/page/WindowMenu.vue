<template>
  <div>
  <div class="menu">
    <span class="menu-pic">
      <a @click="invertSuperShowMenuValue">
        <i class="iconfont">&#xe62c;</i>
      </a>
      {{ DONE_MENT_TITLE }}
    </span>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WindowMenu',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['DONE_MENT_TITLE', 'DONE_RESULT_VALUE'])
  },
  methods: {
    // ...mapActions('modifyMenuTitle'),
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
