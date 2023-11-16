<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	const Navbar = defineAsyncComponent(() => import('./navbar.vue'));
	const APPMain = defineAsyncComponent(() => import('./Main.vue'));
</script>

<template>
	<div class="w-full h-1/1">
		<Navbar />
		<APPMain />
	</div>
</template>
