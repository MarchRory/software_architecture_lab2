<script setup lang="ts">
	import { useRouter } from 'vue-router';
	const router = useRouter();
	function enter() {
		router.push({
			path: '/home',
		});
	}
</script>

<template>
	<div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%)">
		<div></div>
	</div>
</template>

<style scoped></style>
