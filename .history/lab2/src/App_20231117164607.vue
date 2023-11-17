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

<style>
	#app {
		width: 100vw;
		height: 100vh;
	}

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-thumb {
		background-color: rgb(67, 219, 221);
	}

	::-moz-scrollbar {
		width: 8px;
		border-radius: 10px;
	}

	::-moz-scrollbar-thumb {
		background-color: rgb(67, 219, 221);
	}
</style>
