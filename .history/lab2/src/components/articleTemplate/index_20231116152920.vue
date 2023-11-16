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
			<div class="w-full mt-24 font-sans text-5xl font-bold text-center">
				{{ type }}
			</div>
			<div>{{ summary }}</div>
		</div>
	</div>
</template>
