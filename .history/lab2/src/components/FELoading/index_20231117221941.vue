<script setup lang="ts"></script>

<template>
	<div class="FE">
		<div class="ball"></div>
	</div>
</template>

<style scoped>
	.FE {
		@apply fixed w-full h-full bg-emerald-300;
	}
	.ball {
		@apply absolute w-8 h-8 rounded-full bg-white;
	}
</style>
