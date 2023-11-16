<script setup lang="ts">
	import { defineAsyncComponent, ref, getCurrentInstance, onMounted } from 'vue';
	import { useScrollStore } from '@/store/modules/scroll/index';
	import router from '@/router';
	const Navbar = defineAsyncComponent(() => import('./navbar.vue'));
	const APPMain = defineAsyncComponent(() => import('./Main.vue'));
	const scrollStore = useScrollStore();
	scrollStore.init();
	const scroll = ref(0);
	const page = ref<HTMLElement>();
	function handleScroll(e) {
		scroll.value = e.target.scrollTop;
		console.log(page.value);
	}
	onMounted(() => {
		console.log('Main: ', page.value);
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
		<APPMain ref="page" @scroll="handleScroll" class="flex-1" />
	</div>
</template>
