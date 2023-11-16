<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const Navbar = defineAsyncComponent(
    () => import('./navbar.vue')
)
</script>

<template>
    <div class="w-full h-full ">
        <router-view></router-view>
    </div>
</template>