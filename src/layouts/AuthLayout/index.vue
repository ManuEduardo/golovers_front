<script setup lang="ts">
import NavBar from "@/layouts/AuthLayout/components/NavBar.vue";
import Logo from '@/assets/img/logo.png'
import UserCard from "@/components/UserCard.vue";
</script>

<template>
  <div class="h-screen overflow-hidden flex">
    <NavBar/> 
    <div class="flex-grow ml-20 h-full flex flex-col bg-white">
      <div class="flex items-center h-20 flex-shrink-0 justify-between">
        <div class="flex-grow px-7 inline-flex items-center">
          <img :src="Logo" class="">
        </div>
        <div class=" w-80 px-6">
          <UserCard #nombre>Leonardo</UserCard>
        </div>
      </div>
      <div class="bg-clear-sky flex-grow max-h-full px-16  overflow-hidden">
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>