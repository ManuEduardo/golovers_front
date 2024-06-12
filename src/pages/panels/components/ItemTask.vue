<script setup lang="ts">

  const props = defineProps({
    task:String
  })

</script>

<template>

  <div class=" px-1 py-1">
    <div class="bg-white rounded-full shadow-sm pl-4 pr-4 py-2">
      <slot/>
    </div>
  </div>

</template>

<style scoped>

</style>