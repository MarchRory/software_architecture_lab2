<script setup lang="ts">
	import { shift } from '@/utils/shift';
	import { ref, getCurrentInstance, onMounted } from 'vue';
	const props = defineProps<{
		type: string;
		introduce: string;
		summary: string;
		imgurl: string;
		code: string;
		uml: string;
	}>();
	function handleFileUpload(e) {
		let file = e.target.files[0];
		console.log(file);
	}
	function chooseFile() {
		fileInput.value.click();
	}
	const originStr = ref();
	const resStr = ref();
	const fileInput = ref();
</script>

<template>
	<div class="w-full font-mono h-fit" ref="ctx">
		<div class="flex flex-col items-center mb-12">
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
				<div class="title">风格介绍</div>
				<br />
				<article class="px-8 text-xl font-bold indent-8 text-zinc-500">{{ introduce }}</article>
			</div>
			<div class="mb-24">
				<div class="title">原理图</div>
				<br />
				<img class="liushi-img" lazy :src="imgurl" />
			</div>
			<div class="mb-24">
				<div class="title">源代码结构</div>
				<br />
				<img class="liushi-img" :src="uml" alt="" />
			</div>
			<div class="mb-24" v-highlight>
				<div class="mb-6 title">关键代码</div>
				<pre>
                    <code class="w-10/12 text-sm liushi-img">{{ code }}</code>
                </pre>
			</div>
			<div class="mb-24">
				<div class="title">Have a try</div>
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
					<div class="strBox originStr">{{ originStr }}</div>
					<div class="strBox resStr">{{ resStr }}</div>
				</div>
			</div>
		</main>
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
		@apply w-5/12 h-96 overflow-auto rounded-lg bg-slate-700;
	}
	.originStr::before {
		content: 'Origin';
	}
	.resStr::before {
		content: 'Shifted';
	}
	.originStr::before,
	.resStr::before {
	}
</style>
