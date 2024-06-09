<script setup lang="ts">

import ArrowSvg from "@/vendor/svg/ArrowSvg.vue";
</script>

<template>
  <div class="flex h-full overflow-y-auto">
    <div class="flex-grow px-16 py-5 flex flex-col">
      <RouterLink :to="{name:'groups'}" class="flex gap-5 items-center pb-7">
        <ArrowSvg class="w-12 h-12 rotate-90" />
        <p class="font-bold">Volver</p>
      </RouterLink>
      <div class="bg-white rounded-xl p-5 flex-grow shadow-xl">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>