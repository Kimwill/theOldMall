<template>
  <div id="app">
    <!-- <SlideLeft> -->
      <router-view/>
    <!-- </SlideLeft> -->
  </div>
</template>
<script>
  import SlideLeft from 'components/SlideLeft'
  export default {
    components: {
      SlideLeft
    }
  }
</script>
<style lang="stylus">
@import '~assets/style/varible.styl'
  html,
  body,
  #app
    width 100%
    height 100%
    background $bgColor
</style>
