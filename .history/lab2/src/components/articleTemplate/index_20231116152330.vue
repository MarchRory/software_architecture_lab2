<script setup lang="ts">
	import { ref } from 'vue';
	const props = defineProps<{
		type: string;
		introduce: string;
	}>();
</script>

<template>
	<div class="w-full font-mono h-fit">
		<div class="flex flex-col">
			<div class="w-full mt-16 font-sans text-5xl font-bold text-center">
				{{ type }}
			</div>
		</div>
	</div>
</template>
