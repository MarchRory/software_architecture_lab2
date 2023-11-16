<script setup lang="ts">
	import { defineAsyncComponent, ref, onActivated } from 'vue';
	import { onBeforeRouteLeave } from 'vue-router';
	import { readCode } from '@/utils/file';
	const container = ref<HTMLDivElement>();
	const ArticleComp = defineAsyncComponent(() => import('@/components/articleTemplate/index.vue'));
	const meta = ref({
		type: '主程序-子程序风格',
		introduce:
			'单线程控制，把问题划分为若干个处理步骤，构件即为主程序和子程序，子程序通常可合成为模块。过程调用作为交互机制，即充当连接件的角色。调用关系具有层次性，其语义逻辑表现为主程序的正确性取决于它调用的子程序的正确性',
		summary:
			'结构化程序设计的一种典型风格，从功能的观点设计系统，通过逐步分解和细化，形成整个系统的体系结构。',
		imgurl: '/src/assets/mainChild/mainChildPic.png',
		code: '',
	});
	function init() {
		readCode('/src/assets/sourceJavaCode/src/MainAndSub/MainAndSub.java').then((res: string) => {
			meta.value.code = res;
		});
	}
	const scrollHistory = ref(0);
	onBeforeRouteLeave((to, from, next) => {
		if (container.value) {
			scrollHistory.value = container.value.scrollTop;
		}
		next();
	});
	onActivated(() => {
		if (scrollHistory.value && container.value) {
			container.value.scrollTop = scrollHistory.value;
		}
	});
	init();
</script>

<template>
	<div>
		<ArticleComp
			ref="container"
			:type="meta.type"
			:introduce="meta.introduce"
			:summary="meta.summary"
			:imgurl="meta.imgurl"
			:code="meta.code"
		/>
	</div>
</template>
