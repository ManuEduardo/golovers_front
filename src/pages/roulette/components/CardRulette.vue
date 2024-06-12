<script setup lang="ts">

import useTask from "@/composables/useTask";

const {tasks} = useTask()

</script>

<template>

  <div class="">
    <div class="px-10 py-4 text-center">
      <p>Designa a tus compañeros las
        actividades del trabajo:</p>
    </div>
    <div class="px-10 pt-2 ">
      <div v-for="(item,idx) in tasks" :key="idx" class="bg-[#f9f9f9] rounded-xl px-10 py-6 mb-2">
        <input type="text"
               v-model="item"
               class="bg-transparent outline-none focus:ring-0 border-none text-center w-full py-2 leading-tight">

      </div>
    </div>

  </div>

</template>

<style scoped>

</style>