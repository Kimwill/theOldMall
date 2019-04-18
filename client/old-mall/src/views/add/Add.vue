<template>
	<div class="add" @click="addFade">
		<div class="item addGood">发商品</div>
		<div class="item addBlog">发帖子</div>
	</div>
</template>
<script>
	import Fade from 'components/Fade.vue'
	export default {
		name: 'add',
		components: {
			Fade
		},
		methods: {
			addFade() {
				this.$emit('addClose')
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.add
		position absolute
		top 0px
		right 0px
		bottom 0px
		left 0px
		z-index 1000
		background rgba(225, 225, 225, .9)
		.item
			position absolute
			bottom 3rem
			width 1.5rem
			height 1.5rem
			border-radius 50%
			font-size .3rem
			color #fff
			line-height 1.5rem
			text-align center
		.addGood
			left 1rem
			background #f5e025
		.addBlog
			right 1rem
			background pink
</style>