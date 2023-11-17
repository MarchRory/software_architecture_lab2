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
		animation-name: beat expand;
		animation-direction: alternate;
	}
	@keyframes beat {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(20vh);
		}
		100% {
			transform: translateY(40vh);
		}
	}
</style>
