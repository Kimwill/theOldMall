<template>
	<div class="gallery" @click="handleClick">
		<div class="galleryWrap">
			<el-carousel
				indicator-position="none" 
				:autoplay="false"
				arrow="never" 
				:height="clientH"
				@change="changeCarouselOrder"
				ref="elCarousel"
			>
			  <el-carousel-item v-for="(item, index) in imgArr" :key="index">
			  	<img 
				  	:src="item"
				  	@touchstart="getTouchOriginX"
				  	@touchmove="setTouchX"
				  	@touchend="slideCb">
			  </el-carousel-item>
			</el-carousel>
			<span class="imgOrder">{{carouselOrder+1}}/{{imgArr.length}}</span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'gallery',
		props: {
			imgArr: Array
		},
		data() {
			return {
				clientH: '',
				carouselOrder: 0,
				touchOriginX: 0,
				touchEndX: 0
			}
		},
		methods: {
			handleClick() {
				this.$emit('close');
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
			}
		},
		beforeMount() {
			this.clientH = document.documentElement.clientHeight + 'px'
		}
	}
</script>
<style lang="stylus" scoped>
	.gallery
		position fixed
		top 0
		right 0
		bottom 0
		left 0
		background #000
		z-index 100
		display flex
		align-items center
		.galleryWrap
			width 100%
			height 100%
			img
				width 100%
				position absolute
				top 50%
				transform translateY(-50%)
			.imgOrder
				position absolute
				top 40px
				left 0
				right 0
				margin 0 auto
				text-align center
				font-size .3rem
				color #fff
</style>