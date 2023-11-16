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
</script>

<template>
	<div class="w-full h-6 bg-teal-300"></div>
</template>

<style></style>
