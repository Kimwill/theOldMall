<template>
	<div>
		<Header :headerName="headerName"></Header>
		<div class="goodWrap" v-for="(item, index) in orders" :key="index">
			<div class="imgWrap">
				<img :src="item.good.goodImg[0]">
			</div>
			<div class="descWrap">
				<p class="goodName">{{item.good.goodName}}</p>
				<p class="price">￥{{item.good.goodPrice}}</p>
			</div>
			<el-button v-if="item.status === 0" class="sendGood" @click="sendGood(item._id)">确认发货</el-button>
			<p class="status" v-else>已完成</p>
		</div>
	</div>
</template>
<script>
	import Header from 'components/Header.vue'
	export default {
		components: {
			Header
		},
		data() {
			return {
				userId: JSON.parse(localStorage.getItem('user'))._id,
				headerName: '我卖出的',
				orders: []
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {
				this.axios.get(`/api/profiles/mySale/${this.userId}`).then(res => {
					this.orders = res.data
				})
			},
			sendGood(orderId) {
				console.log(orderId)
				this.axios.post(`/api/profiles/sendGood/${orderId}`).then(res => {
					this.init()
				})
			}
		}
	}
</script>
<style lang="stylus" scoped>
.goodWrap
	position relative
	width 100%
	height 120px
	background #fff
	box-sizing border-box
	margin-top 10px
	padding 10px
	display flex 
	.imgWrap
		height 100%
		width 30%
		img
			height 100%
			width 100%
	.descWrap
		flex 1
		position relative
		padding-left 10px
		.goodName
			font-size 16px
			color #000
		.price
			position absolute
			bottom 0px
			font-size 20px
			color red
	.sendGood
		position absolute
		z-index 2
		top 40px
		right 10px
	.status
		position absolute
		bottom 10px
		right 10px
		color #999
		font-size 16px
</style>