<script setup lang="ts">
	import { useRouter, useRoute, RouteRecordRaw } from 'vue-router';
	import { routes } from '@/router';
	import { ref } from 'vue';
	const router = useRouter();
	const route = useRoute();
	const Navlist = ref();
	function initNav() {
		Navlist.value = routes[0].children?.map((route: RouteRecordRaw) => {
			return {
				path: route.path,
				title: route?.meta.title,
			};
		});
	}
	initNav();
</script>

<template>
	<div class="flex items-center justify-around w-full h-16">
		<div>
			<div class=""><span></span></div>
			<div>Software Architecture</div>
		</div>
		<div>
			<div v-for="(route, index) in Navlist" :key="index">{{ route.title }}</div>
		</div>
	</div>
</template>

<style></style>
