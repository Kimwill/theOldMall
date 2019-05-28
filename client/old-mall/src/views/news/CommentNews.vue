<template>
	<div>
		<div class="goodWrap" v-for="(item, index) in commentNews" :key="index" @click="handleClick(item.infoId, item.type)">
			<div class="imgWrap">
				<img :src="item.img[0]">
			</div>
			<div class="descWrap">
				<p class="goodName">{{item.header}}</p>
				<p class="price">你有一条新评论</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'commentNews',
		props: ['commentNews'],
		methods: {
			handleClick(infoId, type) {
				if(type === 'good') {
					this.$router.push({path: `/goodDetail/${infoId}`})
				} else {
					this.$router.push({path: `/blogDetail/${infoId}`})
				}
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.goodWrap
		position relative
		top 50px
		width 100%
		height 100px
		background #fff
		box-sizing border-box
		margin-top 10px
		padding 10px
		display flex 
		border-bottom 1px solid #ccc
		.imgWrap
			height 100%
			width 20%
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