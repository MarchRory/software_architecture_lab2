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
	<div>
		<div>66</div>
	</div>
</template>

<style scoped></style>
