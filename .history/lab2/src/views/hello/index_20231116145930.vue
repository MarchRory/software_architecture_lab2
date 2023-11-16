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
		class="flex flex-col items-center justify-around h-fit"
	>
		<div
			class="flex items-center justify-center mb-8 border-8 rounded-full w-36 h-36 border-l-gray-400"
		>
			<div class="w-20 h-20 bg-teal-400 rounded-full"></div>
		</div>
		<div class="mb-8 text-2xl font-bold text-zinc-600">经典软件体系结构教学</div>
		<div
			@click="enter"
			class="flex items-center justify-center px-4 py-2 font-mono text-lg font-bold text-white rounded-lg hover:cursor-pointer bg-emerald-400"
		>
			Start
		</div>
	</div>
</template>

<style scoped></style>
