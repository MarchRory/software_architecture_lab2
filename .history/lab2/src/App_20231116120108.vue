<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style scoped>
#app{
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, red, blue);
}
</style>
