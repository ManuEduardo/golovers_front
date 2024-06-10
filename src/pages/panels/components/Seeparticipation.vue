<script setup lang="ts">
defineProps({
  name: String,
  score: Number
})

</script>

<template>
  <div class="pl-4 flex justify-between gap-4">
    <p class="text-md">{{ name }}</p>
    <div class="rounded-full bg-yellow-200 p-2 w-16 text-center">
      <p class="font-bold">{{ score }} pt</p>
    </div>
  </div>



</template>

<style scoped>

</style>