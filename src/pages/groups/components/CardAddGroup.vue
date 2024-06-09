<script setup lang="ts">

import PlusCircle from "@/components/PlusCircle.vue";
</script>

<template>
  <RouterLink :to="{name:'groups-create'}" class="select-none cursor-pointer  bg-gray-100 flex justify-center items-center rounded-2xl">
    <div class="text-center text-gray-400 py-5">
      <PlusCircle/>
      <p class="text-xl">Añadir Grupo</p>
    </div>
  </RouterLink>
</template>

<style scoped>

</style>