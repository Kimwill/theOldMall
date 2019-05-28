<template>
	<div class="goodDetailWrap">
		<div class="back iconfont" @click="handleBackClick">&#xe608;</div>
		<div class="good">
			<div class="userInfo">
				<div class="userIcon">
					<img :src="good.userIcon">
				</div>
				<span class="userName">{{good.userName}}</span>
			</div>
			<div class="goodDetail">
				<p class="price"><span>￥</span>{{good.price}}</p>
				<p class="goodDesc">{{good.goodDesc}}</p>
				<div class="goodImg">
					<div class="goodImgItem" v-for="(imgItem, index) in good.goodImg" :key="index">
						<img :src="imgItem">
					</div>
				</div>
			</div>
		</div>
		<div class="leaveWord">
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
			</div>
		</div>
		<div class="buyBtnWrap">
			<el-button type="primary" class="buyBtn" @click="buy">我想买</el-button>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'goodDetail',
		data() {
			return {
				goodId: '',
				good: {
					userName: '',
					userIcon: '',
					goodDesc: '',
					price: '',
					goodImg: [],
					commentNum: 0
				},
				comments: [],
				myComment: ''
			}
		},
		created() {
			this.goodId = this.$route.params.id
			this.init()
			console.log(this.comments)
		},
		methods: {
			init() {
				this.axios.get(`/api/profiles/goodDetail/${this.goodId}`).then(res => {
					this.good.userName = res.data.userName
					this.good.userIcon = res.data.userIcon
					this.good.goodDesc = res.data.goodDesc
					this.good.price = res.data.goodPrice
					this.good.goodImg = res.data.goodImg
					this.good.merchantId = res.data.userId
					console.log(this.good)
				})
				this.axios.get(`/api/profiles/comment/${this.$route.params.id}`).then(res => {
					this.comments = res.data
				})
			},
			handleBackClick() {
				this.$router.push({path: '/home/index'})
			},
			issueComment() {
				let user = JSON.parse(localStorage.getItem('user'))
				let commentModel = {
					content: this.myComment,
					userInfo: user,
					relatedId: this.$route.params.id,
					merchantId: this.good.merchantId,
					type: 'blog'
				}
				this.axios.post(`/api/profiles/comment/${this.goodId}`, commentModel).then(res => {
					this.comments.push(res.data)
				})
				this.myComment = ''
			},
			buy() {
				this.$router.push({path: `/buy/${this.goodId}`})
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~assets/style/varible.styl'
	.goodDetailWrap
		background $bgColor
		.back
			position fixed
			top 0px
			height .8rem
			width 100%
			background $bgColor
			line-height .8rem
			font-size .6rem
		.good
			margin-top .8rem
			padding 0 $pageEdge
			background #fff
			.userInfo
				height 1rem
				width 100%
				padding-bottom .2rem
				border-bottom 1px solid #eee
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
			.goodDetail
				padding-top .2rem
				.price
					height .8rem
					line-height .8rem
					font-size .4rem
					font-weight bold
					color red
					span
						font-size .2rem
				.goodDesc
					font-size .3rem
					padding-bottom .2rem
				.goodImg
					padding .2rem 0
					.goodImgItem
						font-size 0
						width 100%
						margin-bottom .1rem
						img
							width 100%
		.leaveWord
			padding 0 $pageEdge
			margin-top .15rem
			margin-bottom 60px
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
					// flex 2.6
					width 100%
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
		.buyBtnWrap
			position fixed
			bottom 0px
			overflow hidden
			width 100%
			background #fff
			display flex 
			justify-content center
			.buyBtn
				width 80%
				float left
</style>