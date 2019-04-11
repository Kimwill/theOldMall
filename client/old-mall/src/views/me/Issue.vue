<template>
	<div class="issue">
		<div class="header">
			<div class="back iconfont">&#xe608;</div>
			<span class="headerName">我发布的</span>
		</div>
	<!-- 	<div class="content">
			<router-link to="/myGood">宝贝</router-link>
			<router-link to="/myBlog">帖子</router-link>
			<router-view></router-view>
		</div> -->
	</div>
</template>
<script>
	export default {
		name: 'issue'
	}
</script>
<style lang="stylus" scoped>
	.issue
		.header
			height .8rem
			text-align center
			.back
				height .8rem
				line-height .8rem
				font-size .6rem
				color #000
			.headerName
				font-size .$heaerFontSize
				font-weight bold
</style>
