<script setup lang="ts">
import NavBar from "@/layouts/AuthLayout/components/NavBar.vue";
import Logo from '@/assets/img/logo.png'
</script>

<template>
  <div class="h-screen overflow-hidden flex">
    <NavBar/>
    <div class="flex-grow ml-20 h-full flex flex-col">
      <div class="flex items-center h-20 flex-shrink-0">
        <div class="flex-grow bg-gray-blue h-full px-7 inline-flex items-center">
          <h1 class="font-bold text-4xl">{{ $route.meta.title }}</h1>
        </div>
        <div class="w-80 px-6 flex-shrink-0">
          <img :src="Logo" class="w-full">
        </div>
      </div>
      <div class="bg-[#eff6ff] flex-grow">
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>