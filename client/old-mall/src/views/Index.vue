<template>
  <div class="index">
  	<div class="bgWrap">
    	<div class="search">
    		<span class="name"></span>
    		<el-input
	    		class="searchBox"
    		  placeholder="搜索"
    		  prefix-icon="el-icon-search"
    		  v-model="search">
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
	<WaterFall :data="mallTestData" width="175px" class="mallWrap" gap="0">
		<WaterFallItem v-for="(item, index) in mallTestData" :order="index" class="waterFallItem">
    		<div class="goodItem">
    			<img :src="item.src" class="goodImg">
    			<p class="goodDesc">{{item.desc}}</p>
    			<div class="userInfo"></div>
    		</div>
    	</WaterFallItem>
    </WaterFall>
  </div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { WaterFall, WaterFallItem } from 'kuan-vue-waterfall'
  export default {
    name: "Index",
    components: {
    	WaterFall,
    	WaterFallItem
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
    		mallTestData: [{
    			src: require('assets/img/index/malltest/1.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "猫爬架猫窝磨爪猫树猫抓板猫架猫跳台猫咪玩具用品抓… 颜色分类咖啡色（配猫窝）豪华款",
    		}, {
    			src: require('assets/img/index/malltest/2.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "书架一个 需要的话自提",
    		}, {
    			src: require('assets/img/index/malltest/3.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "LG全自动滚筒洗衣机、冰箱550元！附近可送！九九新！LG全 全自动滚筒洗衣机 星级酒店扯下来的",
    		}, {
    			src: require('assets/img/index/malltest/4.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "韩版全棉床头板大靠垫软包可拆洗床… 颜色分类:白色奶牛,尺寸:1.2米，靠枕，很舒服，床太短了，所以闲置，转给有需要的人",
    		}, {
    			src: require('assets/img/index/malltest/5.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "全新多功能置物架 层数可选，价格看对应图片上标注，不议价，需要几层，是否加高的，联系我改价拍，谢谢",
    		}, {
    			src: require('assets/img/index/malltest/6.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "猫舍猫笼子大号二层猫别墅猫笼三层… 颜色分类蓝色 两叠三层",
    		}, {
    			src: require('assets/img/index/malltest/7.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "三人沙发#九成新 房子刚买时入手的，房子基本没住，沙发基本没用。现想重新装修，低价转",
    		}, {
    			src: require('assets/img/index/malltest/8.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "猫咪，英短蓝猫。 自己家养的已经3个月大了",
    		}, {
    			src: require('assets/img/index/malltest/9.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "九九新屏风，只用了4个月。 由于换红木沙发，颜色不匹配，所以诚心转让！",
    		}, {
    			src: require('assets/img/index/malltest/10.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "懒人沙发一套 原价360，使用四个月，现搬家便宜出，南悦花苑自提",
    		}, {
    			src: require('assets/img/index/malltest/11.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "梳妆台 一直是女友的忠实伙伴，本意不离不弃一辈子，但是被世俗牵绊，只能重新找个主人借宿！庙溪自取",
    		}, {
    			src: require('assets/img/index/malltest/12.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "猫窝 小佩职能猫窝，99新，因自家猫不用，为了腾地方，低价处理，价格超低超低超低",
    		}, {
    			src: require('assets/img/index/malltest/13.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "卖猫 这只太能吃，养不起。卖了卖了",
    		}, {
    			src: require('assets/img/index/malltest/14.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "木柜，8成新，100元拿走 现因搬家，转让闲置柜一个，高1米7宽80厘米厚40厘米，位置南桥宝龙附近，建议自提，不讲价",
    		}, {
    			src: require('assets/img/index/malltest/15.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "工业风北欧现代简约铁艺沙发设计师单人创意工作室布艺ins网红 入手渠道:厂家直销",
    		}, {
    			src: require('assets/img/index/malltest/16.jpg'),
    			"href": "https://www.baidu.com",
    			desc: "沙发 沙发 转手原因:因要回老家发展，带不走，沙发1.5米长，可以当床睡",
    		}]
    	}
    },
    methods: {
    },
    beforeMounted() {
    },
    mounted() {
    	this.$nextTick(() => {
    		this.navbarScroll = new BScroll(this.$refs.navbar, {
    			startX: 0,
    			scrollX: true
    		});
    	})
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
				border 1px solid #000
				.name
					width 20%
					height 100%
				.searchBox
					flex 1
					height .8rem
					line-height 1rem
					border-radius 30px
					margin-right .5rem
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
			margin-bottom $footerMargin
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
						height 40px
						line-height 20px
						font-size .3rem
						overflow hidden
						text-overflow ellipsis
						display -webkit-box
						-webkit-line-clamp 2
						-webkit-box-orient vertical
					.userInfo
						height 50px
						border 1px solid #000
						box-sizing border-box
</style>
