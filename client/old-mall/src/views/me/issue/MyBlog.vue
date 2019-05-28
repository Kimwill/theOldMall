<template>
	<div>
		<div class="goodWrap" v-for="(item, index) in blogs" :key="index">
			<div class="imgWrap">
				<img :src="item.blogImg[0]">
			</div>
			<div class="descWrap">
				<p class="goodName">{{item.blogHeader}}</p>
				<p class="price">{{item.blogDesc}}</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['blogs']
	}
</script>
<style lang="stylus" scoped>
	.goodWrap
		position relative
		width 100%
		height 120px
		background #fff
		box-sizing border-box
		margin-top 10px
		padding 10px
		display flex 
		.imgWrap
			height 100%
			width 30%
			img
				height 100%
				width 100%
		.descWrap
			flex 1
			position relative
			padding-left 10px
			.goodName
				font-size 16px
				color #000
			.price
				position absolute
				bottom 0px
				width 95%
				height 20px
				line-height 20px
				font-size 16px
				color #aaa
				overflow hidden
				text-overflow ellipsis
				white-space nowrap
</style>