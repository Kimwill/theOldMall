<template>
	<div class="footer">
		<router-link 
			class="icon"
			:to="{name: 'index'}"
			tag="div"
		>
			<span class="iconfont">&#xe69a;</span>
			<p class="desc">转手</p>
		</router-link>
		<router-link 
			class="icon"
			:to="{name: 'blog'}"
			tag="div"
		>
			<span class="iconfont">&#xe6cf;</span>
			<p class="desc">帖子</p>			
		</router-link>
		<div
			class="icon add"
			@click="handleAddClick"
		>
			<span class="iconfont">&#xe61f;</span>
			<p class="desc">发布</p>			
		</div>
		<router-link 
			class="icon"
			:to="{name: 'news'}"
			tag="div"
		>
			<span class="iconfont">&#xe6ad;</span>
			<p class="desc">消息</p>			
		</router-link>
		<router-link 
			class="icon"
			:to="{name: 'me'}"
			tag="div"
		>
			<span class="iconfont">&#xe6a3;</span>
			<p class="desc">我的</p>			
		</router-link>
	</div>
</template>
<script>
	export default {
		name: "Footer",
		methods: {
			handleAddClick() {
				console.log(1);
				this.$emit('addClick');
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import './../assets/style/varible.styl'
	.footer
		position fixed
		bottom 0
		z-index 100
		background #fff
		height $footerHeight
		width 100%
		display flex
		box-shadow 0 -10px 20px #cfcfcf
		.icon
			flex 1
			// box-sizing border-box
			// border 1px solid #000
			height 100%
			text-align center
			.iconfont
				display block
				height 70%
				// box-sizing border-box
				// border 1px solid #000
				font-size .6rem
				width 100%
			.desc
				height 30%
				// box-sizing border-box
				// border 1px solid #000
				font-size .2rem
				letter-spacing .1rem
				text-indent .1rem
		.add
			flex 1.2
			position relative
			.iconfont
				position absolute
				bottom 30%
				height 70px
				line-height 70px
				font-size 1.2rem
				color $themeColor
			.desc
				position absolute
				bottom 0
				width 100%
</style>