<script setup lang="ts">
defineProps({
  title:String,
  color:String
})
</script>

<template>
  <div class="flex flex-col gap-4 rounded-xl shadow-lg pb-4 select-none">
    <div class="text-center py-2" :class="color">
      <p class="text-3xl">{{title}}</p>
    </div>
    <div class="flex-grow bg-white px-3">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>