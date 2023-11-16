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
	function switchTab(path: string) {
		router.push({
			path: path,
		});
	}
</script>

<template>
	<div class="flex items-center justify-around w-full h-16">
		<ul class="flex items-center justify-start list-none">
			<li
				class="flex items-center justify-center w-8 h-8 border-4 rounded-full border-l-gray-400"
			>
				<div class="w-4 h-4 bg-teal-400 rounded-full"></div>
			</li>
			<li class="font-mono text-2xl navFont">Software Architecture</li>
		</ul>
		<ul class="flex min-w-fit">
			<li
				@click="switchTab(navItem.path)"
				class="mr-8 font-sans text-lg transition-all navFont hover:cursor-pointer"
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
		@apply ml-2 font-bold;
	}
	.active {
		color: rgb(80, 178, 178);
	}
	.active::before {
		display: block;
		content: '';
		position: absolute;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: rgb(80, 178, 178);
		transform: translate(100%, 50%);
	}
</style>
