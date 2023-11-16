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
		<div
			@click="enter"
			class="px-4 py-2 font-mono text-lg font-bold text-white rounded-lg hover:cursor-pointer bg-emerald-400"
		>
			Start
		</div>
	</div>
</template>

<style scoped></style>
