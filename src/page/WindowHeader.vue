<template>
  <div class="titlebar clearfix">
    <span class="titlebar-name">计算器</span>
    <ul class="titlebar-buttonBox">
      <li class="titlebar-buttonBox-min"><i class="iconfont">&#xe62d;</i></li>
      <li class="titlebar-buttonBox-max"><i class="iconfont">&#xe622;</i></li>
      <li class="titlebar-buttonBox-close"><i class="iconfont">&#xe6a6;</i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WindowHeader'
}
</script>

<style>
/* 引入阿里巴巴图标库  win10Calc */
@font-face {
  font-family: 'iconfont';  /* project id 579096 */
  src: url('//at.alicdn.com/t/font_579096_zsjp9gk0asvsfw29.eot');
  src: url('//at.alicdn.com/t/font_579096_zsjp9gk0asvsfw29.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_579096_zsjp9gk0asvsfw29.woff') format('woff'),
  url('//at.alicdn.com/t/font_579096_zsjp9gk0asvsfw29.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_579096_zsjp9gk0asvsfw29.svg#iconfont') format('svg');
}
/* 初始化图标样式 */
.iconfont {
  font-family:"iconfont";
  font-size:22px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: .2px;
  -moz-osx-font-smoothing: grayscale;
}
/* 设置标题栏样式 */
.titlebar-name {
  margin-left: 10px;
  margin-top: 6px;
  font-size: 14px;
  letter-spacing: 1px;
}
.titlebar-buttonBox {
  display: inline;
  float: right;
}
.titlebar-buttonBox li {
  display: inline;
  padding: 0 10px;
}

</style>
