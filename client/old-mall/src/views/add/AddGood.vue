<template>
	<div class="addGood">
		<Header :headerName="headerName"></Header>
		<div class="wrap">
			<div class="textWrap">
				<div class="goodHeader">
					<input type="text" placeholder="标题 品类品牌型号都是买家喜欢搜索的" v-model="goodInfo.goodHeader">
				</div>
				<div class="goodDesc">
					<textarea placeholder="描述宝贝的转手原因，入手渠道和使用感受" v-model="goodInfo.goodDesc"></textarea>
				</div>
			</div>
			<div class="imgWrap">
				<ImgsUpload ref="imgWrap" @passImg="handleGoodImg" @issue="goodIssue"></ImgsUpload>
			</div>
		</div>
		<div class="wrap">
			<div class="priceHeader">价格</div>
			<div class="price">
				<InputGroup type="text" name="价格" placeholder="你接受的价格" v-model="goodInfo.price"></InputGroup>
			</div>
			<div class="classify">
				<span class="label">分类</span>
				<el-select
					class="select"
				  v-model="goodInfo.classify"
				  multiple
				  collapse-tags
				  placeholder="请选择">
				  <el-option
				    v-for="(item, index) in classifyOptions"
				    :key="index"
				    :label="item"
				    :value="item">
				  </el-option>
				</el-select>
			</div>
			<div class="way">
				<span class="label">交易方式</span>
				<el-checkbox-group v-model="goodInfo.way">
				  <el-checkbox-button v-for="item in way" :label="item" :key="item">{{item}}</el-checkbox-button>
				</el-checkbox-group>
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
		name: "addGood",
		components: {
			Header,
			ImgsUpload,
			InputGroup
		},
		data() {
			return {
				headerName: "发布商品",
				goodInfo: {
					goodHeader: "",
					goodDesc: "",
					goodImg: [],
					price: "",
					classify: [],
					way: []
				},
				classifyOptions:  ['二手书', '数码', '衣服', '鞋子', '自行车', '文具', '电器', '背包', '其他'],
				way: ['自提', '同校面交', '邮寄']
			}
		},
		methods: {
			handleGoodImg(imgs) {
				this.goodInfo.goodImg = imgs
			},
			qiniuIssue() {
				this.$refs.imgWrap.handleIssue()
			},
			goodIssue(imgLength, imageUrlLen) {
				let user = JSON.parse(localStorage.getItem('user'))
				this.goodInfo.userInfo = user
				this.goodInfo.userId = user._id
				if(imgLength === imageUrlLen) {
					this.axios.post('/api/profiles/addGood', this.goodInfo).then(res => {
						this.$router.push({path: `/goodDetail/${res.data._id}`})
					})
				}
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~assets/style/varible.styl'
	.addGood
		background #fff
		.wrap
			font-size .3rem
			padding 0 $pageEdge
			margin-bottom 30px
			.textWrap
				.goodHeader
					height .8rem
					width 100%
					border-bottom 1px solid #ccc
					input
						font-size .28rem
						height 100%
						width 100%
						border none
						outline none
				.goodDesc
					width 100%
					textarea
						padding-top .2rem
						font-size .3rem
						width 100%
						height 3rem
						border none
						outline none
			.priceHeader
				height .8rem
				width 100%
				text-align center
				font-size .36rem
			.price
				margin-bottom .3rem
			.classify
				width 100%
				height .6rem
				font-size .3rem
				display flex
				align-items center
				margin-bottom .3rem
				padding-bottom .2rem
				border-bottom 1px solid #ccc
				.label
					width 30%
				.select
					flex 1
			.way
				width 100%
				height .6rem
				font-size .3rem
				display flex
				align-items center
				.label
					width 30%
				.checkbox
					flex 1
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
