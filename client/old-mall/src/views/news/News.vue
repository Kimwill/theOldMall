<template>
	<div class="news">
		<div class="banner">
			<div class="header">消息</div>
			<div class="newsType">
				<div class="type" @click="changeView('good')">
					<img src="./../../assets/img/news/inform.png" alt="通知" class="img">
					<p class="desc">商品消息</p>
				</div>
				<div class="type" @click="changeView('comment')">
					<img src="./../../assets/img/news/new.png" alt="消息" class="img">
					<p class="desc">互动消息</p>
				</div>
				<div class="type" @click="changeView('activity')">
					<img src="./../../assets/img/news/activity.png" alt="活动" class="img">
					<p class="desc">活动消息</p>
				</div>
			</div>
		</div>
		<component :is="view" :commentNews="commentNews"></component>		
<!-- 		<div class="newsContent">
			<div class="newsItem" v-for="(item, index) in newTestData">
				<div class="userIcon">
					<img :src="item.userIcon">
				</div>
				<div class="text">
					<div class="userName">{{item.userName}}</div>
					<div class="content">{{item.content}}</div>
				</div>
				<div class="goodImg">
					<img :src="item.goodImg">
				</div>
			</div>
		</div> -->
	</div>
</template>
<script>
	import CommentNews from './CommentNews'
	import GoodNews from './GoodNews'
	import ActivityNews from './ActivityNews'
	export default {
		name: "news",
		components: {
			CommentNews,
			GoodNews,
			ActivityNews
		},
		data() {
			return {
				userId: JSON.parse(localStorage.getItem('user'))._id,
				newTestData: [{
					userIcon: require('assets/img/news/testData/userIcon.jpg'),
					userName: '钦',
					content: '点击查看评价内容',
					goodImg: require('assets/img/news/testData/good.jpg')
				}, {
					userIcon: require('assets/img/news/testData/userIcon.jpg'),
					userName: '钦',
					content: '点击查看评价内容',
					goodImg: require('assets/img/news/testData/good.jpg')
				}, {
					userIcon: require('assets/img/news/testData/userIcon.jpg'),
					userName: '钦',
					content: '点击查看评价内容',
					goodImg: require('assets/img/news/testData/good.jpg')
				}, {
					userIcon: require('assets/img/news/testData/userIcon.jpg'),
					userName: '钦',
					content: '点击查看评价内容',
					goodImg: require('assets/img/news/testData/good.jpg')
				}],
				view: 'commentNews',
				commentNews: []
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {
				this.axios.get(`/api/profiles/getNews/${this.userId}`).then(res => {
					res.data.forEach((value, index) => {
						let infoId = value.infoId
						if(res.data.type === 'good') {
							this.axios.get(`/api/profiles/goodDetail/${infoId}`).then(good => {
								let news = {}
								news.img = good.data.goodImg
								news.header = good.data.goodHeader
								news.infoId =  infoId
								news.type = 'good'
								this.commentNews.push(news)
							})
						} else {
							this.axios.get(`/api/profiles/blogDetail/${infoId}`).then(blog => {
								let news = {}
								news.img = blog.data.carouselImg
								news.header = blog.data.blogHeader
								news.infoId =  infoId
								news.type = 'blog'
								this.commentNews.push(news)
							})						
						}
					})
				})
			},
			changeView(text) {
				if(text === 'good') {
					this.view = 'goodNews'
				} else if(text === 'comment') {
					this.view = 'commentNews'
				} else {
					this.view = 'activityNews'
				}
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~assets/style/varible.styl'
	.news
		width 100%
		background #fff
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
		.newsContent
			margin 1rem $pageEdge $footerMargin $pageEdge
			// border 1px solid #000
			box-sizing border-box
			.newsItem:last-child
				border none
			.newsItem
				width 100%
				height 1.5rem
				display flex
				align-items center
				margin-bottom .2rem
				// border 1px solid #000
				border-bottom 1px solid #ccc
				box-sizing border-box
				.userIcon
					width 15%
					padding .05rem .1rem
					box-sizing border-box
					// border 1px solid #000
					box-sizing border-box
					img
						width 100%
						// border 1px solid #000
						box-sizing border-box
				.text
					width 60%
					// border 1px solid #000
					box-sizing border-box
					.userName
						font-size .3rem
						font-weight bold
						// border 1px solid #000
						box-sizing border-box
					.content
						font-size .2rem
						color #999
						// border 1px solid #000
						box-sizing border-box
				.goodImg
					width 20%
					height 90%
					overflow hidden
					padding .1rem 0
					// border 1px solid #000
					box-sizing border-box
					img
						width 100%
						height 100%
						// border 1px solid #000
						box-sizing border-box
</style>