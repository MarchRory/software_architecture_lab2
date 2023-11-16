<script setup lang="ts">
	import { ref } from 'vue';
	const props = defineProps<{
		type: string;
		introduce: string;
	}>();
</script>

<template>
	<div class="w-full font-mono h-fit">
		<span class="text-3xl font-extrabold">{{ type }}</span>
	</div>
</template>
