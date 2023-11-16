<script setup lang="ts">
	import { defineAsyncComponent, ref, getCurrentInstance } from 'vue';
	import { useScrollStore } from '@/store/modules/scroll/index';
	import router from '@/router';
	import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
	const Navbar = defineAsyncComponent(() => import('./navbar.vue'));
	const APPMain = defineAsyncComponent(() => import('./Main.vue'));
	const scrollStore = useScrollStore();
	scrollStore.init();
	const scroll = ref(0);
	const page = ref<HTMLElement>();
	onBeforeRouteLeave((to, from, next) => {
		console.log('666');
	});
	router.beforeEach((to, from, next) => {
		scrollStore.update(from.fullPath, scroll.value);
		next();
	});
	router.afterEach((to) => {
		console.log('enter: -----------------------------------');
		// appMain.value.scrollTop = scrollStore.useScroll(to.fullPath) as number;
	});
</script>

<template>
	<div class="flex flex-col w-full h-full">
		<Navbar />
		<APPMain
			ref="page"
			@scroll="
				(e) => {
					scroll = e.target.scrollTop;
				}
			"
			class="flex-1"
		/>
	</div>
</template>
