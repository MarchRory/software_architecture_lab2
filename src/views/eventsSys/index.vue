<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { getEventsCode } from '@/API/code';
	const ArticleComp = defineAsyncComponent(() => import('@/components/articleTemplate/index.vue'));
	const meta = ref({
		type: '事件系统风格',
		introduce:
			'事件：能够激活对象功能的动作，当发生动作后会给所涉及对象发送一条消息，对象便可执行相应的功能。事件系统主要分为隐式调用和显示调用两种隐式调用：\n1.事件的触发者不知道那些构件会被影响，相互独立\n2.不能假设构件的处理顺序，甚至不知道哪些构件或过程会被调用\n3.在整个系统中，各个构件之间无联系，各自独立，通过对事件的发布和注册实现关联',
		summary: '不直接调用一个过程，而是触发或广播一个或多个事件',
		imgurl: new URL('../../assets/eventsSys/EventsSys.png', import.meta.url).href,
		code: '',
		uml: new URL('../../assets/eventsSys/uml.png', import.meta.url).href,
	});
	function init(): void {
		getEventsCode().then((codes) => {
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
