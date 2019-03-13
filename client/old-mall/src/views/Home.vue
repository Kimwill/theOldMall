<template>
    <div class="home">
    	<div class="wrap">
	    	<div class="search">
	    		<span class="name"></span>
	    		<el-input
		    		class="searchBox"
	    		  placeholder="搜索"
	    		  prefix-icon="el-icon-search"
	    		  v-model="search">
	    		</el-input>
	    	</div>
	    	<div class="carousel"></div>
	    	<div class="classify"></div>
	    </div>
    	<div class="mall">
    		<div class="navbar"></div>
    		<div class="goods"></div>
    	</div>
    	<Footer></Footer>
    </div>
</template>

<script>
	import Footer from './../components/Footer'
  export default {
    name: "Home",
    components: {
    	Footer
    },
    data() {
    	return {
    		search: ""
    	}
    }
  }
</script>

<style lang="stylus" scoped>
@import './../assets/style/varible.styl'
	.home
		width 100%
		background $bgColor
		.wrap
			background linear-gradient(to bottom, $themeColor, $bgColor)
			.search
				display flex
				height 1rem
				box-sizing border-box
				border 1px solid #000
				.name
					width 20%
					height 100%
				.searchBox
					flex 1
					height .8rem
					line-height 1rem
					border-radius 30px
					margin-right .5rem
			.carousel
				height 2.4rem
				width 100%
				box-sizing border-box
				border 1px solid #000
			.classify
				height 2.8rem
				width 100%
				box-sizing border-box
				border 1px solid #000
		.mall
			width 100%
			.navbar
				height .6rem
				box-sizing border-box
				border 1px solid #000				
</style>
