<script setup>
import NavBarView from '../views/NavBar/NavBarView.vue';
import FooterView from '../views/Footer/FooterView.vue'
</script>

<template>
    <div class="min-h-screen mx-auto flex flex-col">
        <NavBarView/>
        <div class="flex-1 py-10">
            <RouterView/>
        </div>
        <FooterView/>
    </div>
</template>

<style scoped>
</style>