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
				class="flex items-center justify-center w-8 h-8 border-4 rounded-full border-l-gray-400"
			>
				<div class="w-4 h-4 bg-teal-400 rounded-full"></div>
			</li>
			<li class="font-mono navFont">Software Architecture</li>
		</ul>
		<ul>
			<li
				class="font-sans transition-all navFont"
				:class="[route.path == navItem.path ? 'active' : '']"
				v-for="(navItem, index) in Navlist"
				:key="index"
			>
				{{ navItem.title }}
			</li>
		</ul>
	</div>
</template>

<style scoped>
	.navFont {
		@apply ml-2 text-xl font-bold;
	}
	.active {
		color: rgb(80, 178, 178);
	}
	.active::before {
		display: block;
		content: '';
		position: relative;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: rgb(80, 178, 178);
		margin-top: 20px;
	}
</style>
