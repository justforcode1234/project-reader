<script setup>

const props=defineProps({
    chapter:Object,
    fullPath:Object
})

</script>

<template>
    <router-link :to="{path:`${props.fullPath.path}/chapter/${props.chapter.id}`,query:{title_no:props.fullPath.query.title_no}}" class="flex items-center justify-between p-5 bg-gray gap-2 cursor-pointer rounded">
        <p class="t-13 fw-600">{{ props.chapter.title}}</p>
        <p class="t-12 color-green">{{ props.chapter.date}}</p>
    </router-link>
</template>

<style scoped></style>