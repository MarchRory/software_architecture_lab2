<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { readCode } from '@/utils/file';
	const ArticleComp = defineAsyncComponent(() => import('@/components/articleTemplate/index.vue'));
	const javaFile = [];
	function init() {}
	const meta = ref({
		type: '管道-过滤器风格',
		introduce:
			'单线程控制，把问题划分为若干个处理步骤，构件即为主程序和子程序，子程序通常可合成为模块。过程调用作为交互机制，即充当连接件的角色。调用关系具有层次性，其语义逻辑表现为主程序的正确性取决于它调用的子程序的正确性',
		summary: '一个步骤的输出是下一个步骤的输入。',
		imgurl: '/src/assets/PipFlter/PipFilter.jpg',
		code: '',
		uml: '/src/assets/PipFlter/uml.png',
	});
</script>

<template>
	<div>
		<ArticleComp
			:type="meta.type"
			:introduce="meta.introduce"
			:summary="meta.summary"
			:imgurl="meta.imgurl"
			:code="meta.code"
			:uml="meta.uml"
		/>
	</div>
</template>
