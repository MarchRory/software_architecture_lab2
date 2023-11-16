<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	const Navbar = defineAsyncComponent(() => import('./navbar.vue'));
	const APPMain = defineAsyncComponent(() => import('./Main.vue'));
</script>

<template>
	<div class="flex flex-col w-full h-full">
		<Navbar />
		<APPMain
			class="flex-1"
			@scroll="
				(e) => {
					console.log(e.target.scrollTop);
				}
			"
		/>
	</div>
</template>
