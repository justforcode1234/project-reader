<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style>
*{
 box-sizing: border-box;
}

html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  color:white;
  background-color: #020d18;
}

p, h1, h2, h3, h4, h5, h6, ul, li {
  margin: 0;
}

a{
  text-decoration: none;
  color:inherit
}

ul li{
  text-decoration: none;
  list-style: none;
}

.page-bg-1{
  background: url('@/assets/images/common/bg-5.jpg') center top no-repeat;
  background-size: 100% 100%;
}


</style>