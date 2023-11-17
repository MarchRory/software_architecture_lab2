<script setup lang="ts"></script>

<template>
	<div class="FE">
		<div class="ball"></div>
	</div>
</template>

<style scoped>
	.FE {
		@apply fixed w-full h-full bg-emerald-300 flex items-center justify-center;
	}
	.ball {
		@apply absolute w-16 h-16 rounded-full bg-white;
	}
</style>
