<script setup langts></script>

<template>
	<div class="container">
		<div class="mask"></div>
		<div class="loader">
			<div class="loader-square"></div>
			<div class="loader-square"></div>
			<div class="loader-square"></div>
			<div class="loader-square"></div>
			<div class="loader-square"></div>
			<div class="loader-square"></div>
			<div class="loader-square"></div>
		</div>
	</div>
</template>

<style scoped>
	@keyframes square-animation {
		0% {
			left: 0;
			top: 0;
		}

		10.5% {
			left: 0;
			top: 0;
		}

		12.5% {
			left: 32px;
			top: 0;
		}

		23% {
			left: 32px;
			top: 0;
		}

		25% {
			left: 64px;
			top: 0;
		}

		35.5% {
			left: 64px;
			top: 0;
		}

		37.5% {
			left: 64px;
			top: 32px;
		}

		48% {
			left: 64px;
			top: 32px;
		}

		50% {
			left: 32px;
			top: 32px;
		}

		60.5% {
			left: 32px;
			top: 32px;
		}

		62.5% {
			left: 32px;
			top: 64px;
		}

		73% {
			left: 32px;
			top: 64px;
		}

		75% {
			left: 0;
			top: 64px;
		}

		85.5% {
			left: 0;
			top: 64px;
		}

		87.5% {
			left: 0;
			top: 32px;
		}

		98% {
			left: 0;
			top: 32px;
		}

		100% {
			left: 0;
			top: 0;
		}
	}
	.container {
		z-index: 9999;
		transform: scale(1.5);
		@apply fixed w-full h-full bg-white flex items-center justify-center;
	}
	.mask {
		position: absolute;
		width: 150px;
		height: 150px;
		z-index: 90;
		transform: rotate(45deg) scale(0.75);
		backdrop-filter: blur(10px);
		animation-name: mask;
		animation-duration: 0.6s;
		animation-fill-mode: forwards;
		animation-timing-function: ease-in;
	}
	@keyframes mask {
		100% {
			backdrop-filter: blur(0px);
		}
	}
	.loader {
		z-index: 50;
		position: relative;
		width: 96px;
		height: 96px;
		transform: rotate(45deg) scale(0.75);
	}

	.loader-square {
		position: absolute;
		top: 0;
		left: 0;
		width: 28px;
		height: 28px;
		margin: 2px;
		border-radius: 0px;
		background: rgb(88, 207, 207);
		animation: square-animation 10s ease-in-out infinite both;
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}

	.loader-square:nth-of-type(0) {
		animation-delay: 0s;
	}

	.loader-square:nth-of-type(1) {
		animation-delay: -1.4285714286s;
	}

	.loader-square:nth-of-type(2) {
		animation-delay: -2.8571428571s;
	}

	.loader-square:nth-of-type(3) {
		animation-delay: -4.2857142857s;
	}

	.loader-square:nth-of-type(4) {
		animation-delay: -5.7142857143s;
	}

	.loader-square:nth-of-type(5) {
		animation-delay: -7.1428571429s;
	}

	.loader-square:nth-of-type(6) {
		animation-delay: -8.5714285714s;
	}

	.loader-square:nth-of-type(7) {
		animation-delay: -10s;
	}
</style>
