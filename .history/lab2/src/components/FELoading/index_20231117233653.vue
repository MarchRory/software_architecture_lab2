<template>
	<div class="FE">
		<div class="ball"></div>
	</div>
</template>

<style scoped>
	@property --radius {
		syntax: '<percentage>';
		inherits: true;
		initial-value: -5%;
	}
	.FE {
		z-index: 9999;
		@apply fixed w-full h-full bg-emerald-300 flex items-center justify-center;
		animation-name: expand;
		animation-duration: 0.8s;
		animation-timing-function: ease-in;
		animation-fill-mode: forwards;
		animation-delay: 1.5s;
		-webkit-mask-image: radial-gradient(
			circle,
			transparent calc(var(--radius) + 5%),
			#fff calc(var(--radius) - 5%)
		);
	}
	.ball {
		@apply absolute w-16 h-16 rounded-full bg-white;
		animation-name: beat, contract;
		animation-direction: alternate, normal;
		animation-delay: 0s, 1.2s;
		animation-duration: 1.2s, 0.3s;
		animation-timing-function: ease-in-out, ease-in;
		animation-iteration-count: 1, 1;
		animation-fill-mode: forwards, forwards;
	}
	@keyframes beat {
		50% {
			transform: translateY(25vh);
		}
	}
	@keyframes contract {
		99% {
			transform: scale(0.1);
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes expand {
		to {
			--radius: 105%;
		}
	}
</style>
