<script setup lang="ts">

import UserPerfile from "@/components/UserPerfile.vue";

const props = defineProps({
  nombre: String,
  participacion: Number
})

</script>

<template>

  <div class="p-2 flex justify-between">
    {{nombre}}
    <div class="rounded-full bg-yellow-200 p-2 w-16 text-center">
      {{participacion}}
    </div>
  </div>



</template>

<style scoped>

</style>