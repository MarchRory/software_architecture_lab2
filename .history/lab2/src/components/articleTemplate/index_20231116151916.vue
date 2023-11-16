<script setup lang="ts">
	import { ref } from 'vue';
	const props = defineProps<{
		type: string;
		introduce: string;
	}>();
</script>

<template>
	<div class="w-full font-mono h-fit">
		<span class="font-sans text-3xl font-bold align-middle">{{ type }}</span>
	</div>
</template>
