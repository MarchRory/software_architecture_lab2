<script setup lang="ts">
	import { nextTick, ref, watch } from 'vue';
	import { useScrollStore } from '@/store/modules/scroll/index';
	import { useScroll } from '@/hooks/useScroll';
	import { useLoading } from '@/hooks/useLoading';
	import router from '@/router';
	const scrollStore = useScrollStore();
	scrollStore.init();
	const main = ref<HTMLDivElement>();
	const { pageScroll } = useScroll();
	const { loading } = useLoading();
	router.beforeEach((to, from, next) => {
		pageScroll.value = 0;
		loading.value = true;
		if (main.value) {
			scrollStore.update(from.fullPath, main.value.scrollTop);
		}
		next();
	});
	router.afterEach((to, from) => {
		nextTick(() => {
			if (main.value) {
				main.value.scrollTop = scrollStore.useScroll(to.fullPath) as number;
				setTimeout(() => {
					loading.value = false;
				}, 1000 * 1.5);
			}
		});
	});
	watch(
		() => pageScroll.value,
		(newV) => {
			let scrollTopTo = newV;
			if (main.value)
				main.value.scrollTo({ top: scrollTopTo > 0 ? scrollTopTo : 0, behavior: 'smooth' });
		},
	);
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
