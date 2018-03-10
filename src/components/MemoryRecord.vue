<template>
  <div class="mr">
    <p class="message">内存中没有任何东西</p>
    <ul class="mrlist">
      <li class="mrlist-item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MemoryRecord',
  data () {
    return {
      showMessage: true
    }
  }
}
</script>

<style>
.message {
  padding: 35px 20px;
  font-weight: bold;
  font-size: 16px;
}
.mrlist-item {
  list-style-type: none;
}
</style>
