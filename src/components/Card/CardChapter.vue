<script setup>
import {useRoute} from 'vue-router'

const props=defineProps({
    chapter:Object
})

const route=useRoute()
const currentPath = route.path;
</script>

<template>
    <router-link :to="{path:`${currentPath}/chapter/${props.chapter.id}`,query:{...route.query}}" class="flex items-center justify-between p-5 bg-gray gap-2 cursor-pointer rounded">
        <p class="t-13 fw-600">{{ props.chapter.title}}</p>
        <p class="t-12 color-green">{{ props.chapter.date}}</p>
    </router-link>
</template>

<style scoped></style>