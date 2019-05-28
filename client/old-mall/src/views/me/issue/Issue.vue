<template>
	<div class="issue">
		<Header :headerName="headerName"></Header>
		<div class="content">
			<div class="page" @click="changeView">宝贝</div>
			<div class="page" @click="changeView" :blogs="myIssue.blogs">帖子</div>
			<component :is="view" :blogs="myIssue.blogs" :goods="myIssue.goods"></component>
		</div>
	</div>
</template>
<script>
	import Header from 'components/Header.vue'
	import MyGood from './MyGood.vue'
	import MyBlog from './MyBlog.vue'
	export default {
		name: 'issue',
		components: {
			Header,
			MyGood,
			MyBlog
		},
		data() {
			return {
				userId: JSON.parse(localStorage.getItem('user'))._id,
				headerName: "我发布的",
				view: 'MyGood',
				myIssue: {
					goods: [],
					blogs: []
				}
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {
				this.axios.get(`/api/profiles/getIssue/${this.userId}`).then(res => {
					this.myIssue = res.data
					console.log(this.myIssue.blogs)
				})
			},
			changeView(e) {
				if(e.target.innerText === '宝贝') {
					this.view = 'MyGood'
				} else {
					this.view = 'MyBlog';
				}
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~assets/style/varible.styl'
	.issue
		.content
			// margin .3rem 0
			padding 0 $pageEdge
			background #fff
			.page
				display inline-block
				box-sizing border-box
				height .6rem
				width 50%
				margin .1rem 0
				line-height .6rem
				font-size .3rem
				text-align center
			.page:first-child
				border-right 1px solid #ccc
</style>
