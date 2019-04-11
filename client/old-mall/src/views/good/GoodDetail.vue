<template>
	<div class="goodDetailWrap">
		<div class="back iconfont" @click="handleBackClick">&#xe608;</div>
		<div class="good">
			<div class="userInfo">
				<div class="userIcon">
					<img :src="goodDetailData.userIcon">
				</div>
				<span class="userName">{{goodDetailData.userName}}</span>
			</div>
			<div class="goodDetail">
				<p class="price"><span>￥</span>{{goodDetailData.price}}</p>
				<p class="goodDesc">{{goodDetailData.goodDesc}}</p>
				<div class="goodImg">
					<div class="goodImgItem" v-for="(imgItem, index) in goodDetailData.goodImg" :key="index">
						<img :src="imgItem">
					</div>
				</div>
			</div>
		</div>
		<div class="leaveWord">
			<p class="num">评论 {{goodDetailData.comment.length}}</p>
			<div>
				<div 
					class="commentItem" 
					v-for="(commentItem, index) in goodDetailData.comment"
					:key="index"
				>
					<div class="userIcon">
						<img :src="commentItem.userIcon">
					</div>
					<div class="text">
						<p class="userName">{{commentItem.userName}}</p>
						<p class="comment">{{commentItem.comment}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'goodDetail',
		data() {
			return {
				goodDetailData: {
					userName: 'kim',
					userIcon: require('assets/img/goodDetail/goodDetailTest/userIcon.jpg'),
					goodDesc: '猫爬架 搬家放不下 转手',
					price: 20,
					goodImg: [
						require('assets/img/goodDetail/goodDetailTest/1.jpg'),
						require('assets/img/goodDetail/goodDetailTest/2.jpg')
					],
					comment: [{
						userName: '肥',
						userIcon: require('assets/img/goodDetail/goodDetailTest/userIcon.jpg'),
						comment: '还在吗？'
					}, {
						userName: '肥',
						userIcon: require('assets/img/goodDetail/goodDetailTest/userIcon.jpg'),
						comment: '还在吗？'
					}]
				}
			}
		},
		methods: {
			handleBackClick() {
				this.$router.go(-1);
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~assets/style/varible.styl'
	.goodDetailWrap
		background $bgColor
		.back
			position fixed
			top 0px
			height .8rem
			width 100%
			background $bgColor
			line-height .8rem
			font-size .6rem
		.good
			margin-top .8rem
			padding 0 $pageEdge
			background #fff
			.userInfo
				height 1rem
				width 100%
				padding-bottom .2rem
				border-bottom 1px solid #eee
				.userIcon
					float left
					width .8rem
					height .8rem
					margin .1rem
					border-radius 10px
					overflow hidden
					img
						display block
						width 100%
				.userName
					font-size .3rem
					line-height 1rem
					float left
					margin-left .1rem
			.goodDetail
				padding-top .2rem
				.price
					height .8rem
					line-height .8rem
					font-size .4rem
					font-weight bold
					color red
					span
						font-size .2rem
				.goodDesc
					font-size .3rem
					padding-bottom .2rem
				.goodImg
					padding .2rem 0
					.goodImgItem
						font-size 0
						width 100%
						margin-bottom .1rem
						img
							width 100%
		.leaveWord
			padding 0 $pageEdge
			margin-top .15rem
			background #fff
			.num
				height .5rem
				line-height .5rem
				font-size .3rem
				font-weight bold
				padding-top .1rem
			.commentItem
				width 100%
				height 1.2rem
				display flex
				align-items center
				margin-bottom .1rem
				border-bottom 1px solid #ccc
				box-sizing border-box
				.userIcon
					width 15%
					padding .05rem .1rem
					box-sizing border-box
					box-sizing border-box
					img
						width 100%
						box-sizing border-box
			.commentItem:last-child
				border none
			.text
				width 60%
				padding-left .1rem
				box-sizing border-box
				.userName
					font-size .26rem
					font-weight bold
					box-sizing border-box
				.comment
					font-size .2rem
					box-sizing border-box
			
</style>