<script setup lang="ts">
	import { shift } from '@/utils/shift';
	import { readText } from '@/utils/file';
	import { anchorModel } from '@/types/anchor';
	import { useScroll } from '@/hooks/useScroll';
	import { ref, watch, onMounted, toRef } from 'vue';
	const props = defineProps<{
		type: string;
		introduce: string;
		summary: string;
		imgurl: string;
		code: string;
		uml: string;
	}>();
	const originStr = ref<string>('');
	const resStr = ref<string>('');
	const fileInput = ref();
	const tryRef = ref();
	const title = ref();
	const introduceRef = ref();
	const umlRef = ref();
	const source = ref();
	const codeAnchor = ref();
	const visibleObserver = ref();
	const isTitleVisible = ref(false);
	const anchor = ref<anchorModel[]>([]);
	const { pageScroll } = useScroll();
	function initAnchor() {
		anchor.value = [
			{
				scrollTop: introduceRef.value.offsetTop - 150,
				name: '风格',
			},
			{
				scrollTop: umlRef.value.offsetTop - 150,
				name: '原理',
			},
			{
				scrollTop: source.value.offsetTop,
				name: '结构',
			},
			{
				scrollTop: codeAnchor.value.offsetTop + 600,
				name: '源码',
			},
			{
				scrollTop: tryRef.value.offsetTop + 900,
				name: 'Try',
			},
		];
	}
	function handleFileUpload(e) {
		let file = e.target.files[0];
		readText(file)
			.then((res) => {
				originStr.value = res;
			})
			.then(() => {
				resStr.value = shift(originStr.value);
			});
	}
	function chooseFile() {
		fileInput.value.click();
	}
	function scrollTo(top: number) {
		console.log(top);
		pageScroll.value = top;
	}
	onMounted(() => {
		initAnchor();
		visibleObserver.value = new IntersectionObserver((entries) => {
			isTitleVisible.value = entries[0].intersectionRatio > 0;
		});
		visibleObserver.value.observe(title.value);
	});
</script>

<template>
	<div class="w-full font-mono h-fit">
		<div class="flex flex-col items-center mb-12" ref="title">
			<div class="mt-24 mb-8 font-sans text-5xl font-bold text-center w-fit">
				{{ type }}
			</div>
			<div
				class="flex-wrap font-mono text-lg font-bold text-center break-words w-fit summary text-zinc-400"
			>
				{{ summary }}
			</div>
		</div>
		<main class="flex flex-col justify-around">
			<div class="mb-24">
				<div class="title" ref="introduceRef">风格介绍</div>
				<br />
				<article class="px-8 text-xl font-bold indent-8 text-zinc-500">
					{{ introduce }}
				</article>
			</div>
			<div class="mb-24">
				<div ref="umlRef" class="title">原理图</div>
				<br />
				<img class="liushi-img" lazy :src="imgurl" />
			</div>
			<div class="mb-24" ref="source">
				<div class="title">源代码结构</div>
				<br />
				<img class="liushi-img" :src="uml" alt="" />
			</div>
			<div class="mb-24" v-highlight ref="codeAnchor">
				<div class="mb-6 title">源码</div>
				<pre>
                    <code class="w-10/12 text-sm liushi-img">{{ code }}</code>
                </pre>
			</div>
			<div class="mb-24">
				<div ref="tryRef" class="title">Have a try</div>
				<br />
				<input
					ref="fileInput"
					style="display: none"
					type="file"
					@change="handleFileUpload"
					accept=".txt"
				/>
				<div
					@click="chooseFile"
					class="px-6 py-4 text-xl font-bold text-white transition-all border-0 border-transparent rounded-lg cursor-pointer bg-cyan-400 w-fit"
				>
					上传txt文件
				</div>
				<div class="flex items-center justify-between w-10/12 h-fit" style="margin: 2rem auto">
					<div class="strBox originStr">
						<article>{{ originStr }}</article>
					</div>
					<div class="strBox resStr">
						<article>{{ resStr }}</article>
					</div>
				</div>
			</div>
		</main>
		<ul class="fixed transition-all bottom-44" style="left: 93%">
			<li
				v-for="(anchorItem, index) in anchor"
				:key="index"
				@click="scrollTo(anchorItem.scrollTop)"
			>
				{{ anchorItem.name }}
			</li>
			<li @click="scrollTo(0)">Top</li>
		</ul>
	</div>
</template>

<style scoped>
	.summary::before {
		content: '';
		display: block;
		width: 30px;
		height: 15px;
		position: relative;
		right: 30px;
		border-left: 3px solid rgb(169, 169, 169);
		border-top: 3px solid gray;
	}
	.summary::after {
		content: '';
		display: block;
		width: 30px;
		height: 15px;
		position: relative;
		left: 100%;
		border-right: 3px solid rgb(169, 169, 169);
		border-bottom: 3px solid gray;
	}
	.title {
		@apply font-mono text-3xl font-bold text-zinc-600;
	}
	.title::before {
		content: '';
		margin-right: 10px;
		border-left: 4px solid rgb(23, 173, 173);
		height: 1.875rem;
	}
	.liushi-img {
		margin: 0 auto;
		@apply shadow-xl rounded-xl;
	}
	.strBox {
		@apply w-5/12 h-96 px-2 py-4  rounded-lg bg-slate-700 shadow-lg;
	}
	.strBox article {
		margin: 0 auto;
		white-space: pre-wrap;
		height: 80%;
		@apply text-slate-100 font-extralight text-xl mt-6 flex-wrap break-words w-11/12 overflow-auto;
	}
	.originStr::before {
		content: 'Origin';
	}
	.resStr::before {
		content: 'Shifted';
	}
	.originStr::before,
	.resStr::before {
		float: right;
		@apply text-6xl text-slate-500 font-mono font-bold mr-10;
	}
	ul li {
		cursor: pointer;
		@apply flex items-center justify-center px-4 py-5 rounded-lg font-mono font-bold text-xl mb-2 text-slate-800 hover:bg-teal-400 hover:text-white transition-all;
	}
</style>
