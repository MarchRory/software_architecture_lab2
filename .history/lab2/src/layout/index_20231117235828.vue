<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	const Navbar = defineAsyncComponent(() => import('./navbar.vue'));
	const APPMain = defineAsyncComponent(() => import('./Main.vue'));
</script>

<template>
	<div class="flex flex-col items-center w-full h-full">
		<Navbar style="z-index: 999" />
		<APPMain style="z-index: 999" class="flex-1" />
	</div>
</template>
