<script setup lang="ts">
defineProps({
  id:String,
  name:String
})
</script>

<template>
  <label :for="id" class="ms-2 text-sm font-medium text-gray-900 flex items-center me-4 gap-5">
    <input :id="id" type="radio" value="" :name="name"
           class="w-4 h-4 text-green-600 bg-gray-100 border-gray-200 focus:ring-green-200 focus:ring-2">
    <slot/>
  </label>

</template>

<style scoped>

</style>