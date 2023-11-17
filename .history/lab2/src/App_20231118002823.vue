<script setup lang="ts">
	import { defineAsyncComponent, ref, onMounted } from 'vue';
	import { useRouter } from 'vue-router';
	import { useLoading } from '@/hooks/useLoading';
	const { loading } = useLoading();
	const router = useRouter();
	const FELoad = ref(true);
	const FELoading = defineAsyncComponent(() => import('@/components/FELoading/index.vue'));
	const Loading = defineAsyncComponent(() => import('@/components/loading/index.vue'));
	onMounted(() => {
		setTimeout(() => {
			FELoad.value = false;
		}, 1000 * 2.1);
	});
</script>

<template>
	<div id="app">
		<FELoading v-if="FELoad" />
		<Loading v-if="loading" />
		<router-view></router-view>
	</div>
</template>

<style>
	#app {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
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
