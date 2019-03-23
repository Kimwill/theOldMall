<template>
  <div class="wrap">
    <div class="home" ref="home">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
	import Footer from 'components/Footer.vue'
	import BScroll from 'better-scroll'
  export default {
  	name: 'Home',
  	components: {
  		Footer
  	},
  	mounted() {
  		this.$nextTick(() => {
  			this.homeScroll = new BScroll(this.$refs.home, {
  				click: true
  			});
  		})
  	},
    beforeRouteUpdate(to, from, next) {
      next();
      this.$nextTick(() => {
        this.homeScroll = new BScroll(this.$refs.home, {
          click: true
        });
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .wrap
    height 100%
    width 100%
  	.home
  		width 100%
  		height 100%
</style>
