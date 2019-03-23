<template>
	<transition class="fadeAnimation">
		<slot></slot>
	</transition>
</template>
<script>
	export default {
		name: 'DadeAnimation'
	}
</script>
<style lang="stylus" scoped>
	.v-enter, .v-leave-to
		opacity 0
	.v-enter-active, .v-leave-active
		transition opacity .5s
</style>