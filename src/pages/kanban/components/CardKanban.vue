<script setup lang="ts">
defineProps({
  title:String,
  color:String
})
</script>

<template>
  <div class="bg-white flex flex-col gap-4 rounded-xl shadow-lg pb-4 select-none">
    <div class="text-center py-2 rounded-md" :class="color">
      <p class="text-2xl font-bold">{{title}}</p>
    </div>
    <div class="flex-grow px-6 py-2">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>