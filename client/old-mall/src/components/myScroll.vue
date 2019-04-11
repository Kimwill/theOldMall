<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default {
		props: {
			/** 
			 * 1 滚动时会派发scroll事件，会截流
			 * 2 滚动时会派发scroll事件，不会截流
			 * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
			*/
			probeType: {
				type: Number,
				default: 1
			},
			// 点击列表是否派发click事件
			click: {
				type: Boolean,
				default: true
			},
			// 是否开启横向滚动
			scrollX: {
				type: Boolean,
				default: false
			},
			// 是否派发滚动事件
			listenScroll: {
				type: Boolean,
				default: false
			},
			// 列表的数据
			data: {
				type: Array,
				default: null
			},
			// 是否派发滚动到底部事件，用于上拉加载
			pullUp: {
				type: Boolean,
				default: false
			},
			// 是否派发顶部下拉事件，用于上拉刷新
			pullDown: {
				type: Boolean,
				default: false
			},
			// 是否派发列表滚动开始事件
			beforeScroll: {
				type: Boolean,
				default: false
			},
			// 数据刷新后，刷新scroll的延迟
			refreshDelay: {
				type: Number,
				default: 20
			}
		},
		mounted() {
			setTimeout(() => {
				this._initScroll();
			}, 20)
		},
		methods: {
			_initScroll() {
				if(!this.$refs.wrapper) {
					return;
				}
				// better-scroll初始化
				this.scroll = new BScroll(this.$refs.wrapper, {
					probeType: this.probeType,
					scrollX: this.scrollX,
					click: this.click
				})
				// 是否派发滚动事件
				if(this.listenScroll) {
					this.scroll.on('scroll', (pos) => {
						this.$emit('scroll', pos);
					})
				}
				// 是否派发滚动到底部事件，用于上拉加载
				if(this.pullUp) {
					this.scroll.on('scrollEnd', () => {
						if(this.scroll.y <= (this.scroll.maxScrollY + 50)) {
							this.$emit('scrollToEnd');
						}
					})
				}
				// 是否派发顶部下拉事件，用于下拉刷新
				if(this.pullDown) {
					this.scroll.on('touchEnd', (pos) => {
						if(pos.y > 30) {
							this.$emit('pullDown');
						}
					}) 
				}
				// 是否派发列表滚动开始的事件
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
			},
			disable() {
			  // 代理better-scroll的disable方法
			  this.scroll && this.scroll.disable()
			},
			enable() {
			  // 代理better-scroll的enable方法
			  this.scroll && this.scroll.enable()
			},
			refresh() {
			  // 代理better-scroll的refresh方法
			  this.scroll && this.scroll.refresh()
			},
			scrollTo() {
			  // 代理better-scroll的scrollTo方法
			  this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
			},
			scrollToElement() {
			  // 代理better-scroll的scrollToElement方法
			  this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
			}
		},
		watch: {
			data() {
				setTimeout(() => {
					this.refresh();
				}, this.refreshDelay);
			}
		}
	}
</script>
