<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	const ArticleComp = defineAsyncComponent(() => import('@/components/articleTemplate/index.vue'));
	const meta = {
		type: '主程序-子程序风格',
		introduce: '',
		summary:
			'结构化程序设计的一种典型风格，从功能的观点设计系统，通过逐步分解和细化，形成整个系统的体系结构。',
	};
</script>

<template>
	<div>
		<ArticleComp :type="meta.type" :introduce="meta.introduce" :summary="meta.summary" />
	</div>
</template>
