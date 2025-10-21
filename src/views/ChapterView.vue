<script setup>
import LinkBar from '../components/LinkBar.vue';
import { slugify } from '../utils/common';
import {useRoute} from 'vue-router'

const route=useRoute()

const title='High School Legend Red Dragon'
const titleNo = route.query.title_no 
const chapterNo='170'
const links=[{name:title,path:`/serie/${slugify(title)}`,query:{title_no:titleNo}},{name:`Chapter ${chapterNo}`,path:`/serie/${slugify(title)}/chapter/${chapterNo}`}]
console.log(titleNo)
</script>

<template>
    <div class="w-100% md:w-90% lg:w-70% mx-auto">
        <div class="flex flex-col gap-2">
            <h2>{{title+' - Chapter '+chapterNo}}</h2>
            <LinkBar :links="links"/>
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