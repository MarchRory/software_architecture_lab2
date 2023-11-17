<script setup lang="ts">
	import { ref, getCurrentInstance, onMounted } from 'vue';
	const props = defineProps<{
		type: string;
		introduce: string;
		summary: string;
		imgurl: string;
		code: string;
		uml: string;
	}>();
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
				<article class="px-8 font-bold indent-8 text-zinc-500">{{ introduce }}</article>
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
		</main>
	</div>
</template>

<style scoped>
	.summary::before {
		content: '';
		display: block;
		width: 15px;
		height: 15px;
		position: relative;
		right: 10%;
		border-left: 3px solid rgb(169, 169, 169);
		border-top: 3px solid gray;
	}
	.summary::after {
		content: '';
		display: block;
		width: 15px;
		height: 15px;
		position: relative;
		left: 105%;
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
</style>
