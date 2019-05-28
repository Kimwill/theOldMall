<template>
	<div class="Buy">
		<Header :headerName="headerName"></Header>
		<div class="goodWrap">
			<div class="imgWrap">
				<img :src="good.goodImg[0]">
			</div>
			<div class="descWrap">
				<p class="goodName">{{good.goodName}}</p>
				<p class="price">￥{{good.goodPrice}}</p>
			</div>
		</div>
		<div class="receiveWrap">
			<InputGroup type="text" name="地址" placeholder="输入地点" v-model="orderInfo.place"></InputGroup>
			<InputGroup type="text" name="收货人" placeholder="输入姓名" v-model="orderInfo.consignee"></InputGroup>
			<InputGroup type="text" name="联系电话" placeholder="输入联系电话" v-model="orderInfo.phone"></InputGroup>
		</div>
		<div class="buyBtnWrap">
			<p class="total">实付款： <span>￥{{good.goodPrice}}</span></p>
			<el-button type="primary" class="btn" @click="handleBuy">购买</el-button>
		</div>
	</div>
</template>
<script>
	import Header from 'components/Header.vue'
	import InputGroup from "components/InputGroup"
	export default {
		name: 'Buy',
		components: {
			Header,
			InputGroup
		},
		data() {
			return {
				goodId: this.$route.params.id,
				headerName: '购买商品',
				good: {},
				orderInfo: {
					userId: JSON.parse(localStorage.getItem('user'))._id,
					place: '',
					consignee: '',
					phone: ''
				}
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				this.axios.get(`/api/profiles/goodDetail/${this.goodId}`).then(res => {
					this.good = res.data
				})
			},
			handleBuy() {
				this.orderInfo.goodId = this.goodId
				this.orderInfo.good = this.good
				this.orderInfo.bossId = this.good.userId
				this.axios.post(`/api/profiles/buy/${this.goodId}`, this.orderInfo).then((res) => {
					this.$router.push({path: '/me/buy'})
				})
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.goodWrap
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
	.receiveWrap
		background #fff
		padding 0 10px
		box-sizing border-box
	.buyBtnWrap
		position fixed
		bottom 0
		display flex
		justify-content space-between
		height 50px
		width 100%
		background #fff
		padding 0 10px
		.total
			font-size 20px
			color #000
			height 50px
			line-height 50px
			span
				color red
		.btn
			margin-right 20px
	.receiveWrap >>> .inputGroup label 
		width 22%
		letter-spacing 0px
</style>