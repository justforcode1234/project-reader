<script setup>
import { ref } from 'vue';
import LoginView from '../auth/LoginView.vue';
const searchOn = ref(false)
</script>

<template>
    <div class="bg-green">
        <div class="flex flex-column items-center justify-start bg-green py-15 w-95% md:w-90% lg:w-70% mx-auto">
            <div class="w-100">
                <router-link to="/">Reader</router-link>
            </div>
            <div>
                <ul class="hidden sm:flex sm:justify-end p-0 gap-5">
                    <li class="cursor-pointer hover:text-yellow-400">Categories</li>
                    <li class="cursor-pointer hover:text-yellow-400">Manhwa</li>
                    <li class="cursor-pointer hover:text-yellow-400">Rankings</li>
                </ul>
            </div>
            <div class="flex gap-3 justify-end ml-auto">
                <div class="flex items-center justify-center relative">
                    <input v-if="searchOn"
                        class="h-30 border-none rounded-tl-lg rounded-bl-lg focus:outline-none pl-10 bg-white"
                        type="search" name="" id="" placeholder="Search Manhwa">
                    <button @click="searchOn = !searchOn" class="h-30 border-none rounded -ml-2 bg-white"><img
                            class="h-full" src="@/assets/images/common/search.svg" alt=""></button>
                    <!-- <div v-show="!searchOn" class="w-full h-200 bg-white absolute top-30 left-0 z-200"></div> -->
                </div>
                <router-link class="px-10 py-3 border-solid rounded-full flex items-center justify-center gap-1" to="/auth/login"><img src="@/assets/images/common/account.svg" alt=""><p>Sign in</p></router-link>
            </div>
        </div>
    </div>
</template>

<style scoped></style>