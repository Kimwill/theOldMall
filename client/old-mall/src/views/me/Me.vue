<template>
	<div class="me">
		<div class="wrap">
			<router-link 
				class="info"
				:to="infoLinkTo"
				tag="div"
			>
				<div class="text">
					<span class="userName">{{user.userName}}</span>
					<span class="userDesc">{{user.userDesc}}</span>
				</div>
				<div class="avatar">
					<img :src="user.avatar" v-if="user.avatar">
				</div>
				<span class="iconfont">&#xe64a;</span>
			</router-link>
			<div class="num">
				<div class="numWrap">
					<span class="number">{{user.likeNum}}</span>
					<span class="numDesc">超赞</span>
				</div>
				<div class="numWrap">
					<span class="number">{{user.careNum}}</span>
					<span class="numDesc">关注数</span>
				</div>
				<div class="numWrap">
					<span class="number">{{user.fansNum}}</span>
					<span class="numDesc">粉丝数</span>
				</div>
			</div>
		</div>	
		<div class="wrap">
			<div class="itemWrap" v-for="item in itemArr" @click="handleItemClick(item.itemText)">
				<div class="imgWrap">
					<img :src="item.imgSrc" class="itemIcon">
				</div>
				<span class="itemText">{{item.itemText}}</span>
				<span class="iconfont">&#xe64a;</span>
				<span class="itemNum">{{item.num}}</span>
			</div>
		</div>
		<div class="wrap">
			<div class="itemWrap" v-for="item in itemSetArr" @click="handleItemClick(item.itemText)">
				<div class="imgWrap">
					<img :src="item.imgSrc" class="itemIcon">
				</div>
				<span class="itemText">{{item.itemText}}</span>
				<span class="iconfont">&#xe64a;</span>
			</div>
		</div>
		<div class="wrap">
			<div class="itemWrap loginRegister" v-if="isLogin" @click="handleLogout">退出登录</div>
			<div class="itemWrap loginRegister" v-else @click="handleLogin">登录</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "me",
		data() {
			return {
				user: {
					userName: '未登录',
					userDesc: '',
					avatar: '',
					likeNum: 0,
					careNum: 0,
					fansNum: 0
				},
				itemArr: [{
					imgSrc: require('assets/img/me/issue.png'),
					itemText: '我发布的',
					num: 0
				}, {
					imgSrc: require('assets/img/me/sale.png'),
					itemText: '我卖出的',
					num: 0
				}, {
					imgSrc: require('assets/img/me/buy.png'),
					itemText: '我买到的',
					num: 0
				}, {
					imgSrc: require('assets/img/me/collection.png'),
					itemText: '我收藏的',
					num: 0
				}, {
					imgSrc: require('assets/img/me/article.png'),
					itemText: '我的帖子',
					num: 0
				}],

				itemSetArr: [{
					imgSrc: require('assets/img/me/set.png'),
					itemText: '设置'
				}, {
					imgSrc: require('assets/img/me/sevice.png'),
					itemText: '客服中心'
				}],
				isLogin: false,
			}
		},
		computed: {
			infoLinkTo() {
				return this.isLogin ? '/me/editInfo' : '/user/login'
			}
		},
		created() {
			// console.log(localStorage.getItem('loginToken'));
			// if(localStorage.getItem('loginToken'))
			if(localStorage.getItem('loginToken')) {
				this.isLogin = true
				this.user = JSON.parse(localStorage.getItem('user'))
			}
			this.init()
		},
		methods: {
			init() {
				this.axios.get(`/api/profiles/getNums/${this.user._id}`).then(res => {
					this.itemArr[0].num = res.data.issueGoodNum + res.data.issueBlogNum
					this.itemArr[1].num = res.data.saleNum
					this.itemArr[2].num = res.data.buyNum
				})
			},
			handleItemClick(itemText) {
				switch(itemText) {
					case '我发布的':
						this.$router.push({path: '/me/issue'})
						break
					case '我买到的':
						this.$router.push({path: '/me/buy'})
						break
					case '我卖出的':
						this.$router.push({path: '/me/sale'})
						break
				}
			},
			handleLogout() {
				this.isLogin = false
				this.user = {
					userName: '未登录',
					userDesc: '',
					avatar: '',
					likeNum: 0,
					careNum: 0,
					fansNum: 0
				}
				localStorage.removeItem('loginToken')
				localStorage.removeItem('user')
			},
			handleLogin() {
				this.$router.push({name: "login"})
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~assets/style/varible.styl'
	.me
		width 100%
		background $bgColor
		.wrap
			box-sizing border-box
			width 100%
			padding 0 $pageEdge
			background #fff
			margin-bottom .2rem
			.info
				height 2rem
				width 100%
				box-sizing border-box
				// border 1px solid #000
				display flex
				.text
					flex 7
					margin auto 0
					box-sizing border-box
					// border 1px solid #000
					.userName
						font-size .5rem
						display block
						margin-bottom .1rem				
					.userDesc
						font-size .2rem
						display block
				.avatar
					// flex 2.5
					width 1.2rem
					overflow hidden
					box-sizing border-box
					// border 1px solid #000
					display flex
					align-items center
					img
						width 1.2rem
						height 1.2rem
				.iconfont
					flex .5
					height 2rem
					line-height 2rem
					font-size .4rem
					box-sizing border-box
					// border 1px solid #000
			.num
				display flex
				height 1rem
				box-sizing border-box
				// border 1px solid #000
				.numWrap
					flex 1
					margin auto 0
					text-align center
					box-sizing border-box
					// border 1px solid #000
					.number
						display block
						height .4rem
						line-height .4rem
						font-size .3rem
					.numDesc
						display block
						font-size .2rem
			.itemWrap
				width 100%
				height .8rem
				border-bottom 1px solid #ccc
				overflow hidden
				.imgWrap
					float left
					overflow hidden
					width 10%
					height 100%
					position relative
					overflow hidden
					.itemIcon
						width 80%
						display block
						position absolute
						top 0
						right 0
						bottom 0
						left 0
						margin auto
				.itemText
					width 70%
					display inline-block
					height 100%
					line-height .8rem
					font-size .3rem
					float left
				.itemNum
					width 10%
					display inline-block
					height 100%
					line-height .8rem
					font-size .24rem
					float right
				.iconfont
					display inline-block
					height 100%
					line-height .8rem
					width 10%
					float right
			.loginRegister
				margin 0
				padding 0 
				font-size .3rem
				text-align center
				line-height .8rem
</style>