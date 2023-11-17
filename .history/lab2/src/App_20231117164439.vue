<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useRouter } from 'vue-router';
	const router = useRouter();
</script>

<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<style scoped>
	#app {
		width: 100vw;
		height: 100vh;
	}

	.scrollbar::-webkit-scrollbar {
		width: 20px;
		height: 20px;
	}

	.scrollbar::-webkit-scrollbar-track {
		border-radius: 100vh;
		background: #f7f4ed;
	}

	.scrollbar::-webkit-scrollbar-thumb {
		background: #e0cbcb;
		border-radius: 100vh;
		border: 3px solid #f6f7ed;
	}

	.scrollbar::-webkit-scrollbar-thumb:hover {
		background: #c0a0b9;
	}
</style>
