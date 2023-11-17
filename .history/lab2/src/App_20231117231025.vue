<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useRouter } from 'vue-router';
	const router = useRouter();
	const FELoad = ref(true);
	const FELoading = defineAsyncComponent(() => import('@/components/FELoading/index.vue'));
</script>

<template>
	<div id="app">
		<FELoading v-if="FELoad" />
		<router-view class="router" style="z-index: 999"></router-view>
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
	.router {
		animation-name: expand;
		animation-duration: 2s;
		animation-timing-function: ease-in;
		animation-fill-mode: forwards;
		animation-delay: 2s;
	}
</style>
