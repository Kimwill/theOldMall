<template>
	<div class="news">
		<div class="banner">
			<div class="header">消息</div>
			<div class="newsType">
				<div class="type">
					<img src="./../assets/img/news/inform.png" alt="通知" class="img">
					<p class="desc">通知消息</p>
				</div>
				<div class="type">
					<img src="./../assets/img/news/new.png" alt="消息" class="img">
					<p class="desc">互动消息</p>
				</div>
				<div class="type">
					<img src="./../assets/img/news/activity.png" alt="活动" class="img">
					<p class="desc">活动消息</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "news"
	}
</script>
<style lang="stylus" scoped>
@import './../assets/style/varible.styl'
	.news
		width 100%
		background $bgColor
		.banner
			height 2.2rem
			width 100%
			background $themeColor
			position relative
			display flex
			flex-direction column
			align-items center
			.header
				height 1rem
				width 100%
				line-height 1rem
				text-align center
				font-size $headerFontSize
				box-sizing border-box
				// border 1px solid #000
			.newsType
				position absolute
				top 1rem
				height 1.8rem
				width 90%
				box-sizing border-box
				// border 1px solid #000		
				padding .1rem
				display flex
				background #fff
				border-radius 10px
				box-shadow 0 5px 5px #eee
				.type
					flex 1
					box-sizing border-box
					// border 1px solid #000
					height 100%
					text-align center
					.img
						display block
						margin .1rem auto
						height .8rem
						box-sizing border-box
						// border 1px solid #000
					.desc
						height .5rem
						line-height .5rem
						box-sizing border-box
						// border 1px solid #000
						font-size .2rem
						letter-spacing .05rem
						text-indent .1rem		
					.iconfont:nth-child(1) {
						color
					}
</style>