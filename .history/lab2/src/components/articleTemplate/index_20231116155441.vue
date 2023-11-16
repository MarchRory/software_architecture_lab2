<script setup lang="ts">
	import { ref } from 'vue';
	const props = defineProps<{
		type: string;
		introduce: string;
		summary: string;
	}>();
</script>

<template>
	<div class="w-full font-mono h-fit">
		<div class="flex flex-col items-center mb-12">
			<div class="w-full mt-24 mb-8 font-sans text-5xl font-bold text-center">
				{{ type }}
			</div>
			<div class="flex-wrap w-8/12 font-mono text-sm font-bold break-words summary text-zinc-400">
				{{ summary }}
			</div>
		</div>
		<main class="flex flex-col justify-around">
			<div class="mb-12">
				<div class="title">风格介绍</div>
				<br />
				<article class="px-8 font-bold indent-8 text-zinc-500">{{ introduce }}</article>
			</div>
			<div>
				<div class="title">风格介绍</div>
				<br />
			</div>
		</main>
	</div>
</template>

<style scoped>
	.summary::before {
		content: '';
		display: block;
		width: 15px;
		height: 15px;
		position: relative;
		right: 15px;
		border-left: 3px solid rgb(169, 169, 169);
		border-top: 3px solid gray;
	}
	.summary::after {
		content: '';
		display: block;
		width: 15px;
		height: 15px;
		position: relative;
		left: 94%;
		border-right: 3px solid rgb(169, 169, 169);
		border-bottom: 3px solid gray;
	}
	.title {
		@apply font-mono text-3xl font-bold text-zinc-600;
	}
	.title::before {
		content: '';
		margin-right: 10px;
		border-left: 4px solid rgb(23, 173, 173);
		height: 1.875rem;
	}
</style>
