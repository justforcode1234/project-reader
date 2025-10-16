<script setup>
import CardChapter from './CardChapter.vue';
const props=defineProps({
    chapter:Object,
    minimalStyle:{
        default:false
    }
})
function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}
</script>

<template>
    <router-link :to="{path:`/serie/${slugify(props.chapter.title)}`,query:{title_no:props.chapter.id}}" class="w-full max-w-250 flex flex-col gap-2 rounded cursor-pointer">
        <img class="w-100% rounded" src="@/assets/images/cover/cover1.jpg" alt="">
        <h4 class="truncate">{{props.chapter.title}}</h4>
        <div v-if="!minimalStyle" class="flex items-center justify-between border border-gray border-solid rounded p-3 t-15">
            <div class="flex gap-1 items-center justify-center">
                <img class="size-15" src="@/assets/images/common/star.svg" alt="">
                <p class="lh-15">{{ props.chapter.rating }}</p>
            </div>
            <div class="flex gap-1 items-center justify-center">
                <img class="size-15" src="@/assets/images/common/view.svg" alt="">
                <p class="lh-15">{{props.chapter.views}}</p>
            </div>
        </div>
        <div v-if="!minimalStyle" class="flex flex-col gap-1">
            <CardChapter v-for="chapter in chapter.chaps" :key="chapter.id" :chapter="chapter"/>
        </div>

    </router-link>
</template>

<style scoped></style>