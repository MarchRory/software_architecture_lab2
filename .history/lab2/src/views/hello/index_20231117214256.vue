<script setup lang="ts">
	import { useRouter } from 'vue-router';
	const router = useRouter();
	function enter() {
		router.push({
			path: '/mainChild',
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
		<div class="mb-8 space-x-2 text-2xl font-bold text-zinc-500">
			<span class="text-teal-400">经典</span>
			软件体系结构
		</div>
		<div class="flex items-center justify-between w-8/12">
			<div
				@click="enter"
				class="flex items-center justify-center px-5 py-3 font-mono text-2xl font-bold text-white rounded-lg hover:cursor-pointer bg-emerald-400"
			>
				Start
			</div>
			<div
				@click="enter"
				class="flex items-center justify-center px-5 py-3 font-mono text-2xl font-bold text-white rounded-lg hover:cursor-pointer bg-emerald-400"
			>
				Start
			</div>
		</div>

		<div class="flex flex-col justify-center mt-12 font-mono font-bold w-fit text-slate-500">
			<div class="text-4xl">Designed By</div>
			<br />
			<div style="margin: 0 auto" class="text-3xl">LiuShi_21</div>
		</div>
	</div>
</template>

<style scoped></style>
