<template>
	<div class="me">
		<div class="wrap">
			<div class="info">
				<div class="text">
					<span class="userName">肖奕钦</span>
					<span class="userDesc">这个人很懒，什么都没留下</span>
				</div>
				<div class="avatar"></div>
				<span class="iconfont">&#xe64a;</span>
			</div>
			<div class="num">
				<div class="numWrap">
					<span class="number">1</span>
					<span class="numDesc">超赞</span>
				</div>
				<div class="numWrap">
					<span class="number">1</span>
					<span class="numDesc">关注数</span>
				</div>
				<div class="numWrap">
					<span class="number">1</span>
					<span class="numDesc">粉丝数</span>
				</div>
			</div>
		</div>	
		<div class="wrap" v-for="item in itemArr">
			<div class="itemWrap">
				<img :src="item.imgSrc" class="itemIcon">
				<span class="itemText">{{item.itemText}}</span>
				<span class="iconfont">&#xe64a;</span>
			</div>
		</div>
		<div class="wrap" v-for="item in itemSetArr">
			<div class="itemWrap">
				<img :src="item.imgSrc" class="itemIcon">
				<span class="itemText">{{item.itemText}}</span>
				<span class="iconfont">&#xe64a;</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "me",
		data() {
			return {
				itemArr: [{
					imgSrc: require('./../assets/img/me/issue.png'),
					itemText: '我发布的'
				}, {
					imgSrc: require('./../assets/img/me/sale.png'),
					itemText: '我卖出的'
				}, {
					imgSrc: require('./../assets/img/me/buy.png'),
					itemText: '我买到的'
				}, {
					imgSrc: require('./../assets/img/me/collection.png'),
					itemText: '我收藏的'
				}, {
					imgSrc: require('./../assets/img/me/article.png'),
					itemText: '我的帖子'
				}],

				itemSetArr: [{
					imgSrc: require('./../assets/img/me/set.png'),
					itemText: '设置'
				}, {
					imgSrc: require('./../assets/img/me/sevice.png'),
					itemText: '客服中心'
				}]
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import './../assets/style/varible.styl'
	.me
		width 100%
		background $bgColor
	.wrap
		box-sizing border-box
		width 100%
		padding 0 $pageEdge
		.info
			height 2rem
			width 100%
			box-sizing border-box
			border 1px solid #000
			display flex
			.text
				flex 7
				margin auto 0
				box-sizing border-box
				border 1px solid #000
				.userName
					font-size .5rem
					display block
					margin-bottom .1rem				
				.userDesc
					font-size .2rem
					display block
			.avatar
				flex 2.5
				box-sizing border-box
				border 1px solid #000
			.iconfont
				flex .5
				height 2rem
				line-height 2rem
				font-size .4rem
				box-sizing border-box
				border 1px solid #000
		.num
			display flex
			height 1rem
			box-sizing border-box
			border 1px solid #000
			.numWrap
				flex 1
				margin auto 0
				text-align center
				box-sizing border-box
				border 1px solid #000
				.number
					display block
					font-size .3rem
				.numDesc
					display block
					font-size .2rem
</style>