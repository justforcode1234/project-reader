<script setup>
import { ref } from 'vue';
const searchOn = ref(false)
</script>

<template>
    <div class="bg-green">
        <div class="flex flex-column items-center justify-start bg-green py-10 w-95% md:w-90% lg:w-70% mx-auto">
            <div class="w-100">
                <router-link to="/">Reader</router-link>
            </div>
            <div>
                <ul class="hidden sm:flex sm:justify-end p-0 gap-5">
                    <li class="cursor-pointer hover:text-yellow-400">Home</li>
                    <li class="cursor-pointer hover:text-yellow-400">Manga</li>
                    <li class="cursor-pointer hover:text-yellow-400">About</li>
                    <li class="cursor-pointer hover:text-yellow-400">Categories</li>
                </ul>
            </div>
            <div class="flex gap-3 justify-end ml-auto">
                <div class="flex items-center justify-center relative">
                    <input v-if="!searchOn"
                        class="h-25 border-none rounded-tl-lg rounded-bl-lg focus:outline-none pl-10 bg-white"
                        type="search" name="" id="" placeholder="Search Manhwa">
                    <button @click="searchOn = !searchOn" class="h-25 border-none rounded -ml-2 bg-white"><img
                            class="h-full" src="@/assets/images/common/search.svg" alt=""></button>
                    <!-- <div v-show="!searchOn" class="w-full h-200 bg-white absolute top-30 left-0 z-200"></div> -->
                </div>
                <button>Login</button>
                <button>Get Started</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>