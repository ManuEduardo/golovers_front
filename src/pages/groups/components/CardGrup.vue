<script setup lang="ts">
const props = defineProps({
  id: String,
  img: String,
  group: String,
  description: String,
  curse: String,
})
</script>

<template>
  <RouterLink to="">
    <div class="select-none bg-white px-7 py-4 rounded-2xl">
      <div class="mb-3">
        <div class="border-b-2 px-1 border-cyan py-3">
          <img :src="img" alt="" class="select-none pointer-events-none w-full">
        </div>
        <div class="flex justify-between mb-4 mt-3">
          <div>
            <p class="font-bold text-xl mb-1">{{ group }}</p>
            <p class="text-xs text-gray-600">{{ curse }}</p>
          </div>
          <p class="font-bold text-xl">{{ id }}</p>
        </div>
        <p class="text-sm">
          <span class="font-bold">Descripción</span>
          {{ description }}
        </p>
      </div>
      <div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>

</style>