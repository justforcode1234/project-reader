<script setup>
const props=defineProps({
    links:Object
})
</script>

<template>
    <div class="flex">
        <ul>
            <li>Home</li>
            <li v-for="(link,index) in links" :key="index">link</li>
        </ul>
    </div>
</template>

<style scoped></style>