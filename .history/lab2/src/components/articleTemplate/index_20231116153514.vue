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
		<div class="flex flex-col items-center">
			<div class="w-full mt-24 mb-8 font-sans text-5xl font-bold text-center">
				{{ type }}
			</div>
			<div class="flex-wrap w-8/12 font-mono text-sm font-bold break-words summary text-zinc-400">
				{{ summary }}
			</div>
		</div>
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
		border-left: 3px solid gray;
		border-top: 3px solid gray;
	}
	.summary::after {
		content: '';
		display: block;
		width: 15px;
		height: 15px;
		position: relative;
		left: 93%;
		border-right: 3px solid gray;
		border-bottom: 3px solid gray;
	}
</style>
