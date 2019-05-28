<template>
	<div class="header">
		<span class="back iconfont" @click="handleBackClick">&#xe608;</span>
		<span class="headerName">{{headerName}}</span>
	</div>
</template>
<script>
	export default {
		name: "addGood",
		props: {
			headerName: {
				type: String
			}
		},
		methods: {
			handleBackClick() {
				this.$router.go(-1)
			},
		}
	}
</script>
<style lang="stylus" scoped>
@import '~assets/style/varible.styl'
	.header
		height .8rem
		text-align center
		border-bottom 1px solid #eee
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
</style>
