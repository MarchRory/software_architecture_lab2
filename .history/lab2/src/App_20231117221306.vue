<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useRouter } from 'vue-router';
	const router = useRouter();
	const FELoad = ref(true);
	const FELoading = defineAsyncComponent(() => import('@/components/FELoading/index.vue'));
</script>

<template>
	<div id="app">
		<FELoading class="FE" v-if="FELoad" />
		<router-view style="z-index: 999" v-show="!FELoad"></router-view>
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
	.FE {
		z-index: 9999;
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: aqua;
	}
</style>
