<template>
	<!-- <SlideLeft> -->
		<div class="blogDetail" ref="blogDetail">
			<div class="back iconfont" ref="back" @click="handleBackClick">&#xe608;</div>
			<div class="carousel"
				@touchstart="getTouchOriginX"
				@touchmove="setTouchX"
				@touchend="slideCb"
				@click="handleCarouselClick">
				<el-carousel 
					height="250px" 
					indicator-position="none" 
					arrow="never" 
					:autoplay="false"
					@change="changeCarouselOrder"
					ref="elCarousel"
				>
				  <el-carousel-item v-for="(item, index) in blog.carouselImg" :key="index">
				    <div class="carouselImg">
				    	<img :src="item">
				    </div>
				  </el-carousel-item>
				</el-carousel>
				<span class="imgOrder">{{carouselOrder+1}}/{{blog.carouselImg.length}}</span>
			</div>
			<div class="blogWrap">
				<div class="user">
					<div class="userInfo">
						<div class="userIcon">
							<img :src="blog.userIcon">
						</div>
						<p class="userName">{{blog.userName}}</p>
					</div>
					<button class="care">+关注</button>
				</div>
				<p class="content">{{blog.content}}</p>
			</div>
			<div class="commentWrap">
				<p class="num">评论 {{comments.length}}</p>
				<div>
					<div 
						class="commentItem" 
						v-for="(commentItem, index) in comments"
						:key="index"
					>
						<div class="userIcon">
							<img :src="commentItem.userInfo.avatar">
						</div>
						<div class="text">
							<p class="userName">{{commentItem.userInfo.userName}}</p>
							<p class="comment">{{commentItem.content}}</p>
						</div>
					</div>
				</div>
				<div class="myComment">
					<div class="inputWrap">
						<el-input v-model="myComment" placeholder="说点什么吧..." class="inputBox"></el-input>
						<el-button type="primary" class="issueBtn" size="small" @click="issueComment">发送</el-button>
					</div>
					<div class="iconBar">
						<div class="blogInfoItem">
						  <span class="iconfont">&#xe699;</span>
						  <span class="iconDesc">{{blog.likeNum}}</span>
						</div>
						<div class="blogInfoItem">
						  <span class="iconfont">&#xe696;</span>
						  <span class="iconDesc">{{blog.commentNum}}</span>
						</div>
					</div>
				</div>
			</div>
			<FadeAnimation>
				<Gallery :imgArr="blog.carouselImg" @close="galleryClose" v-show="isGalleryShow"></Gallery>
			</FadeAnimation>
		</div>
	<!-- </SlideLeft> -->
</template>
<script>
	import FadeAnimation from 'components/Fade'
	import Gallery from 'components/Gallery'
	import SlideLeft from 'components/SlideLeft'
	export default {
		name: "blogDetail",
		components: {
			FadeAnimation,
			Gallery,
			SlideLeft
		},
		data() {
			return {
				blog: {},
				comments: [],
				carouselOrder: 0,
				touchOriginX: 0,
				touchEndX: 0,
				myComment: '',
				isGalleryShow: false
			}
		},
		created() {
			this.init()
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll, true);
		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll, true);
		},
		methods: {
			init() {
				// console.log(this.$route.params.id)
				this.axios.get(`/api/profiles/blogDetail/${this.$route.params.id}`).then(res => {
					this.blog = res.data
					// console.log(this.blog)
				})
				this.axios.get(`/api/profiles/comment/${this.$route.params.id}`).then(res => {
					this.comments = res.data
				})
			},
			handleScroll(e) {
				this.$refs.back.style.background = document.documentElement.scrollTop > 100 ? 'rgba(0, 0, 0, 0.3)' : 'transparent';
			},
			handleBackClick() {
				this.$router.go(-1);
			},
			changeCarouselOrder(order) {
				this.carouselOrder = order;
			},
			getTouchOriginX(event) {
				this.touchOriginX = event.touches[0].pageX;
				this.touchEndX = this.touchOriginX;
			},
			setTouchX(event) {
				event.preventDefault();
				this.touchEndX = event.touches[0].pageX;
			},
			slideCb(event) {
				var range = this.touchEndX - this.touchOriginX;
				if(Math.abs(range) < 30) {
					return false;
				}
				range > 0 ? this.$refs.elCarousel.prev() : this.$refs.elCarousel.next();
			},
			handleCarouselClick() {
				this.isGalleryShow = !this.isGalleryShow;
			},
			galleryClose() {
				this.isGalleryShow = !this.isGalleryShow;
			},
			issueComment() {
				let user = JSON.parse(localStorage.getItem('user'))
				let commentModel = {
					content: this.myComment,
					userInfo: user,
					relatedId: this.$route.params.id,
					merchantId: this.blog.userId,
					type: 'blog'
				}				
				this.axios.post(`/api/profiles/comment/${this.blog.blogId}`, commentModel).then(res => {
					// console.log(res)
					this.comments.push(res.data)
				})
				this.myComment = ''
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~assets/style/varible.styl'
	.blogDetail
		height 3000px
		.back
			position fixed
			z-index 1000
			top 0px
			width 100%
			height .8rem
			background transparent
			line-height .8rem
			font-size .6rem
			color #000
			transition background .5s
		.carousel
			position relative
			.carouselImg
				height 100%
				overflow hidden
				// position relative
				img
					position absolute
					top 50%
					transform translateY(-50%);
					width 100%
			.imgOrder
				display block
				position absolute
				bottom 20px
				right 10px
				height .3rem
				width .8rem
				background rgba(0,0,0,.3)
				border-radius 10px
				font-size .2rem
				color #fff
				line-height .3rem
				text-align center
				z-index 100
		.blogWrap
			padding 0 $pageEdge
			background #fff
			.user
				height 1rem				
				display flex
				align-items center
				border-bottom 1px solid #eee
				// justify-content center
				.userInfo
					flex 1
					height 100%
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
							height 100%
					.userName
						font-size .3rem
						line-height 1rem
						float left
						margin-left .1rem
				.care
					width 1.4rem
					height .6rem
					text-align center
					font-size .28rem
					font-weight bold
					border-radius 20px
					border 1px solid #ccc
					background #fff
			.content
				font-size .32rem
				padding .2rem 0
		.commentWrap
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
					width .7rem
					height .7rem
					// padding .05rem .1rem
					border-radius 10px
					overflow hidden
					box-sizing border-box
					img
						width 100%
						height 100%
						float left
						box-sizing border-box
			.commentItem:last-child
				border none
			.text
				flex 1
				padding 0 .2rem
				box-sizing border-box
				overflow hidden
				.userName
					font-size .26rem
					font-weight bold
					box-sizing border-box
				.comment
					width 100%
					font-size .2rem
					box-sizing border-box
					overflow hidden
					text-overflow ellipsis
					white-space nowrap
			.myComment
				height 50px
				width 100%
				padding 5px 0
				margin-top .15rem
				display flex
				align-items center
				box-sizing border-box
				.inputWrap
					// flex 2.6
					width 80%
					padding-right .1rem
					display flex
					.issueBtn
						width 20%
						text-align center
						display inline-block
					.inputBox
						flex 1
						font-size .24rem
						height 100%
						// float left
				.iconBar
					flex 1
					
					.blogInfoItem
						// float right
						padding-right .1rem
						.iconfont
							font-size .3rem
							float left
							padding-right 2px
						.iconDesc
							font-size .24rem
							float left
</style>