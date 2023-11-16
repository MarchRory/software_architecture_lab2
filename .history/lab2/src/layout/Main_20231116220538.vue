<script setup lang="ts">
	import { onMounted, ref } from 'vue';
	import { useScrollStore } from '@/store/modules/scroll/index';
	import router from '@/router';
	const scrollStore = useScrollStore();
	scrollStore.init();
	const main = ref();
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
	<div class="w-full h-auto px-56 pt-4 overflow-auto" ref="main">
		<router-view v-slot="{ Component }">
			<keep-alive>
				<component :is="Component" />
			</keep-alive>
		</router-view>
	</div>
</template>
