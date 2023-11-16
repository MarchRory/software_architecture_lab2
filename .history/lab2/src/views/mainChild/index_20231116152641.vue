<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	const ArticleComp = defineAsyncComponent(() => import('@/components/articleTemplate/index.vue'));
	const meta = {
		type: '主程序-子程序风格',
		introduce: '',
		summary: '',
	};
</script>

<template>
	<div>
		<ArticleComp :type="meta.type" :introduce="meta.introduce" :summary="meta.summary" />
	</div>
</template>
