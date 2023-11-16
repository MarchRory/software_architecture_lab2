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
		<ul class="block list-none">
			<li
				class="items-center justify-center inline-block w-10 h-10 rounded-full border-3 border-b-gray-400"
			>
				<div class="w-6 h-6 bg-teal-400 rounded-full"></div>
			</li>
			<li>Software Architecture</li>
		</ul>
		<ul>
			<li v-for="(route, index) in Navlist" :key="index">{{ route.title }}</li>
		</ul>
	</div>
</template>

<style></style>
