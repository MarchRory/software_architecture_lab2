<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { routes } from '@/router';
import { ref } from 'vue';
const router = useRouter()

const route = useRoute()
const Navlist = 0
console.log(route[0].children)
</script>

<template>
    <div>
       
    </div>
</template>

<style>
</style>