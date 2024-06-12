<script setup lang="ts">
import ImgGroup from "@/assets/img/groups/group1.png";
const props = defineProps({
  code: String,
  img: String,
  name: String,
  description: String,
  className: String,
})
</script>

<template>
  <RouterLink to="">
    <div class="select-none h-full bg-white px-7 py-4 rounded-2xl shadow-lg shadow-gray-300">
      <div class="mb-3">
        <div class="border-b-2 px-1 border-cyan py-3">
          <img :src="ImgGroup" alt="" class="select-none pointer-events-none w-full">
        </div>
        <div class="flex justify-between mb-4 mt-3">
          <div>
            <p class="font-bold text-xl mb-1">{{ name }}</p>
            <p class="text-xs text-gray-600">{{ className }}</p>
          </div>
          <p class="font-bold text-xl">{{ code }}</p>
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