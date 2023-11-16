<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useRoute, onBeforeRouteLeave } from 'vue-router';
	import { useScrollStore } from '@/store/modules/scroll/index';
	import router from '@/router';
	const Navbar = defineAsyncComponent(() => import('./navbar.vue'));
	const APPMain = defineAsyncComponent(() => import('./Main.vue'));
	const currentRoute = useRoute();
	const scrollStore = useScrollStore();
	const appMain = ref();
	onBeforeRouteLeave((to, from, next) => {
		console.log(appMain.value);
	});
	router.beforeEach((to, from, next) => {
		console.log(from);
	});
</script>

<template>
	<div class="flex flex-col w-full h-full">
		<Navbar />
		<APPMain
			ref="appMain"
			class="flex-1"
			@scroll="
				(e) => {
					console.log(e.target.scrollTop);
				}
			"
		/>
	</div>
</template>
