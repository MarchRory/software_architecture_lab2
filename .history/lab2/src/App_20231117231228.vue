<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useRouter } from 'vue-router';
	const router = useRouter();
	const FELoad = ref(true);
</script>

<template>
	<div id="app">
		<div v-if="FELoad" class="FE">
			<div class="ball"></div>
		</div>
		<div class="router">
			<router-view style="z-index: 999"></router-view>
		</div>
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
		background-size: 100% 100%;
		@apply fixed w-full h-full bg-emerald-300 flex items-center justify-center;
	}
	.ball {
		@apply absolute w-16 h-16 rounded-full bg-white;
		animation-name: beat, contract;
		animation-direction: alternate, normal;
		animation-delay: 0s, 1.5s;
		animation-duration: 1.5s, 0.5s;
		animation-timing-function: ease-in-out, ease-in;
		animation-iteration-count: 1, 1;
		animation-fill-mode: forwards;
	}
	@keyframes beat {
		50% {
			transform: translateY(25vh);
		}
	}
	@keyframes contract {
		100% {
			transform: scale(0.01);
		}
	}
	@property --radius {
		syntax: '<percentage>';
		inherits: true;
		initial-value: -5%;
	}
	.router {
		animation-name: expand;
		animation-duration: 2s;
		animation-timing-function: ease-in;
		animation-fill-mode: forwards;
		animation-delay: 2s;
	}
	@keyframes expand {
		0% {
			-webkit-mask-image: radial-gradient(
				circle,
				#fff calc(var(--radius) - 5%),
				transparent calc(var(--radius) + 5%)
			);
		}
		100% {
			--radius: 105%;
		}
	}
</style>
