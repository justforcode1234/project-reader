<script setup>
import Card from './Card/Card.vue';
import chapters from '@/chapters.json'
import { fetchManhwas } from '../api/manhwaService';

// const manhwas=fetchManhwas()
// console.log(manhwas)


</script>

<template>
    <div class="grid items-center justify-between justify-items-center lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-5">
        <Card v-for="chapter in chapters.cards" :key="chapter.id" :chapter="chapter" />
    </div>

</template>

<style scoped></style>