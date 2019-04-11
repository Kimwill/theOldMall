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
				  <el-carousel-item v-for="(item, index) in detailTestData.carouselImg" :key="index">
				    <div class="carouselImg">
				    	<img :src="item">
				    </div>
				  </el-carousel-item>
				</el-carousel>
				<span class="imgOrder">{{carouselOrder+1}}/{{detailTestData.carouselImg.length}}</span>
			</div>
			<div class="blogWrap">
				<div class="user">
					<div class="userInfo">
						<div class="userIcon">
							<img :src="detailTestData.userIcon">
						</div>
						<p class="userName">{{detailTestData.userName}}</p>
					</div>
					<button class="care">+关注</button>
				</div>
				<p class="content">{{detailTestData.content}}</p>
			</div>
			<div class="commentWrap">
				<p class="num">评论 2</p>
				<div>
					<div 
						class="commentItem" 
						v-for="(commentItem, index) in detailTestData.comment"
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
				<div class="myComment">
					<div class="inputWrap">
						<el-input v-model="myComment" placehold="说点什么吧" class="inputBox"></el-input>
						<!-- <input type="text" v-model="myComment" placeholder="说点什么吧" class="inputBox"> -->
					</div>
					<div class="iconBar">
						<div class="blogInfoItem">
						  <span class="iconfont">&#xe699;</span>
						  <span class="iconDesc">1</span>
						</div>
						<div class="blogInfoItem">
						  <span class="iconfont">&#xe696;</span>
						  <span class="iconDesc">2</span>
						</div>
					</div>
				</div>
			</div>
			<FadeAnimation>
				<Gallery :imgArr="detailTestData.carouselImg" @close="galleryClose" v-show="isGalleryShow"></Gallery>
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
				detailTestData: {
					userIcon: require('assets/img/blogDetail/blogDetailTest/userIcon.jpg'),
					userName: '钦',
					content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt earum ut commodi ad sit vitae enim dignissimos dolore totam doloribus! Quae consectetur ullam, fugit unde maxime delectus vitae vel distinctio!',
					carouselImg: [
						require('assets/img/blogDetail/blogDetailTest/1.jpg'),
						require('assets/img/blogDetail/blogDetailTest/2.jpg'),
						require('assets/img/blogDetail/blogDetailTest/3.jpg'),
						require('assets/img/blogDetail/blogDetailTest/4.jpg'),
						require('assets/img/blogDetail/blogDetailTest/5.jpg')
					],
					comment: [{
						userIcon: require('assets/img/blogDetail/blogDetailTest/userIcon.jpg'),
						userName: '肥',
						comment: '还在吗？可以邮寄吗？邮费我出'
					}, {
						userIcon: require('assets/img/blogDetail/blogDetailTest/userIcon.jpg'),
						userName: '肥',
						comment: '还在吗？可以邮寄吗？邮费我出'
					}]
				},
				carouselOrder: 0,
				touchOriginX: 0,
				touchEndX: 0,
				myComment: '',
				isGalleryShow: false
			}
		},
		methods: {
			handleScroll(e) {
				this.$refs.back.style.background = document.documentElement.scrollTop > 100 ? 'rgba(0, 0, 0, 0.3)' : 'transparent';
				console.log(1);
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
				console.log(range);
				range > 0 ? this.$refs.elCarousel.prev() : this.$refs.elCarousel.next();
			},
			handleCarouselClick() {
				this.isGalleryShow = !this.isGalleryShow;
			},
			galleryClose() {
				this.isGalleryShow = !this.isGalleryShow;
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll, true);
		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll, true);
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
			.myComment
				height 50px
				width 100%
				padding 5px 0
				margin-top .15rem
				display flex
				align-items center
				box-sizing border-box
				.inputWrap
					flex 2.6
					padding-right .1rem
					.inputBox
						font-size .24rem
						height 100%
						float left
				.iconBar
					.blogInfoItem
						float right
						padding-right .2rem
						.iconfont
							font-size .34rem
							float left
							padding-right .1rem
						.iconDesc
							font-size .24rem
							float left
</style>