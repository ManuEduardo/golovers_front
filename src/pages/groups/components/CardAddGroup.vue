<script setup lang="ts">

import PlusCircle from "@/components/PlusCircle.vue";
</script>

<template>
  <RouterLink :to="{ name: 'groups-create' }" class="select-none
  bg-white flex justify-center items-center rounded-2xl shadow-lg shadow-gray-300">
    <div class="text-center text-gray-400 py-5">

      <!-- componente Plus circle -->
      <div class="w-16 h-16 flex items-center justify-center mx-auto text-3xl border-2 border-gray-400 rounded-full">
        +
      </div>

      <p class=" text-lg mt-5">Añadir Grupo</p>
    </div>
  </RouterLink>
</template>

<style scoped></style>