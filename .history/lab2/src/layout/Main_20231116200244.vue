<script setup lang="ts">
	import { ref } from 'vue';
	import { onBeforeRouteLeave } from 'vue-router';
	const test = ref();
	onBeforeRouteLeave((to, from, next) => {
		console.log(test);
		next();
	});
</script>

<template>
	<div class="w-full h-auto px-56 pt-4 overflow-auto">
		<router-view v-slot="{ Component }">
			<keep-alive>
				<component :is="Component" ref="test" />
			</keep-alive>
		</router-view>
	</div>
</template>
