<script setup lang="ts">
	import { ref } from 'vue';
</script>

<template>
	<div class="w-full h-auto px-56 pt-4">
		<router-view v-slot="{ Component }">
			<keep-alive>
				<component :is="Component" />
			</keep-alive>
		</router-view>
	</div>
</template>
