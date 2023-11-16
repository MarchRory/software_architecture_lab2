<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
