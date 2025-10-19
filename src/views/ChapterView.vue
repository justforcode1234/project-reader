<script setup>
import LinkBar from '../components/LinkBar.vue';
const title='High School Legend Red Dragon - Chapter 260'
const chapterNo='Chapter 170'
</script>

<template>
    <div class="w-100% md:w-90% lg:w-70% mx-auto">
        <div>
            <h1>{{title}}</h1>
            <LinkBar :title="title" :chapterNo="chapterNo"/>
            <div class="flex justify-between">
                <div>
                    <button>{{chapterNo}}</button>
                </div>
                <div>
                    <button>Prev</button>
                    <button>Manhwa Info</button>
                </div>
            </div>
        </div>
        <div>
            <div class="flex items-center justify-center">
                <p>LOAD ALL IMAGES AT ONCE</p>
                <button></button>
            </div>
            <div class="flex flex-col gap-0">
                <img class="w-full" src="@/assets/images/chapter/Second Life Ranker_00.jpg" alt="">
                <img class="w-full" src="@/assets/images/chapter/Second Life Ranker_01.jpg" alt="">
                <img class="w-full" src="@/assets/images/chapter/Second Life Ranker_02.jpg" alt="">
                <img class="w-full" src="@/assets/images/chapter/Second Life Ranker_03.jpg" alt="">
                <img class="w-full" src="@/assets/images/chapter/Second Life Ranker_04.jpg" alt="">
                <img class="w-full" src="@/assets/images/chapter/Second Life Ranker_05.jpg" alt="">
                <img class="w-full" src="@/assets/images/chapter/Second Life Ranker_06.jpg" alt="">

            </div>
        </div>
    </div>
</template>

<style scoped>

</style>