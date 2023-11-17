<script setup lang="ts">
	import { nextTick, ref } from 'vue';
	import { useScrollStore } from '@/store/modules/scroll/index';
	import router from '@/router';
	const scrollStore = useScrollStore();
	scrollStore.init();
	const main = ref<HTMLDivElement>();
	router.beforeEach((to, from, next) => {
		if (main.value) {
			scrollStore.update(from.fullPath, main.value.scrollTop);
			next();
		}
	});
	router.afterEach((to, from) => {
		nextTick(() => {
			if (main.value) {
				main.value.scrollTop = scrollStore.useScroll(to.fullPath) as number;
			}
		});
	});
	function handleScroll(top: number) {
		window.scrollTo({ top: top, behavior: 'smooth' });
	}
</script>

<template>
	<div class="w-full h-auto px-56 pt-4 overflow-auto" ref="main">
		<router-view v-slot="{ Component }">
			<keep-alive>
				<component @onScroll="handleScroll" :is="Component" />
			</keep-alive>
		</router-view>
	</div>
</template>
