<template>
	<div class="editInfo">
		<div class="header">
			<span class="back iconfont" @click="handleBackClick">&#xe608;</span>
			<span class="headerName">我的资料</span>
		</div>
		<div class="outer">
			<router-link class="avatar" to="/me/editInfo/editAvatar" tag="div">
				<span class="desc">头像</span>
				<div class="img">
					<img src="./../../../assets/img/me/editInfo/default.png">
				</div>
				<span class="forward iconfont">&#xe64a;</span>
			</router-link>
			<div class="itemWrap" v-for="(item, index) in editItem" :key="index">
				<span class="desc">{{item.desc}}</span>
				<span class="content">{{item.content}}</span>
				<span class="forward iconfont">&#xe64a;</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'editInfo',
		data() {
			return {
				editItem: [{
					desc: '昵称',
					content: 'kim',
				}, {
					desc: '性别',
					content: 'man'
				}, {
					desc: '生日',
					content: '1996-10-30'
				}]
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
	.editInfo
		.header
			height .8rem
			text-align center
			background #fff
			position relative
			.back
				height .8rem
				line-height .8rem
				font-size .6rem
				color #000
				position absolute
				z-index 2
				left 0
			.headerName
				font-size $headerFontSize
				position absolute
				left 0px
				right 0px
				margin auto
				line-height .8rem
		.outer
			margin-top .3rem
			padding $pageEdge $pageEdge
			background #fff
			.avatar
				width 100%
				height 1rem
				display flex
				align-items center
				font-size .3rem
				border-bottom 1px solid #ccc
				// border 1px solid #000
				// box-sizing border-box
				.desc
					display inline-block
					width 25%
					// border 1px solid #000
					// box-sizing border-box
				.img
					width 70%
					height .8rem
					// border 1px solid #000
					// box-sizing border-box
					img
						height 100%
				.forward
					display inline-block
					width 5%
					font-size .4rem
					// border 1px solid #000
					// box-sizing border-box
			.itemWrap
				width 100%
				height .8rem
				display flex
				align-items center
				font-size .3rem
				border-bottom 1px solid #ccc
				.desc
					display inline-block
					width 25%
				.content
					width 70%
				.forward
					display inline-block
					width 5%
					font-size .4rem				
			.itemWrap:last-child
				border-bottom none		
</style>
