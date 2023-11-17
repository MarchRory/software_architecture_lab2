<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { readCode } from '@/utils/file';
	import { getPipCode } from '@/API/code';
	const ArticleComp = defineAsyncComponent(() => import('@/components/articleTemplate/index.vue'));
	const meta = ref({
		type: '管道-过滤器风格',
		introduce:
			'在管道/过滤器风格的软件体系结构中，每个构件都有一组输入和输出，构件读输入的数据流，经过内部处理，然后产生输出数据流。这个过程通常通过对输入流的变换及增量计算来完成，所以在输入被完全消费之前，输出便产生了。因此，这里的构件被称为过滤器，这种风格的连接件就象是数据流传输的管道，将一个过滤器的输出传到另一过滤器的输入。此风格特别重要的过滤器必须是独立的实体，它不能与其它的过滤器共享数据，而且一个过滤器不知道它上游和下游的标识。一个管道/过滤器网络输出的正确性并不依赖于过滤器进行增量计算过程的顺序。',
		summary: '一个步骤的输出是下一个步骤的输入。',
		imgurl: '/src/assets/PipFlter/PipFilter.jpg',
		code: '',
		uml: '/src/assets/PipFlter/uml.png',
	});
	function init() {
		getPipCode().then((codes) => {
			meta.value.code = codes.join('\n\n-----------------------------------\n\n');
		});
	}
	init();
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
