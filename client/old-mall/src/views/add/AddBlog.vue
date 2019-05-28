<template>
	<div class="addBlog">
		<Header :headerName="headerName"></Header>
		<div class="wrap">
			<div class="textWrap">
				<div class="blogHeader">
					<input type="text" placeholder="标题" v-model="blogInfo.blogHeader">
				</div>
				<div class="blogDesc">
					<textarea placeholder="写些什么和大家分享..." v-model="blogInfo.blogDesc"></textarea>
				</div>
			</div>
			<div class="imgWrap">
				<ImgsUpload ref="imgWrap" @passImg="handleBlogImg" @issue="blogIssue"></ImgsUpload>
			</div>
		</div>
	 	<div class="wrap">
			<el-button type="primary" class="issue" @click="qiniuIssue">确定发布</el-button>
		</div>
	</div>
</template>
<script>
	import Header from 'components/Header'
	import ImgsUpload from 'components/ImgsUpload'
	import InputGroup from 'components/InputGroup'
	export default {
		name: "addBlog",
		components: {
			Header,
			ImgsUpload,
			InputGroup
		},
		data() {
			return {
				headerName: "发帖子",
				blogInfo: {
					blogHeader: "",
					blogDesc: "",
					blogImg: []
				}
			}
		},
		methods: {
			handleBlogImg(imgs) {
				this.blogInfo.blogImg = imgs
			},
			qiniuIssue() {
				this.$refs.imgWrap.handleIssue()				
			},
			blogIssue() {
				let user = JSON.parse(localStorage.getItem('user'))
				this.blogInfo.userInfo = user
				this.blogInfo.userId = user._id
				console.log(this.blogInfo)
				this.axios.post('/api/profiles/addBlog', this.blogInfo).then(res => {
					this.$router.push({path: `/blogDetail/${res.data._id}`})
				})
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~assets/style/varible.styl'
	.addBlog
		background #fff
		.wrap
			font-size .3rem
			padding 0 $pageEdge
			margin-bottom 30px
			.textWrap
				.blogHeader
					height .8rem
					width 100%
					border-bottom 1px solid #ccc
					input
						font-size .28rem
						height 100%
						width 100%
						border none
						outline none
				.blogDesc
					width 100%
					textarea
						padding-top .2rem
						font-size .3rem
						width 100%
						height 3rem
						border none
						outline none
		.issue
			width 100%
	::-webkit-input-placeholder {
	    color: #ccc;
	}
	::-moz-placeholder {
	    color: #ccc;
	}
	:-ms-input-placeholder {
	    color: #ccc;
	}
</style>
