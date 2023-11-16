<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	const Navbar = defineAsyncComponent(() => import('./navbar.vue'));
</script>

<template>
	<div class="w-full h-full">
		<Navbar />

		<router-view></router-view>
	</div>
</template>
