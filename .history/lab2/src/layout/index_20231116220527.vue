<script setup lang="ts">
	import { defineAsyncComponent, ref, getCurrentInstance, onMounted } from 'vue';
	import router from '@/router';
	const Navbar = defineAsyncComponent(() => import('./navbar.vue'));
	const APPMain = defineAsyncComponent(() => import('./Main.vue'));
</script>

<template>
	<div class="flex flex-col w-full h-full">
		<Navbar />
		<APPMain class="flex-1" />
	</div>
</template>
