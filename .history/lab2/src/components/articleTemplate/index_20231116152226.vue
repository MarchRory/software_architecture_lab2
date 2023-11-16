<script setup lang="ts">
	import { ref } from 'vue';
	const props = defineProps<{
		type: string;
		introduce: string;
	}>();
</script>

<template>
	<div class="w-full font-mono h-fit">
		<span class="block w-full mt-16 font-sans text-3xl font-bold text-center">
			{{ type }}
		</span>
	</div>
</template>
