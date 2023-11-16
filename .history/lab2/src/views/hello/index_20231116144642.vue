<script setup lang="ts">
	import { useRouter } from 'vue-router';
	const router = useRouter();
	function enter() {
		router.push({
			path: '/home',
		});
	}
</script>

<template>
	<div
		style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%)"
		class="flex flex-col justify-around"
	>
		<div class=""></div>
		<div class="px-12 py-8 font-mono font-bold text-white rounded-lg bg-emerald-300">Start</div>
	</div>
</template>

<style scoped></style>
