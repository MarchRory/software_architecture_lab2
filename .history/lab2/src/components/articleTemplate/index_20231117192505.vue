<script setup lang="ts">
	import { shift } from '@/utils/shift';
	import { readText } from '@/utils/file';
	import { ref, watch, getCurrentInstance, onMounted } from 'vue';
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
	const originStr = ref<string>('');
	const resStr = ref<string>('');
	const fileInput = ref();
	const title = ref();
	const visibleObserver = ref();
	const isTitleVisible = ref(false);
	onMounted(() => {
		visibleObserver.value = new IntersectionObserver((entries) => {
			isTitleVisible.value = entries[0].intersectionRatio > 0;
			if (entries[0].intersectionRatio > 0) {
				console.log('66');
			}
		});
		visibleObserver.value.observe(title.value);
	});
</script>

<template>
	<div class="w-full font-mono h-fit" ref="ctx">
		<div class="flex flex-col items-center mb-12">
			<div ref="title" class="mt-24 mb-8 font-sans text-5xl font-bold text-center w-fit">
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
				<article id="type" class="px-8 text-xl font-bold indent-8 text-zinc-500">
					{{ introduce }}
				</article>
			</div>
			<div class="mb-24">
				<div class="title">原理图</div>
				<br />
				<img id="uml" class="liushi-img" lazy :src="imgurl" />
			</div>
			<div class="mb-24">
				<div class="title">源代码结构</div>
				<br />
				<img id="source" class="liushi-img" :src="uml" alt="" />
			</div>
			<div class="mb-24" v-highlight>
				<div id="code" class="mb-6 title">关键代码</div>
				<pre>
                    <code class="w-10/12 text-sm liushi-img">{{ code }}</code>
                </pre>
			</div>
			<div class="mb-24">
				<div class="title">Have a try</div>
				<br />
				<input
					id="try"
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
		<div class="">Top</div>
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
		@apply text-slate-100 font-extralight text-xl mt-6 flex-wrap break-words w-11/12 h-4/6 overflow-auto;
	}
	.originStr::before {
		content: 'Origin';
	}
	.resStr::before {
		content: 'Shifted';
	}
	.originStr::before,
	.resStr::before {
		@apply text-6xl text-slate-500 font-mono font-bold relative left-96;
	}
</style>
