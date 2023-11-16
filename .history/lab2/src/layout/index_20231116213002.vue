<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useRoute, onBeforeRouteLeave } from 'vue-router';
	import { useScrollStore } from '@/store/modules/scroll/index';
	import router from '@/router';
	const Navbar = defineAsyncComponent(() => import('./navbar.vue'));
	const APPMain = defineAsyncComponent(() => import('./Main.vue'));
	const scrollStore = useScrollStore();
	scrollStore.init();
	const appMain = ref();
	router.beforeEach((to, from, next) => {
		console.log('app: ', appMain.value);
		console.log('fromPath: ', from.fullPath);
		scrollStore.update(from.fullPath, appMain.value.scrollTop);
		next();
	});
	router.afterEach((to) => {
		console.log(appMain.value, scrollStore.scrollMap);
		appMain.value.scrollTop = scrollStore.useScroll(to.fullPath);
	});
</script>

<template>
	<div class="flex flex-col w-full h-full">
		<Navbar />
		<APPMain ref="appMain" class="flex-1" />
	</div>
</template>
