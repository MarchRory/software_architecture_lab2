<script setup lang="ts">
	import { defineAsyncComponent, watch } from 'vue';
	import { useRoute } from 'vue-router';
	import { useScrollStore } from '@/store/modules/scroll/index';
	const Navbar = defineAsyncComponent(() => import('./navbar.vue'));
	const APPMain = defineAsyncComponent(() => import('./Main.vue'));
	const currentRoute = useRoute();
	const scrollStore = useScrollStore();

	watch(
		() => currentRoute.fullPath,
		(newVal, oldVal) => {},
	);
</script>

<template>
	<div class="flex flex-col w-full h-full">
		<Navbar />
		<APPMain
			class="flex-1"
			@scroll="
				(e) => {
					console.log(e.target.scrollTop);
				}
			"
		/>
	</div>
</template>
