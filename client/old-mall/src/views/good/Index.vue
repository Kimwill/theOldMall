<template>
  <div class="index">
  	<div class="bgWrap">
    	<div class="search">
    		<el-input
	    		class="searchBox"
    		  placeholder="搜索"
    		  prefix-icon="el-icon-search"
    		  v-model="search"
    		  @focus="searchPageShow">
    		</el-input>
    	</div>
    	<!-- <div class="carousel"></div> -->
    	<div class="wrap">
    		<div class="classify" gap="0">
    			<div class="classifyItemWrap" v-for="item in classifyItem">
    				<img :src="item.imgSrc" class="classifyImg">
    				<p class="classifyDesc">{{item.iconDesc}}</p>
    			</div>
    		</div>
    	</div>
    </div>
    <div class="navbar" ref="navbar">
    	<div class="navbarWrap">
	    	<span v-for="item in navbarItem" class="navbarItem">{{item}}</span>
	    </div>
    </div>
  	<WaterFall :data="goods" width="175px" class="mallWrap" gap="0">
  		<WaterFallItem v-for="(item, index) in goods" :order="index" class="waterFallItem">
    		<router-link class="goodItem" :to="'/goodDetail/'+item.goodId" tag="div">
    			<img :src="item.src[0]" class="goodImg">
          <div class="goodDescWrap">
            <p class="goodDesc">{{item.goodDesc}}</p>
          </div>
    			<!-- <div class="userInfo"></div> -->
    		</router-link>
    	</WaterFallItem>
    </WaterFall>
    <Fade><SearchPage v-show="searchPage" :goods="goods" @searchClose="searchClose"></SearchPage></Fade>
  </div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { WaterFall, WaterFallItem } from 'kuan-vue-waterfall'
	import SearchPage from 'components/SearchPage'
  import Fade from 'components/Fade.vue'
  export default {
    name: "Index",
    components: {
    	WaterFall,
    	WaterFallItem,
    	SearchPage,
    	Fade
    },
    props: {
      isPulldown: {
        type: Boolean,
        default: false
      },
      isPullup: {
        type: Boolean,
        default: false
      }
    },
    data() {
    	return {
    		search: "",
    		classifyItem: [{
    			imgSrc: require('assets/img/index/book.png'),
    			iconDesc: '二手书'
    		}, {
    			imgSrc: require('assets/img/index/phone.png'),
    			iconDesc: '数码'
    		}, {
    			imgSrc: require('assets/img/index/clothes.png'),
    			iconDesc: '衣服'
    		}, {
    			imgSrc: require('assets/img/index/shoes.png'),
    			iconDesc: '鞋子'
    		}, {
    			imgSrc: require('assets/img/index/bicycle.png'),
    			iconDesc: '自行车'
    		}, {
    			imgSrc: require('assets/img/index/pen.png'),
    			iconDesc: '文具'
    		}, {
    			imgSrc: require('assets/img/index/electric.png'),
    			iconDesc: '电器'
    		}, {
    			imgSrc: require('assets/img/index/bag.png'),
    			iconDesc: '背包'
    		}],
    		navbarItem: ['关注', '新鲜', '二手书', '数码', '衣服', '鞋子', '自行车', '文具', '电器', '背包'],
        goods: [],
        searchPage: false
    	}
    },
    watch: {
      isPulldown() {
        if(this.isPulldown) {
          this.pulldown();          
        }
      },
      isPullup() {
        if(this.isPullup) {
          this.pullup()
        }
      }
    },
    mounted() {
      this.init()
      this.scrollInit()
    },
    methods: {
      init() {
        this.axios.get('/api/profiles/goods').then((res) => {
          console.log(res)
          res.data.forEach((value, index) => {
            console.log(value)
            let good = {}
            good.goodId = value.goodId
            good.src = value.goodImg
            good.goodDesc = value.goodDesc
            good.goodName = value.goodName
            this.goods.push(good)
          })
        })
      },
      scrollInit() {
        this.$nextTick(() => {
          this.navbarScroll = new BScroll(this.$refs.navbar, {
            startX: 0,
            scrollX: true
          });
        })  
      },
      searchPageShow() {
      	this.searchPage = true
      },
      searchClose() {
      	this.searchPage = false
      },
      pulldown() {
        console.log('pulldown')
        this.$emit('pulldown');
      },
      pullup() {
        console.log('pullup')
        this.$emit('pullup');        
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '~assets/style/varible.styl'
	.index
		width 100%
		.bgWrap
			background linear-gradient(to bottom, $themeColor, $bgColor)
			.search
				display flex
				height 1rem
				box-sizing border-box
				// border 1px solid #000
				.searchBox
					flex 1
					height .8rem
					line-height 1rem
					border-radius 30px
					margin 0 10px
			// .carousel
			// 	height 2.4rem
			// 	width 100%
			// 	box-sizing border-box
			// 	border 1px solid #000
			.wrap
				margin .2rem $pageEdge
				.classify
					height 3.5rem
					width 100%
					padding .15rem
					background #fff
					border-radius 20px
					box-sizing border-box
					display flex
					flex-wrap wrap
					.classifyItemWrap
						height 50%
						width 25%
						// box-sizing border-box
						// border 1px solid #000
						text-align center
						.classifyImg
							display block
							margin .1rem auto
							width 60%
							box-sizing border-box
							// border 1px solid #000
						.classifyDesc
							height .5rem
							line-height .5rem
							box-sizing border-box
							// border 1px solid #000
							font-size .24rem
							letter-spacing .05rem
							text-indent .1rem	
		.navbar
			height .6rem
			overflow hidden
			// box-sizing border-box
			// border 1px solid #000
			.navbarWrap
				width 10rem
				height 100%
			.navbarItem			
				display inline-block
				width 1rem
				height .6rem
				line-height .6rem
				float left
				font-size .26rem
				text-align center
				color #777
	.index
		// .wrap
			// margin .2rem $pageEdge
		// .mall		
			// width 100%
		.mallWrap
			margin-top .1rem
			padding-bottom $footerMargin
			.waterFallItem
				padding 0 4px 10px 4px !important
				box-sizing border-box !important
				.goodItem
					// width 50%
					background #fff
					border-radius 10px
					overflow hidden
					// border 1px solid #000
					// box-sizing border-box
					.goodImg
						// width 100%
						// height 1rem
					.goodDesc
						width 100%
						height 60px
						line-height 24px
						font-size .3rem
						overflow hidden
						text-overflow ellipsis
						display -webkit-box
						-webkit-line-clamp 2
						-webkit-box-orient vertical
						padding 10px
						box-sizing border-box
					.userInfo
						height 50px
						border 1px solid #000
						box-sizing border-box
</style>
