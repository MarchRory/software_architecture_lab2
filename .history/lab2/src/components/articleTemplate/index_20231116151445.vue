<script setup lang="ts">
	import { ref } from 'vue';
	const props = defineProps<{
		type: string;
		introduce?: string;
	}>();
</script>

<template>
	<div class="w-full font-mono h-fit">
		<h1>{{ type }}</h1>
	</div>
</template>
