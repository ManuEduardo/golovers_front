<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  ptj: String,
  student: String,
  date: String,
  color: String
})
</script>

<template>
  <div class=" py-2 px-3 flex flex-col gap-5 rounded-xl drop-shadow-lg" :class="color">
    <div class="flex flex-col">
      <div class="flex justify-between text-md items-center">
        <p class="font-bold">{{ title }}</p>
        <p class="bg-green-500 px-2 py-1 rounded-full">{{ ptj }}px</p>
      </div>
      <p class="text-sm">{{ description }}</p>
    </div>
    <div class="flex justify-between text-xs">
      <p>
        {{ student }}
      </p>
      <p>{{ date }}</p>
    </div>

  </div>
</template>

<style scoped>

</style>