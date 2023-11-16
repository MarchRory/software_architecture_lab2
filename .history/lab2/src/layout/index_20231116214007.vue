<script setup lang="ts">
	import { defineAsyncComponent, nextTick, onMounted, ref } from 'vue';
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
		next();
	});
	onMounted(() => {
		console.log(appMain.value);
	});
	router.afterEach((to) => {
		console.log('enter: -----------------------------------');
		console.log('onActived: ', appMain.value);
		console.log(scrollStore.useScroll(to.fullPath));
		setTimeout(() => {
			appMain.value.scrollTop = scrollStore.useScroll(to.fullPath) as number;
		}, 280);
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
