<script setup lang="ts">
	import { ref } from 'vue';
	import { useScrollStore } from '@/store/modules/scroll/index';
	import router from '@/router';
	const scrollStore = useScrollStore();
	scrollStore.init();
	const main = ref();
	router.beforeEach((to, from, next) => {
		console.log(scrollStore.scrollMap);
		scrollStore.update(from.fullPath, main.value.scrollTop);
		console.log(from.fullPath, scrollStore.useScroll(from.fullPath));
		next();
	});
	router.afterEach((to) => {
		main.value.scrollTop = scrollStore.useScroll(to.fullPath) as number;
	});
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
