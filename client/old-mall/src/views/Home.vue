<template>
  <div class="wrap">
    <myScroll 
      class="home" 
      ref="myScroll"
      :pullUp="true"
      :pullDown="true"
      @scrollToEnd="handleScrollToEnd"
      @pullDown="handlePullDown"
    >
      <div>
        <div class="top-tip tip">
          <span class="refresh-hook">{{pullDownMsg}}</span>
        </div>
        <!-- <SlideLeft> -->
          <router-view 
            @pulldown="pulldown" 
            @pullup="pullup"
            :isPulldown="isPulldown" 
            :isPullup="isPullup"
          ></router-view>
        <!-- </SlideLeft> -->
        <div class="bottom-tip tip">
          <span class="load-hook">{{pullUpMsg}}</span>
        </div>
      </div>
    </myScroll>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
	import Footer from 'components/Footer.vue'
	import myScroll from 'components/myScroll'
  import SlideLeft from 'components/SlideLeft'
  export default {
  	name: 'Home',
  	components: {
  		Footer,
      myScroll,
      SlideLeft
  	},
    data() {
      return {
        pullDownMsg: '上拉刷新',
        pullUpMsg: '下拉加载',
        isPulldown: false,
        isPullup: false
      }
    },
    beforeRouteUpdate(to, from, next) {
      next();
      this.$nextTick(() => {
        this.$refs.myScroll._initScroll();
      })
    },
    methods: {
      handleScrollToEnd() {
        this.isPulldown = true;
      },
      handlePullDown() {
        this.isPullup = true;
      },
      pulldown() {
        this.isPulldown = false;
      },
      pullup() {
        this.isPullup = false;
      }
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
      .tip
        height 50px
        width 100%
        font-size .2rem
        position absolute
        box-sizing border-box
        border 1px solid #000
      .top-tip
        top -50px
      .bottom-tip
        bottom -50px
</style>
