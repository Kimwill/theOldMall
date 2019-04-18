<template>
	<div class="issue">
		<div class="header">
			<div class="back iconfont" @click="handleBackClick">&#xe608;</div>
			<span class="headerName">我发布的</span>
		</div>
		<div class="content">
			<div class="page" @click="changeView">宝贝</div>
			<div class="page" @click="changeView">帖子</div>
			<component :is="view"></component>
		</div>
	</div>
</template>
<script>
	import MyGood from './MyGood.vue'
	import MyBlog from './MyBlog.vue'
	export default {
		name: 'issue',
		components: {
			MyGood,
			MyBlog
		},
		data() {
			return {
				view: 'MyGood'
			}
		},
		methods: {
			handleBackClick() {
				this.$router.go(-1); 
			},
			changeView(e) {
				if(e.target.innerText === '宝贝') {
					this.view = 'MyGood'
				} else {
					this.view = 'MyBlog';
				}
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~assets/style/varible.styl'
	.issue
		.header
			height .8rem
			text-align center
			background #fff
			position relative
			.back
				height .8rem
				line-height .8rem
				font-size .6rem
				color #000
				position absolute
				z-index 2
				left 0
			.headerName
				font-size $headerFontSize
				position absolute
				left 0px
				right 0px
				margin auto
				line-height .8rem
		.content
			// margin .3rem 0
			padding 0 $pageEdge
			background #fff
			.page
				display inline-block
				box-sizing border-box
				height .6rem
				width 50%
				margin .1rem 0
				line-height .6rem
				font-size .3rem
				text-align center
			.page:first-child
				border-right 1px solid #ccc
</style>
