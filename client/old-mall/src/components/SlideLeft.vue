<template>
	<transition class="slideLeft">
		<slot></slot>
	</transition>
</template>
<script>
	export default {
		name: 'DadeAnimation'
	}
</script>
<style lang="stylus" scoped>
	.v-enter
		transform translateX(100%)
	.v-enter-to
		transform 0
	.v-leave-active
		transition all 1s
	.v-leave
		transition 0
	.v-leave-to
		transform translateX(-100%)
	.v-enter-active
		transition all 1s
</style>