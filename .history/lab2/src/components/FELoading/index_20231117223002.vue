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
		animation-name: beat;
		animation-direction: alternate;
		animation-duration: 3s;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
	}
	@keyframes beat {
		50% {
			transform: translateY(25vh);
		}
	}
</style>
