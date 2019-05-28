<template>
	<div>
		<div class="search">
			<input class="goodInput" type="text" placeholder="输入商品信息" v-model="keyword">
		</div>
		<div 
			class="searchContent" 
			@click="searchPageShow"
			ref="search"
			v-show="keyword"
		>
			<ul>
				<li
					v-for="(item,index) in list" 
					:key="index"
					class="searchItem border-bottom"
					@click="handleclick(item.goodId)"
				>
					{{item.goodDesc}}
				</li>
				<li class="searchItem border-bottom" v-show="!hasNoData">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		goods: Array
	},
	data() {
		return {
			keyword: "",
			list: [],
			timer: null
		}
	},
	computed: {
		hasNoData() {
			return this.list.length;
		},
		goodLists() {
			let goodLists = []
			this.goods.forEach((value, index) => {
				let good = {}
				good.goodDesc = value.goodDesc
				good.goodId = value.goodId
				goodLists.push(good)
			})
			return goodLists
		}
	},
	mounted() {
		console.log(this.goodLists)
	},
	methods: {
		handleclick(goodId) {
			this.$router.push({path: `/goodDetail/${goodId}`})
		},
		searchPageShow() {
			this.$emit('searchClose')
		}
	},
	watch: {
		keyword () {
			if(this.timer) {
				clearTimeout(this.timer);
			}
			if(!this.keyword) {
				this.list = [];
				return;
			}
			this.timer = setTimeout(() => {
				const result = [];
				// for(let i in this.goodLists) {
				// 	this.goodLists[i].forEach((value) => {
				// 		if(value.spell.indexOf(this.keyword) > -1 
				// 			 || value.name.indexOf(this.keyword) > -1) {
				// 			result.push(value);
				// 		}
				// 	})
				// }
				this.goodLists.forEach((value, index) => {
					if(value.goodDesc.indexOf(this.keyword) > -1) {
						result.push(value)
					}
				})
				this.list = result;
				console.log(this.list)
			}, 100)
		}
	}
}
</script>

<style lang="stylus" scoped>
	.search
		position absolute
		top 0px
		left 0px
		right 0px
		bottom 0px
		background:#fff
		padding:0 .1rem
		.goodInput
			box-sizing:border-box
			width:100%
			height: 40px
			line-height 40px
			text-align:center
			outline none
			border 1px solid #ccc
			// padding:0 .1rem
	.searchContent
		overflow:hidden
		position:absolute
		top:100px
		right:0
		bottom:100px
		left:0
		background:#eee
		z-index:1
		.searchItem
			font-size 16px
			height:50px
			line-height:50px
			text-indent: .2rem
			background:#fff
			color:#000
			overflow hidden
			text-overflow ellipsis
			white-space nowrap
			border-bottom 1px solid #ccc
</style>
