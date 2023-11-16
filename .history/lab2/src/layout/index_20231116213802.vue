<script setup lang="ts">
	import { defineAsyncComponent, nextTick, ref } from 'vue';
	import { useRoute, onBeforeRouteLeave } from 'vue-router';
	import { useScrollStore } from '@/store/modules/scroll/index';
	import router from '@/router';
	const Navbar = defineAsyncComponent(() => import('./navbar.vue'));
	const APPMain = defineAsyncComponent(() => import('./Main.vue'));
	const scrollStore = useScrollStore();
	scrollStore.init();
	const scroll = ref(0);
	const appMain = ref<HTMLElement>();
	router.beforeEach((to, from, next) => {
		scrollStore.update(from.fullPath, scroll.value);
		console.log('leave: -----------------------------------');
		console.log('app: ', appMain.value);
		console.log('fromPath: ', from.fullPath);
		next();
	});
	router.afterEach((to) => {
		console.log('enter: -----------------------------------');
		if (appMain.value) {
			console.log('onActived: ', appMain.value);
			nextTick(() => {
				appMain.value.scrollTop = scrollStore.useScroll(to.fullPath) as number;
			});
		}
	});
</script>

<template>
	<div class="flex flex-col w-full h-full">
		<Navbar />
		<APPMain
			ref="appMain"
			@scroll="
				(e) => {
					scroll = e.target.scrollTop;
				}
			"
			class="flex-1"
		/>
	</div>
</template>
