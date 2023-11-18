<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { getOOPCode } from '@/API/code';
	const ArticleComp = defineAsyncComponent(() => import('@/components/articleTemplate/index.vue'));
	const meta = ref({
		type: '面向对象风格',
		introduce:
			'在面向对象体系结构中，软件工程的模块化、信息隐藏、抽象和重用原则得到了充分的体现。在这种体系结构中，数据表示和相关原语操作都被封装在抽象数据类型中。在这种风格中，对象是构件，也成为抽象数据类型的实例。对象与对象之间，通过函数调用和过程调用来进行交互。',
		summary: '各司其职',
		imgurl: new URL('../../assets/OOP/OOP.png', import.meta.url).href,
		code: '',
		uml: new URL('../../assets/OOP/uml.png', import.meta.url).href,
	});
	function init(): void {
		getOOPCode().then((codes) => {
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
