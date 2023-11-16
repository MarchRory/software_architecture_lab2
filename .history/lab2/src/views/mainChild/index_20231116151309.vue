<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	const ArticleComp = defineAsyncComponent(() => import('@/components/articleTemplate/index.vue'));
</script>

<template>
	<div>
		<ArticleComp />
	</div>
</template>
