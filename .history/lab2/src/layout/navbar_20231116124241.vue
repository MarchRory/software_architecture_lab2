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
		<ul class="flex items-center justify-start list-none">
			<li
				class="flex items-center justify-center w-8 h-8 border-2 rounded-full border-l-gray-400"
			>
				<div class="w-6 h-6 bg-teal-400 rounded-full"></div>
			</li>
			<li class="ml-2 font-mono text-xl">Software Architecture</li>
		</ul>
		<ul>
			<li v-for="(route, index) in Navlist" :key="index">{{ route.title }}</li>
		</ul>
	</div>
</template>

<style></style>
