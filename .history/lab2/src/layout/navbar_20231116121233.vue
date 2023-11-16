<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue';
const router = useRouter()
const route = useRoute()
const Navlist = 0

</script>

<template>
    <div>
        {{ router }}
    </div>
</template>

<style>
</style>