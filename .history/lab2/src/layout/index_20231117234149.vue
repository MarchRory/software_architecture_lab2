<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useLoading } from '@/hooks/useLoading';
	const { loading } = useLoading();
	const Navbar = defineAsyncComponent(() => import('./navbar.vue'));
	const APPMain = defineAsyncComponent(() => import('./Main.vue'));
</script>

<template>
	<div class="flex flex-col items-center w-full h-full">
		<Navbar />
		<APPMain class="flex-1" />
	</div>
</template>
