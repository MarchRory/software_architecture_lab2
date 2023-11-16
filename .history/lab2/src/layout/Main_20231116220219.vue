<script setup lang="ts">
	import { onMounted, ref } from 'vue';
	const main = ref();
	onMounted(() => {
		console.log(main.value);
	});
	defineExpose({ DOM: main.value });
</script>

<template>
	<div class="w-full h-auto px-56 pt-4 overflow-auto" ref="main">
		<router-view v-slot="{ Component }">
			<keep-alive>
				<component :is="Component" />
			</keep-alive>
		</router-view>
	</div>
</template>
