<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useRouter } from 'vue-router';
	const router = useRouter();
	const FELoading = defineAsyncComponent(() => import('@/components/articleTemplate/index.vue'));
</script>

<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<style>
	#app {
		width: 100vw;
		height: 100vh;
	}

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-thumb {
		background-color: rgb(69, 199, 202);
		border-radius: 15px;
	}

	::-moz-scrollbar {
		width: 8px;
	}

	::-moz-scrollbar-thumb {
		background-color: rgb(69, 199, 202);
	}
</style>
