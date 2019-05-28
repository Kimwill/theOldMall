<template>
	<div class="editInfo">
		<Header :headerName="headerName"></Header>
		<div class="outer">
			<router-link class="avatar" to="/me/editInfo/editAvatar" tag="div">
				<span class="desc">头像</span>
				<div class="img">
					<img :src="avatar">
				</div>
				<span class="forward iconfont">&#xe64a;</span>
			</router-link>
			<div class="itemWrap" v-for="(item, index) in editItem" :key="index">
				<span class="desc">{{item.desc}}</span>
				<input class="content" v-model="item.content" />
			</div>
		</div>
		<el-button class="editBtn" type="primary" @click="edit">确认修改</el-button>
	</div>
</template>
<script>
	import Header from 'components/Header.vue'
	export default {
		name: 'editInfo',
		components: {
			Header
		},
		data() {
			return {
				headerName: "编辑资料",
				avatar: '',
				editItem: [{
					desc: '昵称',
					content: '',
				}, {
					desc: '签名',
					content: ''
				}, {
					desc: '学校',
					content: ''
				}]
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				const user = JSON.parse(localStorage.getItem('user'))
				this.avatar = user.avatar
				this.editItem[0].content = user.userName
				this.editItem[1].content = user.userDesc
				this.editItem[2].content = user.school
			},
			edit() {
				const user = JSON.parse(localStorage.getItem('user'))
				user.userName = this.editItem[0].content
				user.userDesc = this.editItem[1].content
				user.school = this.editItem[2].content
				localStorage.setItem('user', JSON.stringify(user))
				this.$router.push({name: 'me'})
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~assets/style/varible.styl'
	.editInfo
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
					height 98%
					border none
					outline none
				.forward
					display inline-block
					width 5%
					font-size .4rem				
			.itemWrap:last-child
				border-bottom none		
		.editBtn
			width 100%
</style>
