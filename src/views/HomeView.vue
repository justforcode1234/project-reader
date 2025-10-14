<script setup>
import Carousel from '../components/carousel.vue';
import Slider from '../components/Slider.vue';

</script>

<template>
    <div class="w-95% md:w-85% lg:w-65% mx-auto mb-20 relative">
        <h3 class="[border-bottom:2px_solid_red] inline-block mb-20">NEW ON TOONILY</h3>
        <Slider/>
    </div>

    <div class="w-95% md:w-90% lg:w-70% mx-auto">
        <h3 class="[border-bottom:2px_solid_red] inline-block mb-20">LATEST RELEASES</h3>
        <Carousel />
    </div>
</template>

<style scoped></style>