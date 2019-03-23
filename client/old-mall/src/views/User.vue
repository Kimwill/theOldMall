<template>
	<div class="user">
		<router-view/>
		<router-link :to="{name: 'login'}">login</router-link>
		<router-link :to="{name: 'register'}">register</router-link>
	</div>
</template>
<script>
	
</script>
<style lang="stylus" scoped>
	.user
		width 100%
		height 100%
</style>