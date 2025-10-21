<script setup>
const props=defineProps({
    links:Array,
})
</script>

<template>
    <nav class="text-sm w-fit">
        <ul class="flex p-0">
            <li><router-link to="/" class="hover:text-blue-400">Home</router-link></li>
            <li v-for="(link,index) in links" :key="index"><router-link class="hover:text-blue-400" :to="{path:props.links[index].path,query:props.links[index].query}"><span class="mx-4 color-white fw-600">/</span>{{ props.links[index].name}}</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
li{
    text-transform: capitalize;
}

li:last-child{
    pointer-events:none;
    color:gray;
}
</style>