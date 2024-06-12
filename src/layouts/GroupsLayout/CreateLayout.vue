<script setup lang="ts">

import ArrowSvg from "@/vendor/svg/ArrowSvg.vue";
</script>

<template>
  <div class="flex h-full overflow-y-auto">
    <div class="flex-grow px-1 md:px-8 py-5 flex flex-col">
      <RouterLink :to="{name:'groups'}" class="flex ml-0 mr-auto my-auto gap-5 items-center pb-5 hover:scale-105 transition">
        <ArrowSvg class="w-12 h-12 rotate-90" />
        <p class="font-bold">Volver</p>
      </RouterLink>
      <div class="bg-white rounded-xl p-4 md:p-8 flex-grow shadow-md">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>