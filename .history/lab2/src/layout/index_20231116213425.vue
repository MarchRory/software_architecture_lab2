<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useRoute, onBeforeRouteLeave } from 'vue-router';
	import { useScrollStore } from '@/store/modules/scroll/index';
	import router from '@/router';
	const Navbar = defineAsyncComponent(() => import('./navbar.vue'));
	const APPMain = defineAsyncComponent(() => import('./Main.vue'));
	const scrollStore = useScrollStore();
	scrollStore.init();
	const appMain = ref<HTMLElement>();
	router.beforeEach((to, from, next) => {
		if (appMain.value) {
			scrollStore.update(from.fullPath, appMain.value.scrollTop);
			next();
		}
		console.log('leave: -----------------------------------');
		console.log('app: ', appMain.value);
		console.log('fromPath: ', from.fullPath);
	});
	router.afterEach((to) => {
		console.log('enter: -----------------------------------');
		if (appMain.value) {
			console.log('onActived: ', appMain.value);
			appMain.value.scrollTop = scrollStore.useScroll(to.fullPath) as number;
		}
	});
</script>

<template>
	<div class="flex flex-col w-full h-full">
		<Navbar />
		<APPMain ref="appMain" class="flex-1" />
	</div>
</template>
