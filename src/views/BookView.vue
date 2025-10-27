<script setup>
import {ref} from 'vue'
import CardChapter from '../components/Card/CardChapter.vue';
import bannerBg from '@/assets/images/common/banner-bg.jpg';
import LinkBar from '../components/LinkBar.vue';
import { slugify } from '../utils/common';

const chapter = ref({
    "id": 1,
    "src": "@/assets/images/cover/cover1.jpg",
    "title": "Black Crow",
    "rating": "4.5",
    "views": "416.5K",
    "chaps": [
        {
            "id": 1,
            "title": "Chapter 117",
            "date": "Sep 18, 25",
            "src": "",
            "rating": "4.2",
            "views": "25.1K"
        },
        {
            "id": 2,
            "title": "Chapter 116",
            "date": "Sep 11, 25",
            "src": "",
            "rating": "4.3",
            "views": "28.9K"
        }
    ]
})
const links=[{name:chapter.value.title,path:`/serie/${slugify(chapter.value.title)}`}]
const fullPath={path:`/serie/${slugify(chapter.value.title)}`,query:{title_no:chapter.value.id}}
console.log(fullPath)
</script>

<template>
    <div class="w-100% md:w-90% lg:w-80% mx-auto flex flex-col gap-y-5">
        <div class="w-screen -ml-[50vw] left-1/2 relative" :style="{'background-image': `url(${bannerBg})`,'background-position': 'center','background-size': 'cover'}">
            <LinkBar class="w-100% md:w-90% lg:w-80% mx-auto" :links="links"/>
            <div class="flex flex-col md:flex-row gap-x-10 items-center py-20 w-100% md:w-90% lg:w-80% mx-auto">
                <div class="md:self-start w-200 mt-5">
                    <img class="w-full r-5" src="@/assets/images/cover/cover1.jpg" alt="">
                </div>
                <div class="w-full bg-[rgb(15,20,32,0.6)] flex flex-col md:flex-row p-15 gap-3 r-10">
                    <div class="flex flex-col gap-y-2 w-fit">
                        <h3>{{ chapter.title }}</h3>
                        <div class="flex items-center gap-5 border border-gray border-solid rounded p-7 t-15 w-fit">
                            <div class="flex gap-1 items-center justify-center">
                                <img class="size-15" src="@/assets/images/common/star.svg" alt="">
                                <p class="lh-15">{{ chapter.rating }}</p>
                            </div>
                            <div class="flex gap-1 items-center justify-center">
                                <img class="size-15" src="@/assets/images/common/view.svg" alt="">
                                <p class="lh-15">{{ chapter.views }}</p>
                            </div>
                        </div>
                        <div class="w-fit fw-900 flex flex-col gap-y-3">
                            <div class="flex flex-col gap-x-10 md:flex-row">
                                <p class="w-100">Alt Name(s)</p>
                                <p class="color-gray">두번사는랭커, Ranker Who Lives a Second Time</p>
                            </div>
                            <div class="flex flex-col gap-x-10 md:flex-row">
                                <p class="w-100">Author(s)</p>
                                <a>Nong Nong</a>
                            </div class="flex flex-col gap-x-10 md:flex-row">
                            <div class="flex flex-col gap-x-10 md:flex-row">
                                <p class="w-100">Artist(s)</p>
                                <a>Sa Doyeon</a>
                            </div>
                            <div class="flex flex-col gap-x-10 md:flex-row">
                                <p class="w-100">Genre(s)</p>
                                <a>Action,Adventure, Fantasy</a>
                            </div>
                        </div>
                    </div>
                    <div class="mt-auto lg:mt-50px lg:ml-auto flex flex-col gap-3">
                        <div class="flex flex-col gap-x-10 md:flex-row">
                            <p class="w-100">Published By</p>
                            <a>Toonily</a>
                        </div>
                        <div class="flex flex-col gap-x-10 md:flex-row">
                            <p class="w-100">Status</p>
                            <a>Ongoing</a>
                        </div>
                        <div class="flex w-full gap-10 items-start justify-center mt-10">
                            <div class="flex flex-col items-center">
                                <img class="w-35" src="@/assets/images/common/full-star.svg" alt="">
                                <p>Rate this</p>
                            </div>
                            <div class="w-1 self-stretch bg-black"></div>
                            <div class="flex flex-col items-center">
                                <img class="w-35" src="@/assets/images/common/bookmark.svg" alt="">
                                <p>237</p>
                                <p>bookmarks</p>
                            </div>
                        </div>
                        <div class="flex w-full gap-5 items-center justify-center">
                            <button class="w-100 h-40 p-5 hover:bg-yellow rounded border-none cursor-pointer">Read
                                First</button>
                            <button class="w-100 h-40 p-5 hover:bg-yellow rounded border-none cursor-pointer">Read
                                Last</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-y-5">
            <h1>Summary</h1>
            <p>Yeon-woo had a twin brother who disappeared five years ago. One day, a pocket watch left by his brother
                returned to his possession. Inside, he found a hidden diary in which was recorded “By the time you hear
                this, I guess I will be already dead….” Obelisk, the Tower of the Sun God, a world where several
                universes and dimensions intersect. In this world, his brother had fallen victim to betrayal while
                climbing up the tower. After learning the truth, Yeon-woo decided to climb the tower along with his
                brother’s diary. “From now on, I am Jeong-woo Cha.”</p>
        </div>
        <div>
            <div>
                <div></div>
                <div></div>
            </div>
            <div class="w-full">
                <p>reverse order</p>
                <div class="grid md:grid-cols-2 gap-x-5">
                    <CardChapter class="bg-transparent w-full [border-bottom:1px_solid_red]"
                        v-for="chapter in chapter.chaps" :key="chapter.id" :chapter="chapter" :fullPath="fullPath" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>