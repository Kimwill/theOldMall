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
			<span class="status">{{ordersStatus}}</span>
		</div>
	</div>
</template>
<script>
	import Header from 'components/Header.vue'
	export default {
		name: 'myBuy',
		components: {
			Header
		},
		data() {
			return {
				userId: JSON.parse(localStorage.getItem('user'))._id,
				headerName: '我买到的',
				orders: []
			}
		},
		computed: {
			ordersStatus() {
				let status = ''
				this.orders.forEach((value, index) => {
					value.status === 1 ? status = '交易成功' : status = '等待确认'
				})
				console.log(status)
				return status
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {
				this.axios.get(`/api/profiles/myBuy/${this.userId}`).then(res => {
					console.log(res.data)
					this.orders = res.data
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
		.status
			position absolute
			bottom 10px
			right 10px
			color #999
			font-size 16px
</style>