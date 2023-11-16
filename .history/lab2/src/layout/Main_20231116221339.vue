<script setup lang="ts">
	import { ref } from 'vue';
	import { useScrollStore } from '@/store/modules/scroll/index';
	import router from '@/router';
	const scrollStore = useScrollStore();
	scrollStore.init();
	const main = ref();
	router.beforeEach((to, from, next) => {
		scrollStore.update(from.fullPath, main.value.scrollTop);
		next();
	});
	router.afterEach((to, from) => {
		console.log(to.fullPath, scrollStore.useScroll(to.fullPath));
		console.log(main.value);
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
