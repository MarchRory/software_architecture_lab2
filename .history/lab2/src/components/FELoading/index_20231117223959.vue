<script setup lang="ts"></script>

<template>
	<div class="FE">
		<div class="ball"></div>
	</div>
</template>

<style scoped>
	.FE {
		z-index: 9999;
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
	}
	@keyframes beat {
		50% {
			transform: translateY(25vh);
		}
	}
	@keyframes contract {
		100% {
			transform: scale(0.1);
		}
	}
</style>
