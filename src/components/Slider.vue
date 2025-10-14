<script setup>
import Card from './Card/Card.vue';
import chapters from '@/chapters.json'


</script>

<template>
<div class="flex overflow-scroll gap-3 custom-showcase ">
    <Card v-for="chapter in chapters.cards" :key="chapter.id" :chapter="chapter" :minimalStyle="true" class="flex-shrink-0 max-w-40"/>
    <button class="bg-white color-black r-50 absolute z-10 top-[45%] left-[-20px] h-50 w-50 border-none"><</button>
    <button class="bg-white color-black r-50 absolute z-10 top-[45%] right-[-20px] h-50 w-50 border-none">></button>
</div>
</template>

<style scoped>
.custom-showcase::-webkit-scrollbar{
    display:none
}
</style>