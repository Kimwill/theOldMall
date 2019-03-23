<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    components: {
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
